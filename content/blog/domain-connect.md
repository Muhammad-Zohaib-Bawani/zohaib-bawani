# Nobody wants to add an MX record

*Email hosting asks a customer to publish four DNS records at a registrar you do not control. Domain Connect is the standard that makes that a click — and here is what it actually specifies.*

Every business email product has the same cliff in its onboarding. Signup is easy. Billing is easy. Then the customer has to publish an MX record, an SPF record, a DKIM key and a DMARC policy at whichever registrar they bought their domain from years ago, using credentials they may not have, in an interface you have no control over.

This is the step where trials die. Not because the product is hard, but because DNS is someone else's UI.

## What the manual path really costs

On [MailAfiniti](https://mailafiniti.com/), the business email hosting product I build, the setup flow generates the exact records for a customer's domain, shows them with copy buttons and per-registrar guidance, then polls DNS until each record resolves and reports which ones are still missing.

That works, and the verification step is non-negotiable — you need to know the difference between "not published yet" and "published wrong". But it is still a human copying strings between two browser tabs, and every one of these can fail silently:

- The record gets pasted into the wrong zone, or with the domain appended twice (`mail.example.com.example.com`).
- A second SPF record is added instead of merging into the existing one, which invalidates both.
- The DKIM value is truncated by a registrar UI that limits TXT length.
- An old MX record from a previous provider is left in place at a lower priority, so mail keeps flowing to a dead server.
- Everything is correct, but the customer stops watching before propagation finishes and opens a support ticket.

## What Domain Connect is

Domain Connect is an open standard — MIT licensed, maintained by developers across several companies, and submitted to the IETF, which formed the DCONN working group around it. It defines a protocol between two roles: the **DNS Provider** that hosts the zone, and the **Service Provider** that needs records in it.

Instead of instructions, the Service Provider publishes a **template**: a JSON document describing the records a service needs, with variables where the customer-specific values go. The customer approves it once at their DNS Provider, and the records are written for them.

```json
{
  "providerId": "mailafiniti.com",
  "serviceId": "business-email",
  "providerName": "MailAfiniti",
  "serviceName": "Business Email",
  "version": 1,
  "records": [
    { "type": "MX",   "host": "@", "pointsTo": "mx1.%providerHost%", "priority": 10, "ttl": 3600 },
    { "type": "MX",   "host": "@", "pointsTo": "mx2.%providerHost%", "priority": 20, "ttl": 3600 },
    { "type": "SPFM", "host": "@", "spfRules": "include:spf.%providerHost%" },
    { "type": "TXT",  "host": "%dkimSelector%._domainkey",
      "data": "v=DKIM1; k=rsa; p=%dkimKey%", "ttl": 3600 },
    { "type": "TXT",  "host": "_dmarc",
      "data": "v=DMARC1; p=none; rua=mailto:%dmarcRua%", "ttl": 3600 }
  ]
}
```

Three variables are built in — `%domain%`, `%host%` and `%fqdn%` — and any others are yours to define and pass in at apply time. The `SPFM` record type is the detail worth noticing: it merges an SPF include into whatever SPF record already exists rather than adding a competing one, which is exactly the failure mode humans hit.

## Discovery: asking a domain who runs its DNS

Before you can offer the button, you have to know whether the customer's DNS Provider supports the standard. That answer lives in DNS itself: query the `_domainconnect` TXT record in the zone, get back a URL prefix, and ask it for the domain's settings.

```http
GET https://{_domainconnect}/v2/{domain}/settings

{
  "providerId":   "example-dns",
  "providerName": "Example DNS",
  "urlSyncUX":    "https://dns.example.com",
  "urlAsyncUX":   "https://dns.example.com",
  "urlAPI":       "https://api.dns.example.com"
}
```

No TXT record, or no response, means no Domain Connect for that domain. That is not an edge case to shrug at — it is most of your funnel on day one, which is why the manual path never goes away.

## The synchronous flow

The simplest version is a redirect. You send the customer to their DNS Provider with the template and its variable values in the query string; they authenticate, confirm they control the domain, see what will change, and approve. The records are applied there and then, and the browser comes back to your `redirect_uri`.

```http
{urlSyncUX}/v2/domainTemplates/providers/{providerId}/services/{serviceId}/apply
  ?domain=example.com
  &dkimSelector=mf1
  &dkimKey=MIIBIjANBg...
  &redirect_uri=https://app.example.com/dns/callback
  &state=csrf-token
  &sig=...&key=...
```

Two parameters carry real weight here. `state` is your CSRF token, echoed back on return. `sig` and `key` are the anti-phishing mechanism: the query string can be signed with RSA-SHA256, and the DNS Provider fetches your public key from the TXT record named by the template's `syncPubKeyDomain` to verify it. Sign your requests — an unsigned link that writes DNS records is a phishing primitive.

## The asynchronous flow

For anything beyond one-shot setup — adding a subdomain later, rotating a DKIM key, removing records when a customer cancels — the standard uses OAuth 2.0. You get consent once, exchange the code for an access token, then call the API server-side whenever the zone needs to change.

```http
POST {urlAPI}/v2/oauth/access_token
  code, client_id, client_secret, grant_type=authorization_code, redirect_uri
  -> { access_token, token_type: "bearer", expires_in, refresh_token }

POST {urlAPI}/v2/domainTemplates/providers/{providerId}/services/{serviceId}/apply
  domain, host, <template variables>, groupId?, force?
  -> 2xx applied | 409 conflict
```

There is a matching `revert` endpoint that removes a previously applied template, though implementing it is optional for DNS Providers. Treat cleanup as best-effort, not guaranteed.

## Conflicts are the interesting part

The spec is explicit about what collides: a CNAME conflicts with A, AAAA, TXT, MX, NS and other CNAMEs; NS conflicts with everything; MX and SRV conflict with records of the same type; A and AAAA conflict with each other so a service cannot end up half IPv4 and half IPv6. TXT matching is tunable through `txtConflictMatchingMode`, set to `None`, `All` or `Prefix`.

When the asynchronous apply hits one, you get an HTTP 409 with the offending records. You can pass `force=1` to overwrite, and records can be marked `essential` (`Always` or `OnApply`) or bundled with a `groupId` so related changes land together.

> For an email product, a 409 on MX is the single most useful signal in the whole flow: it means the domain already sends mail somewhere. That is a migration conversation, not an error toast.

## What I would actually ship

Domain Connect does not replace the manual path — it short-circuits it for the customers whose DNS Provider supports it. So the setup step becomes one flow with two branches:

1. Look up the `_domainconnect` TXT record for the domain as soon as it is claimed.
2. If a supporting provider answers, offer the one-click apply — signed, with `state`, using a template that merges SPF rather than replacing it.
3. Otherwise show the generated records with copy buttons and registrar-specific guidance.
4. Verify from your own side either way, by polling DNS until each record resolves, and keep reporting which ones are still missing.
5. Treat a conflict on MX as an existing-provider migration, and hand it to the migration flow instead of failing.

That last point is the one that survives whichever branch a customer takes. The standard automates the writing of records; it does not tell you they are working. Verification is still your job, and it is the part customers actually feel — the moment the setup screen stops warning them and their first message arrives.

DNS setup is not a support article you link to. It is a product surface, and it is the one standing between a paying customer and the thing they bought.

---

*Zohaib Bawani is a full-stack software engineer. He builds [MailAfiniti](https://mailafiniti.com/), business email hosting for small teams.*

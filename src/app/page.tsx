import { Hero } from '@/components/Hero';
import { StackStrip } from '@/components/StackStrip';
import { WorkIndex } from '@/components/WorkIndex';
import { CaseMailAfiniti } from '@/components/CaseMailAfiniti';
import { CaseHayya } from '@/components/CaseHayya';
import { OtherWork } from '@/components/OtherWork';
import { Capabilities } from '@/components/Capabilities';
import { Timeline } from '@/components/Timeline';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

/**
 * The scroll is an argument, in order:
 * who I am → that I work the whole stack → the two systems that prove it →
 * the rest of the work → what I use → where I have worked → who I am → hire me.
 */
export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <StackStrip />
        <WorkIndex />
        <CaseMailAfiniti />
        <CaseHayya />
        <OtherWork />
        <Capabilities />
        <Timeline />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

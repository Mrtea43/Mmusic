import type { ReactNode } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

function Block({ title, children }: { title: string; children: ReactNode }) {
  return <section><h2>{title}</h2>{children}</section>;
}

export default function Information({ page }: { page: 'contact' | 'privacy' | 'terms' }) {
  return (
    <article className="reading-page container">
      <a href="#/" className="back-link"><ArrowLeft className="w-4 h-4" />Back to MMusic</a>
      {page === 'contact' ? (
        <>
          <p className="section-kicker">Contact</p><h1>Let’s talk music.</h1>
          <p className="page-intro">A place for listening notes, collaboration ideas and questions about MMusic.</p>
          <aside className="draft-notice"><strong>Placeholder contact details</strong><p>These sample details are for the website preview. The email address is not a working contact address.</p></aside>
          <dl className="contact-details">
            <div><dt>Studio name</dt><dd>Monogram Music Studio <span>(placeholder)</span></dd></div>
            <div><dt>Email</dt><dd>hello@mmusic.example <span>(placeholder)</span></dd></div>
            <div><dt>Address</dt><dd>123 Example Street<br />Example City <span>(placeholder)</span></dd></div>
          </dl>
          <div className="reading-copy"><p>While the contact page is being finalised, you can explore the artist’s public profile on Suno.</p></div>
          <a className="primary-link" href="https://suno.com/@crashingballade7803" target="_blank" rel="noopener noreferrer">Visit the Suno profile <ArrowUpRight className="w-4 h-4" /></a>
        </>
      ) : page === 'privacy' ? (
        <>
          <p className="section-kicker">Privacy</p><h1>Privacy notice.</h1>
          <p className="page-intro">What the current MMusic website stores and which services help deliver it.</p>
          <aside className="draft-notice"><strong>Draft privacy notice</strong><p>Owner and contact information are placeholders. This notice needs the real operator’s details and review before it becomes a final policy.</p></aside>
          <div className="reading-copy">
            <Block title="About this website"><p>MMusic is a music listening and release-journal website. The sample operator name is Monogram Music Studio. Contact details on the <a href="#/contact">Contact page</a> are currently placeholders.</p></Block>
            <Block title="Saved preferences"><p>The light or dark theme you select is saved in your browser’s localStorage under the key “theme”. You can remove this preference by clearing this website’s stored site data.</p></Block>
            <Block title="Hosting and external content"><p>The website is hosted on GitHub Pages. Artwork and audio are requested from Suno’s media services, and typefaces are requested from Google Fonts. These requests can disclose technical information such as your IP address and browser details to those providers.</p><p>See the <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">GitHub privacy statement</a>, <a href="https://suno.com/privacy" target="_blank" rel="noopener noreferrer">Suno privacy notice</a> and <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google privacy policy</a> for their practices. Following an external link takes you to that service.</p></Block>
            <Block title="Accounts, tracking and messages"><p>The current website has no visitor accounts, advertising trackers, analytics scripts, newsletter signup or working contact form. Catalogue play and like counts are published song metadata; this website does not maintain a personal listening history.</p></Block>
            <Block title="Questions and updates"><p>A real privacy contact and operator information must be added here. The current placeholder email must not be used to send personal information. This draft reflects the website as of 18 October 2026.</p></Block>
          </div>
        </>
      ) : (
        <>
          <p className="section-kicker">Terms</p><h1>Terms of use.</h1>
          <p className="page-intro">A short draft covering the listening website and its content.</p>
          <aside className="draft-notice"><strong>Draft terms of use</strong><p>Operator and contact details are placeholders. These terms need review and completion before they become final.</p></aside>
          <div className="reading-copy">
            <Block title="Listening on MMusic"><p>MMusic provides a web player and information about music releases. You do not need an MMusic account to browse the catalogue or use the player.</p></Block>
            <Block title="Music and artwork"><p>Listening access does not grant permission to copy, redistribute, sell or reuse music, artwork or written content. Obtain any permissions you need from the relevant rights holder.</p></Block>
            <Block title="External services"><p>Audio and artwork are supplied through external media services. Availability can change. External websites have their own terms and privacy practices; MMusic is an independent website and is not Suno.</p></Block>
            <Block title="The app is in development"><p>The MMusic app is under development. This website does not currently offer app-store downloads, subscriptions or purchases. Any future app release will be announced separately.</p></Block>
            <Block title="Contact and revisions"><p>The sample operator name is Monogram Music Studio. Replace the placeholder details on the <a href="#/contact">Contact page</a> with a working contact before using this draft as final terms. Draft updated 18 October 2026.</p></Block>
          </div>
        </>
      )}
    </article>
  );
}

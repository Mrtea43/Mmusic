import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';
import MusicPlayer from '@/components/MusicPlayer';
import SiteChrome from '@/components/SiteChrome';
import HeroCarousel from '@/components/HeroCarousel';
import Information from '@/pages/Information';
import { JournalArticle, JournalPreview, NotFound } from '@/pages/Journal';
import { journal } from '@/data/journal';
import { songs } from '@/data/songs';

export default function Home() {
  const [hash, setHash] = useState(() => typeof window === 'undefined' ? '' : window.location.hash);
  const pageRef = useRef<HTMLDivElement>(null);
  const route = hash.startsWith('#/') ? hash.slice(1) : '/';
  const isHome = route === '/';
  const articleSlug = route.startsWith('/journal/') ? route.slice('/journal/'.length) : null;
  const pageName = route === '/contact' ? 'Contact' : route === '/privacy' ? 'Privacy' : route === '/terms' ? 'Terms' : journal.find((post) => post.slug === articleSlug)?.title;

  useEffect(() => {
    const onNavigation = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onNavigation);
    return () => window.removeEventListener('hashchange', onNavigation);
  }, []);

  useEffect(() => {
    document.title = isHome ? 'MMusic — Monogram Music' : `${pageName || 'Page not found'} — MMusic`;
    if (!isHome) {
      window.scrollTo(0, 0);
      pageRef.current?.focus({ preventScroll: true });
    } else if (!hash || hash === '#/') {
      window.scrollTo(0, 0);
    } else {
      document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' });
    }
  }, [hash, isHome, pageName]);

  return (
    <SiteChrome>
      {/* Keep the player mounted so changing pages does not interrupt music. */}
      <div hidden={!isHome}>
        <section className="hero-section container">
          <div className="hero-copy">
            <p className="section-kicker">Sound in black &amp; white</p>
            <h1>Monogram<br />Music.</h1>
            <p className="hero-intro">Shoegaze, garage, trance and whatever comes next. A collection of music by CrashingBallade7803.</p>
            <a href="#player" className="primary-link"><Play className="w-4 h-4" />Listen to the collection</a>
            <p className="hero-footnote">{songs.length} tracks. One place to listen.</p>
          </div>
          <HeroCarousel active={isHome} />
        </section>

        <section id="player" className="player-section section-space">
          <div className="container">
            <div className="section-heading">
              <div><p className="section-kicker">The collection</p><h2>Press play.</h2></div>
              <p>Explore the full catalogue with the MMusic web player.</p>
            </div>
            <MusicPlayer />
          </div>
        </section>

        <JournalPreview />

        <section className="development-section">
          <div className="container development-content">
            <div><p className="section-kicker">The next chapter</p><h2>MMusic, on the move.</h2></div>
            <div><p>The app is under development. For now, the full collection is right here in your browser.</p><a className="inline-link" href="#/contact">Get in touch</a></div>
          </div>
        </section>
      </div>

      {!isHome && (
        <div ref={pageRef} tabIndex={-1} className="page-view">
          {route === '/contact' || route === '/privacy' || route === '/terms'
            ? <Information page={route.slice(1) as 'contact' | 'privacy' | 'terms'} />
            : articleSlug ? <JournalArticle slug={articleSlug} /> : <NotFound />}
        </div>
      )}
    </SiteChrome>
  );
}

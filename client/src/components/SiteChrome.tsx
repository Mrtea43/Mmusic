import { useState, type ReactNode } from 'react';
import { Menu, Music, X } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

export default function SiteChrome({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <a className="skip-link" href="#main-content" onClick={(event) => {
        event.preventDefault();
        const main = document.getElementById('main-content');
        main?.focus({ preventScroll: true });
        main?.scrollIntoView({ block: 'start' });
      }}>Skip to content</a>
      <header className="site-header">
        <div className="container header-row">
          <a href="#/" className="brand" aria-label="MMusic home" onClick={() => setMenuOpen(false)}>
            <Music aria-hidden="true" className="w-7 h-7" /><span>MMUSIC</span>
          </a>
          <div className="header-actions">
            <nav aria-label="Main navigation" id="site-navigation" className={`site-nav ${menuOpen ? 'is-open' : ''}`}>
              <a href="#player" onClick={() => setMenuOpen(false)}>Listen</a>
              <a href="#journal" onClick={() => setMenuOpen(false)}>Journal</a>
              <a href="#/contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </nav>
            <ThemeToggle />
            <button type="button" className="mobile-menu icon-control" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>
      <main id="main-content" tabIndex={-1} className="flex-1">{children}</main>
      <footer className="site-footer">
        <div className="container footer-row">
          <div><a href="#/" className="footer-brand">MMusic</a><p>Monogram Music. Sound in black &amp; white.</p></div>
          <nav aria-label="Footer navigation"><a href="#/contact">Contact</a><a href="#/privacy">Privacy</a><a href="#/terms">Terms</a></nav>
          <p className="copyright">© {new Date().getFullYear()} MMusic</p>
        </div>
      </footer>
    </div>
  );
}

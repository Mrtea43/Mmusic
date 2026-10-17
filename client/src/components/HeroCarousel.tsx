import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';
import { songs } from '@/data/songs';

export default function HeroCarousel({ active = true }: { active?: boolean }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const song = songs[index];
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const respectMotion = () => { if (preference.matches) setPaused(true); };
    respectMotion();
    preference.addEventListener('change', respectMotion);
    return () => preference.removeEventListener('change', respectMotion);
  }, []);
  useEffect(() => {
    if (!active || paused || hovered) return;
    const timer = window.setInterval(() => setIndex((previous) => (previous + 1) % songs.length), 6500);
    return () => window.clearInterval(timer);
  }, [active, paused, hovered]);
  const browse = (direction: number) => {
    setPaused(true);
    setIndex((previous) => (previous + direction + songs.length) % songs.length);
  };
  return (
    <section className="cover-carousel" aria-label="Release artwork" aria-roledescription="carousel" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={(event) => {
      if (!(event.target as HTMLElement).closest('[data-rotation-control]')) setPaused(true);
    }}>
      <div className="cover-stage" aria-live={paused ? 'polite' : 'off'} aria-atomic="true">
        <img key={song.id} src={song.imageUrl} alt={`${song.title} cover artwork`} className="cover-image" />
        <div className="cover-stamp" aria-hidden="true">M.</div>
      </div>
      <div className="cover-caption">
        <div className="cover-description"><span className="muted-text">From the collection</span><h2>{song.title}</h2></div>
        <span className="cover-count" aria-label={`Cover ${index + 1} of ${songs.length}`}>{String(index + 1).padStart(2, '0')} / {songs.length}</span>
      </div>
      <div className="cover-controls">
        <button type="button" className="text-control" data-rotation-control aria-label={paused ? 'Play slideshow' : 'Pause slideshow'} onClick={() => setPaused(!paused)}>
          {paused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}{paused ? 'Play slideshow' : 'Pause slideshow'}
        </button>
        <div className="flex gap-2">
          <button type="button" className="icon-control" aria-label="Previous cover" onClick={() => browse(-1)}><ArrowLeft className="w-5 h-5" /></button>
          <button type="button" className="icon-control" aria-label="Next cover" onClick={() => browse(1)}><ArrowRight className="w-5 h-5" /></button>
        </div>
      </div>
    </section>
  );
}

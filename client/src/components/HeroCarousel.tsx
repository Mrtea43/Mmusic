import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { songs } from '@/data/songs';

export default function HeroCarousel({ active = true }: { active?: boolean }) {
  const [index, setIndex] = useState(0);
  const song = songs[index];
  useEffect(() => {
    if (!active) return;
    const timer = window.setInterval(() => setIndex((previous) => (previous + 1) % songs.length), 6500);
    return () => window.clearInterval(timer);
  }, [active]);
  const browse = (direction: number) => {
    setIndex((previous) => (previous + direction + songs.length) % songs.length);
  };
  return (
    <section className="cover-carousel" aria-label="Release artwork" aria-roledescription="carousel">
      <div className="cover-stage" aria-live="off">
        <img key={song.id} src={song.imageUrl} alt={`${song.title} cover artwork`} className="cover-image" />
        <div className="cover-stamp" aria-hidden="true"><img src="./music-mark.png" alt="" width="26" height="26" /></div>
      </div>
      <div className="cover-caption">
        <div className="cover-description"><span className="muted-text">From the collection</span><h2>{song.title}</h2></div>
        <span className="cover-count" aria-label={`Cover ${index + 1} of ${songs.length}`}>{String(index + 1).padStart(2, '0')} / {songs.length}</span>
      </div>
      <div className="cover-controls">
        <div className="flex gap-2">
          <button type="button" className="icon-control" aria-label="Previous cover" onClick={() => browse(-1)}><ArrowLeft className="w-5 h-5" /></button>
          <button type="button" className="icon-control" aria-label="Next cover" onClick={() => browse(1)}><ArrowRight className="w-5 h-5" /></button>
        </div>
      </div>
    </section>
  );
}

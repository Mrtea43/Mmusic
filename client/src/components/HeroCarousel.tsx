import { useEffect, useState } from 'react';
import { songs } from '@/data/songs';

export default function HeroCarousel({ active = true }: { active?: boolean }) {
  const [index, setIndex] = useState(0);
  const song = songs[index];
  useEffect(() => {
    if (!active) return;
    const timer = window.setInterval(() => setIndex((previous) => (previous + 1) % songs.length), 6500);
    return () => window.clearInterval(timer);
  }, [active]);
  return (
    <section className="cover-carousel" aria-label="Release artwork" aria-roledescription="carousel">
      <div className="cover-stage" aria-live="off">
        {songs.map((cover, coverIndex) => (
          <img
            key={cover.id}
            src={cover.imageUrl}
            alt={`${cover.title} cover artwork`}
            className={`cover-image${coverIndex === index ? ' is-active' : ''}`}
            aria-hidden={coverIndex !== index}
          />
        ))}
        <div className="cover-stamp" aria-hidden="true"><img src="./music-mark.svg" alt="" width="28" height="28" /></div>
      </div>
      <div className="cover-caption">
        <div className="cover-description"><span className="muted-text">From the collection</span><h2>{song.title}</h2></div>
        <span className="cover-count" aria-label={`Cover ${index + 1} of ${songs.length}`}>{String(index + 1).padStart(2, '0')} / {songs.length}</span>
      </div>
    </section>
  );
}

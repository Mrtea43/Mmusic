import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { songs } from '@/data/songs';
import { journal } from '@/data/journal';

export function JournalPreview() {
  return (
    <section id="journal" className="section-space">
      <div className="container">
        <div className="section-heading">
          <div><p className="section-kicker">The journal</p><h2>Behind the releases.</h2></div>
          <p>Meet the music, explore the catalogue, and find out what comes next.</p>
        </div>
        <div className="journal-grid">
          {journal.map((post) => {
            const song = songs.find((item) => item.id === post.songId)!;
            return (
              <article key={post.slug} className="journal-entry">
                <a href={`#/journal/${post.slug}`} className="journal-image-link" aria-label={`Read about ${post.title}`}>
                  <img src={song.imageUrl} alt={`${post.title} cover artwork`} loading="lazy" />
                  <span className="journal-open" aria-hidden="true"><ArrowUpRight className="w-5 h-5" /></span>
                </a>
                <p className="muted-text">{post.category}</p><h3><a href={`#/journal/${post.slug}`}>{post.title}</a></h3>
                <p>{post.summary}</p><a href={`#/journal/${post.slug}`} className="inline-link">Read release notes</a>
              </article>
            );
          })}
        </div>
        <div className="upcoming-note"><h3>Next up.</h3><p>Future release announcements will live here. No upcoming release is listed yet.</p></div>
      </div>
    </section>
  );
}

export function JournalArticle({ slug }: { slug: string }) {
  const post = journal.find((item) => item.slug === slug);
  if (!post) return <NotFound />;
  const song = songs.find((item) => item.id === post.songId)!;
  return (
    <article className="reading-page container">
      <a href="#journal" className="back-link"><ArrowLeft className="w-4 h-4" />Back to journal</a>
      <p className="section-kicker">Release notes · {post.category}</p><h1>{post.title}</h1>
      <p className="page-intro">{post.summary}</p><img src={song.imageUrl} alt={`${post.title} cover artwork`} className="article-cover" />
      <div className="reading-copy">{post.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      <div className="article-links"><a className="primary-link" href="#player">Open the MMusic player</a><a className="inline-link" href={song.sunoUrl} target="_blank" rel="noopener noreferrer">Original release on Suno</a></div>
    </article>
  );
}

export function NotFound() {
  return <section className="reading-page container"><h1>Page not found</h1><p className="page-intro">This page is not part of the collection.</p><a href="#/" className="primary-link">Back to MMusic</a></section>;
}

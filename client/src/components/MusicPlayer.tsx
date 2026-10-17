import { useState } from 'react';
import { Play, ExternalLink, Heart } from 'lucide-react';
import { songs } from '@/data/songs';

export default function MusicPlayer() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const currentSong = songs[currentSongIndex];

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Main Player */}
      <div className="bg-card border border-border rounded-sm p-8 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Album Art */}
          <div className="md:col-span-1">
            <div className="aspect-square bg-muted rounded-sm overflow-hidden border border-border">
              <img
                src={currentSong.imageUrl}
                alt={currentSong.title}
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>

          {/* Player Controls */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-orbitron font-bold mb-1">{currentSong.title}</h3>
              <p className="text-muted-foreground font-digital">{currentSong.artist}</p>
              <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Play className="w-3 h-3" /> {currentSong.plays}
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="w-3 h-3" /> {currentSong.upvotes}
                </span>
              </div>
            </div>

            <iframe
              key={currentSong.id}
              src={currentSong.sunoUrl.replace('/song/', '/embed/')}
              title={`Play ${currentSong.title} on Suno`}
              allow="autoplay; encrypted-media; fullscreen"
              className="w-full h-60 border-0 rounded-sm"
            />
            <p className="text-sm text-muted-foreground">
              Select a song below, then press play in the Suno player.
            </p>
            <a
              href={currentSong.sunoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm underline"
            >
              Open on Suno <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Playlist */}
      <div className="bg-card border border-border rounded-sm p-6">
        <h4 className="text-lg font-orbitron font-bold mb-4">PLAYLIST</h4>
        <div className="space-y-2">
          {songs.map((song, index) => (
            <button
              key={song.id}
              onClick={() => setCurrentSongIndex(index)}
              aria-pressed={index === currentSongIndex}
              className={`w-full p-3 rounded-sm text-left transition-colors flex items-center gap-4 ${
                index === currentSongIndex
                  ? 'bg-foreground text-background'
                  : 'hover:bg-muted'
              }`}
            >
              <div className="w-12 h-12 bg-muted rounded-sm overflow-hidden flex-shrink-0 border border-border">
                <img
                  src={song.imageUrl}
                  alt={song.title}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-digital font-bold truncate">{song.title}</p>
                <p className="text-sm opacity-70 font-digital">{song.artist}</p>
              </div>
              <div className="flex gap-3 text-xs opacity-70">
                <span className="flex items-center gap-1">
                  <Play className="w-3 h-3" /> {song.plays}
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="w-3 h-3" /> {song.upvotes}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}

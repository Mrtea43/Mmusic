import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, ExternalLink, Heart } from 'lucide-react';
import { songs } from '@/data/songs';
import { Button } from '@/components/ui/button';

export default function MusicPlayer() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [playbackError, setPlaybackError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const shouldPlayRef = useRef(false);
  const currentSong = songs[currentSongIndex];

  const handlePlaybackError = () => {
    setIsPlaying(false);
    setPlaybackError('Unable to play this track. Try again, or open it on Suno.');
  };

  const playAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setPlaybackError(null);
    if (audio.error) audio.load();
    const source = audio.src;
    void audio.play().catch((error: unknown) => {
      // Changing tracks or pausing can cancel a pending play request.
      if (error instanceof DOMException && error.name === 'AbortError') return;
      if (audio.src === source) handlePlaybackError();
    });
  };

  const selectSong = (index: number) => {
    shouldPlayRef.current = true;
    if (index === currentSongIndex) {
      playAudio();
    } else {
      setCurrentTime(0);
      setDuration(0);
      setPlaybackError(null);
      setCurrentSongIndex(index);
    }
  };

  const handleNext = () => selectSong((currentSongIndex + 1) % songs.length);
  const handlePrevious = () => selectSong((currentSongIndex - 1 + songs.length) % songs.length);

  useEffect(() => {
    if (shouldPlayRef.current) playAudio();
  }, [currentSongIndex]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.paused) {
      shouldPlayRef.current = false;
      audio.pause();
    } else {
      shouldPlayRef.current = true;
      playAudio();
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current || !duration) return;
    const newTime = Math.min(duration, Math.max(0, Number(e.target.value)));
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) audioRef.current.volume = newVolume;
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

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

            {/* Progress Bar */}
            <div className="space-y-2">
              <input
                type="range"
                min="0"
                aria-label="Seek"
                disabled={!duration}
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1 bg-muted rounded-sm appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-foreground"
              />
              <div className="flex justify-between text-xs font-digital text-muted-foreground">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {playbackError && (
              <p role="alert" className="text-sm text-foreground border border-border rounded-sm p-3">
                {playbackError}
              </p>
            )}

            {/* Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  className="rounded-sm w-11 h-11"
                  aria-label="Previous track"
                  onClick={handlePrevious}
                >
                  <SkipBack className="w-5 h-5" />
                </Button>
                <Button
                  className="bg-foreground text-background hover:bg-foreground/90 rounded-sm w-12 h-12"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                  onClick={togglePlay}
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </Button>
                <Button
                  variant="ghost"
                  className="rounded-sm w-11 h-11"
                  aria-label="Next track"
                  onClick={handleNext}
                >
                  <SkipForward className="w-5 h-5" />
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-muted-foreground" />
                <input
                  type="range"
                  min="0"
                  max="1"
                  aria-label="Volume"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-24 h-1 bg-muted rounded-sm appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-foreground"
                />
                <a
                  aria-label="Open on Suno"
                  href={currentSong.sunoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 inline-flex items-center justify-center w-11 h-11 rounded-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Playlist */}
      <div className="bg-card border border-border rounded-sm p-4 sm:p-6">
        <h4 className="text-lg font-orbitron font-bold mb-4">PLAYLIST</h4>
        <div className="song-playlist space-y-2 max-h-[30rem] overflow-y-auto pr-2" role="group" aria-label="Song playlist">
          {songs.map((song, index) => (
            <button
              key={song.id}
              onClick={() => selectSong(index)}
              aria-pressed={index === currentSongIndex}
              className={`w-full p-3 rounded-sm text-left transition-colors flex items-center gap-3 sm:gap-4 ${
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
                <p className="font-digital font-bold text-sm sm:text-base truncate">{song.title}</p>
                <p className="text-xs sm:text-sm opacity-70 font-digital truncate">{song.artist}</p>
              </div>
              <div className="hidden sm:flex gap-3 text-xs opacity-70">
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

      <audio
        ref={audioRef}
        src={currentSong.audioUrl}
        preload="metadata"
        onPlaying={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onLoadStart={() => {
          setIsPlaying(false);
          setCurrentTime(0);
          setDuration(0);
        }}
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onDurationChange={(e) => {
          const value = e.currentTarget.duration;
          setDuration(Number.isFinite(value) ? value : 0);
        }}
        onEnded={handleNext}
        onError={handlePlaybackError}
      />
    </div>
  );
}

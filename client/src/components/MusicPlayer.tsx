import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, ExternalLink, Heart } from 'lucide-react';
import { songs, Song } from '@/data/songs';
import { Button } from '@/components/ui/button';

export default function MusicPlayer() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentSong = songs[currentSongIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => handleNext();

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentSongIndex]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNext = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
    setIsPlaying(true);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const selectSong = (index: number) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play();
    }
  }, [currentSongIndex]);

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

            {/* Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  className="rounded-sm"
                  onClick={handlePrevious}
                >
                  <SkipBack className="w-5 h-5" />
                </Button>
                <Button
                  className="bg-foreground text-background hover:bg-foreground/90 rounded-sm w-12 h-12"
                  onClick={togglePlay}
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </Button>
                <Button
                  variant="ghost"
                  className="rounded-sm"
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
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-24 h-1 bg-muted rounded-sm appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-foreground"
                />
                <a
                  href={currentSong.sunoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4"
                >
                  <Button variant="ghost" className="rounded-sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
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
              onClick={() => selectSong(index)}
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

      <audio ref={audioRef} src={currentSong.audioUrl} />
    </div>
  );
}

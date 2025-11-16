import { useEffect, useRef } from 'react';

interface AudioVisualizerProps {
  audioRef: React.RefObject<HTMLAudioElement>;
  isPlaying: boolean;
}

export default function AudioVisualizer({ audioRef, isPlaying }: AudioVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    if (!audioRef.current || !canvasRef.current) return;

    const audio = audioRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Create audio context and analyser only once
    if (!audioContextRef.current) {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const analyser = audioContext.createAnalyser();
      const source = audioContext.createMediaElementSource(audio);

      analyser.fftSize = 256;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      source.connect(analyser);
      analyser.connect(audioContext.destination);

      audioContextRef.current = audioContext;
      analyserRef.current = analyser;
      dataArrayRef.current = dataArray;
    }

    const draw = () => {
      if (!analyserRef.current || !dataArrayRef.current || !ctx) return;

      const analyser = analyserRef.current;
      const dataArray = dataArrayRef.current;
      const bufferLength = analyser.frequencyBinCount;

      analyser.getByteFrequencyData(dataArray);

      // Set canvas size
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      // Clear canvas
      ctx.fillStyle = 'oklch(1 0 0)'; // Background color
      ctx.fillRect(0, 0, rect.width, rect.height);

      const barWidth = (rect.width / bufferLength) * 2.5;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const barHeight = (dataArray[i] / 255) * rect.height * 0.8;

        // Monochrome gradient based on height
        const intensity = dataArray[i] / 255;
        const lightness = 0.1 + (intensity * 0.3); // Range from dark to medium gray
        ctx.fillStyle = `oklch(${lightness} 0 0)`;

        // Draw bar from bottom
        const y = rect.height - barHeight;
        ctx.fillRect(x, y, barWidth - 2, barHeight);

        x += barWidth;
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    if (isPlaying) {
      draw();
    } else {
      // Draw empty state when not playing
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      ctx.fillStyle = 'oklch(1 0 0)';
      ctx.fillRect(0, 0, rect.width, rect.height);

      // Draw static bars
      const bufferLength = 128;
      const barWidth = (rect.width / bufferLength) * 2.5;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const barHeight = Math.random() * 20 + 5;
        ctx.fillStyle = 'oklch(0.85 0 0)';
        const y = rect.height - barHeight;
        ctx.fillRect(x, y, barWidth - 2, barHeight);
        x += barWidth;
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [audioRef, isPlaying]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-32 bg-background border border-border rounded-sm"
      style={{ display: 'block' }}
    />
  );
}

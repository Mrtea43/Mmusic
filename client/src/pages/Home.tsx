import { Button } from "@/components/ui/button";
import { Music, Play, Zap, Volume2, Radio } from "lucide-react";
import MusicPlayer from "@/components/MusicPlayer";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Navigation Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Music className="w-8 h-8" />
            <h1 className="text-2xl font-orbitron font-bold tracking-wider">MMUSIC</h1>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-8">
              <a href="#player" className="text-sm font-digital hover:text-primary transition-colors">Player</a>
              <a href="#features" className="text-sm font-digital hover:text-primary transition-colors">Features</a>
              <a href="#download" className="text-sm font-digital hover:text-primary transition-colors">Download</a>
              <a href="#about" className="text-sm font-digital hover:text-primary transition-colors">About</a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-5xl md:text-6xl font-orbitron font-bold leading-tight tracking-tighter">
                    DIGITAL MUSIC<br />EVOLUTION
                  </h2>
                  <p className="text-lg font-digital text-foreground/80 leading-relaxed">
                    Experience music like never before. MMusic brings precision, clarity, and pure digital sound to your ears.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#player">
                    <Button className="bg-foreground text-background hover:bg-foreground/90 font-digital text-base h-12 px-8 rounded-sm w-full">
                      <Play className="w-4 h-4 mr-2" />
                      Web Player
                    </Button>
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full aspect-square bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-sm border-2 border-foreground/20 flex items-center justify-center">
                  <Music className="w-32 h-32 text-foreground/30" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Web Player Section */}
        <section id="player" className="py-20 md:py-32 bg-card border-y border-border">
          <div className="container">
            <h3 className="text-4xl md:text-5xl font-orbitron font-bold mb-12 text-center">PLAY MUSIC NOW</h3>
            <MusicPlayer />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 md:py-32">
          <div className="container">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">CORE FEATURES</h3>
              <div className="w-16 h-1 bg-foreground mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "LIGHTNING FAST",
                  description: "Instant playback with zero latency. Pure speed meets pure sound."
                },
                {
                  icon: Volume2,
                  title: "CRYSTAL CLEAR",
                  description: "High-fidelity audio processing for the purest listening experience."
                },
                {
                  icon: Radio,
                  title: "INFINITE STREAMS",
                  description: "Access millions of tracks from around the world instantly."
                }
              ].map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="p-8 border border-border rounded-sm hover:border-foreground/50 transition-colors group bg-card">
                    <Icon className="w-12 h-12 mb-4 text-foreground group-hover:scale-110 transition-transform" />
                    <h4 className="text-xl font-orbitron font-bold mb-3">{feature.title}</h4>
                    <p className="font-digital text-foreground/70 leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="py-20 md:py-32 bg-card border-y border-border">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <h3 className="text-4xl md:text-5xl font-orbitron font-bold">GET MMUSIC</h3>
              <p className="text-lg font-digital text-foreground/80 leading-relaxed">
                Available on all your favorite platforms. Download MMusic today and join the digital music revolution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-foreground text-background hover:bg-foreground/90 font-digital text-base h-12 px-8 rounded-sm">
                  App Store
                </Button>
                <Button className="bg-foreground text-background hover:bg-foreground/90 font-digital text-base h-12 px-8 rounded-sm">
                  Google Play
                </Button>
                <Button className="bg-foreground text-background hover:bg-foreground/90 font-digital text-base h-12 px-8 rounded-sm">
                  Web Player
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-4xl md:text-5xl font-orbitron font-bold mb-8">ABOUT MMUSIC</h3>
              <div className="space-y-6 font-digital text-foreground/80 leading-relaxed">
                <p>
                  MMusic is a next-generation music streaming platform built for the digital age. We believe that music should be experienced with absolute clarity and precision.
                </p>
                <p>
                  Our platform combines cutting-edge technology with a minimalist design philosophy. Every feature is crafted to bring you closer to the music you love.
                </p>
                <p>
                  From casual listeners to audiophiles, MMusic delivers an uncompromising audio experience across all devices.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-orbitron font-bold mb-4">PRODUCT</h4>
              <ul className="space-y-2 font-digital text-sm text-foreground/70">
                <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Download</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-orbitron font-bold mb-4">COMPANY</h4>
              <ul className="space-y-2 font-digital text-sm text-foreground/70">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-orbitron font-bold mb-4">LEGAL</h4>
              <ul className="space-y-2 font-digital text-sm text-foreground/70">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-orbitron font-bold mb-4">FOLLOW</h4>
              <ul className="space-y-2 font-digital text-sm text-foreground/70">
                <li><a href="#" className="hover:text-foreground transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center font-digital text-sm text-foreground/60">
            <p>&copy; 2024 MMusic. All rights reserved. Digital music for the digital age.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

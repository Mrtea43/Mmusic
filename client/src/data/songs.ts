export interface Song {
  id: string;
  title: string;
  artist: string;
  audioUrl: string;
  imageUrl: string;
  plays: number;
  upvotes: number;
  sunoUrl: string;
  tags?: string;
}

export const songs: Song[] = [
  {
    id: '1',
    title: "The Final Day (Trance Mix)",
    artist: 'CrashingBallade7803',
    audioUrl: 'https://cdn1.suno.ai/ff7af31c-59ba-4ff9-ba41-507021eae60f.mp3',
    imageUrl: 'https://cdn2.suno.ai/f3851aa8-5728-4d25-9b24-92a319d456b3.jpeg',
    plays: 5,
    upvotes: 1,
    sunoUrl: 'https://suno.com/song/ff7af31c-59ba-4ff9-ba41-507021eae60f',
    tags: '90s Trance, Progressive Trance'
  },
  {
    id: '2',
    title: "Little Motion (UK Garage Mix)",
    artist: 'CrashingBallade7803',
    audioUrl: 'https://cdn1.suno.ai/89d377cf-5e43-478e-8b9d-b7a05780fd3f.mp3',
    imageUrl: 'https://cdn2.suno.ai/b0bf8cd6-0223-49c1-ae86-ce0a19d59f10.jpeg',
    plays: 5,
    upvotes: 1,
    sunoUrl: 'https://suno.com/song/89d377cf-5e43-478e-8b9d-b7a05780fd3f',
    tags: '2-Step Garage, Bassline, Future Garage'
  },
  {
    id: '3',
    title: "Easy Tonight",
    artist: 'CrashingBallade7803',
    audioUrl: 'https://cdn1.suno.ai/81b3f798-2235-429c-acef-5d21b3d60f80.mp3',
    imageUrl: 'https://cdn2.suno.ai/04d7c4ad-916b-4130-b22e-bb6f254a1d97.jpeg',
    plays: 6,
    upvotes: 1,
    sunoUrl: 'https://suno.com/song/81b3f798-2235-429c-acef-5d21b3d60f80',
    tags: 'Uplifting Trance, 138 BPM'
  },
  {
    id: '4',
    title: "The Experiment: Little Motion",
    artist: 'CrashingBallade7803',
    audioUrl: 'https://cdn1.suno.ai/dfeba968-3b5c-4b13-980e-d5487e5f68f2.mp3',
    imageUrl: 'https://cdn2.suno.ai/bbaa9c03-4fd4-46ca-b66f-ab7c499fff80.jpeg',
    plays: 3,
    upvotes: 1,
    sunoUrl: 'https://suno.com/song/dfeba968-3b5c-4b13-980e-d5487e5f68f2',
    tags: 'Rap, House, UK Garage'
  },
  {
    id: '5',
    title: "Don't Break My Heart (The Pop Mix)",
    artist: 'CrashingBallade7803',
    audioUrl: 'https://cdn1.suno.ai/a8dff52e-51fe-4457-8a91-e7a2184e5673.mp3',
    imageUrl: 'https://cdn2.suno.ai/ffc73978-f493-4a31-8991-023ac39fce5a.jpeg',
    plays: 36,
    upvotes: 2,
    sunoUrl: 'https://suno.com/song/a8dff52e-51fe-4457-8a91-e7a2184e5673',
    tags: 'D&B, Dubstep, Electronic, Techno'
  },
  {
    id: '6',
    title: "Don't Break My Heart",
    artist: 'CrashingBallade7803',
    audioUrl: 'https://cdn1.suno.ai/46fcad0b-b035-4519-a9e1-dce70032d818.mp3',
    imageUrl: 'https://cdn2.suno.ai/aa18672b-c2f3-42d0-bd7e-99c0a16d9c7a.jpeg',
    plays: 6,
    upvotes: 1,
    sunoUrl: 'https://suno.com/song/46fcad0b-b035-4519-a9e1-dce70032d818',
    tags: 'D&B, Dubstep, Electronic, Techno'
  }
];

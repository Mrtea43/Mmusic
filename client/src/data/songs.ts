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

// Refreshed from the public Suno profile on 2026-10-18; newest releases first.
export const songs: Song[] = [
  {
    id: '17',
    title: "Miles and Empty Space",
    artist: 'CrashingBallade7803',
    audioUrl: 'https://d2lwuy8qc234o3.cloudfront.net/1/clip/5884c1bc-aa91-43d4-84c0-9108198dbde5.m4a',
    imageUrl: 'https://cdn2.suno.ai/image_5884c1bc-aa91-43d4-84c0-9108198dbde5.jpeg',
    plays: 5,
    upvotes: 0,
    sunoUrl: 'https://suno.com/song/5884c1bc-aa91-43d4-84c0-9108198dbde5',
    tags: 'shoegaze, dream pop, atmospheric indie rock'
  },
  {
    id: '18',
    title: "Late Night Slow Dances",
    artist: 'CrashingBallade7803',
    audioUrl: 'https://d2lwuy8qc234o3.cloudfront.net/1/clip/bc758d3d-335c-41b0-a23b-94af0c0cbec0.m4a',
    imageUrl: 'https://cdn2.suno.ai/image_bc758d3d-335c-41b0-a23b-94af0c0cbec0.jpeg',
    plays: 12,
    upvotes: 2,
    sunoUrl: 'https://suno.com/song/bc758d3d-335c-41b0-a23b-94af0c0cbec0',
    tags: 'shoegaze, dream pop'
  },
  {
    id: '11',
    title: "The Escape Route (Jungle Mix)",
    artist: 'CrashingBallade7803',
    audioUrl: 'https://d2lwuy8qc234o3.cloudfront.net/1/clip/f2b5e070-f247-4c16-b495-4688164d5c71.m4a',
    imageUrl: 'https://cdn2.suno.ai/61ceb899-b1dd-4e36-aa5c-30483280d6f1.jpeg',
    plays: 8,
    upvotes: 1,
    sunoUrl: 'https://suno.com/song/f2b5e070-f247-4c16-b495-4688164d5c71',
    tags: 'D&B, Jungle, Drum and Bass, deep bass'
  },
  {
    id: '1',
    title: "The Final Day (Trance Mix)",
    artist: 'CrashingBallade7803',
    audioUrl: 'https://d2lwuy8qc234o3.cloudfront.net/1/clip/ff7af31c-59ba-4ff9-ba41-507021eae60f.m4a',
    imageUrl: 'https://cdn2.suno.ai/f3851aa8-5728-4d25-9b24-92a319d456b3.jpeg',
    plays: 20,
    upvotes: 1,
    sunoUrl: 'https://suno.com/song/ff7af31c-59ba-4ff9-ba41-507021eae60f',
    tags: 'Progressive Trance'
  },
  {
    id: '3',
    title: "Easy Tonight",
    artist: 'CrashingBallade7803',
    audioUrl: 'https://d2lwuy8qc234o3.cloudfront.net/1/clip/81b3f798-2235-429c-acef-5d21b3d60f80.m4a',
    imageUrl: 'https://cdn2.suno.ai/04d7c4ad-916b-4130-b22e-bb6f254a1d97.jpeg',
    plays: 10,
    upvotes: 1,
    sunoUrl: 'https://suno.com/song/81b3f798-2235-429c-acef-5d21b3d60f80',
    tags: 'Uplifting Trance'
  },
  {
    id: '2',
    title: "Little Motion (UK Garage Mix)",
    artist: 'CrashingBallade7803',
    audioUrl: 'https://d2lwuy8qc234o3.cloudfront.net/1/clip/89d377cf-5e43-478e-8b9d-b7a05780fd3f.m4a',
    imageUrl: 'https://cdn2.suno.ai/b0bf8cd6-0223-49c1-ae86-ce0a19d59f10.jpeg',
    plays: 11,
    upvotes: 1,
    sunoUrl: 'https://suno.com/song/89d377cf-5e43-478e-8b9d-b7a05780fd3f',
    tags: '2-Step garage, Bassline'
  },
  {
    id: '4',
    title: "The Experiment: Little Motion",
    artist: 'CrashingBallade7803',
    audioUrl: 'https://d2lwuy8qc234o3.cloudfront.net/1/clip/dfeba968-3b5c-4b13-980e-d5487e5f68f2.m4a',
    imageUrl: 'https://cdn2.suno.ai/bbaa9c03-4fd4-46ca-b66f-ab7c499fff80.jpeg',
    plays: 10,
    upvotes: 1,
    sunoUrl: 'https://suno.com/song/dfeba968-3b5c-4b13-980e-d5487e5f68f2',
    tags: 'House Music, Dance, EDM'
  },
  {
    id: '5',
    title: "Don't break my heart (thepopmix)",
    artist: 'CrashingBallade7803',
    audioUrl: 'https://d2lwuy8qc234o3.cloudfront.net/1/clip/a8dff52e-51fe-4457-8a91-e7a2184e5673.m4a',
    imageUrl: 'https://cdn2.suno.ai/ffc73978-f493-4a31-8991-023ac39fce5a.jpeg',
    plays: 62,
    upvotes: 2,
    sunoUrl: 'https://suno.com/song/a8dff52e-51fe-4457-8a91-e7a2184e5673',
    tags: 'D&B, little dubstep style, Electronic, Techno,'
  },
  {
    id: '6',
    title: "Dont break my heart",
    artist: 'CrashingBallade7803',
    audioUrl: 'https://d2lwuy8qc234o3.cloudfront.net/1/clip/46fcad0b-b035-4519-a9e1-dce70032d818.m4a',
    imageUrl: 'https://cdn2.suno.ai/aa18672b-c2f3-42d0-bd7e-99c0a16d9c7a.jpeg',
    plays: 10,
    upvotes: 1,
    sunoUrl: 'https://suno.com/song/46fcad0b-b035-4519-a9e1-dce70032d818',
    tags: 'D&B, little dubstep style, Electronic, Techno,'
  },
  {
    id: '7',
    title: "Crimson Echo",
    artist: 'CrashingBallade7803',
    audioUrl: 'https://d2lwuy8qc234o3.cloudfront.net/1/clip/a7e2fa19-6465-4528-b69a-62082e97d4ee.m4a',
    imageUrl: 'https://cdn2.suno.ai/image_a7e2fa19-6465-4528-b69a-62082e97d4ee.jpeg',
    plays: 10,
    upvotes: 2,
    sunoUrl: 'https://suno.com/song/a7e2fa19-6465-4528-b69a-62082e97d4ee',
    tags: 'Half-time flow, vocal stutters, DJ shouts, atmospheric metaphors, and repetitive yet haunting hooks UK garage.'
  },
  {
    id: '8',
    title: "Crimson Echo (UK Garage)",
    artist: 'CrashingBallade7803',
    audioUrl: 'https://d2lwuy8qc234o3.cloudfront.net/1/clip/2edd47b8-a6af-40b3-b0b5-1e1069f3768e.m4a',
    imageUrl: 'https://cdn2.suno.ai/3beda526-b791-40de-ac02-792db63ab637.jpeg',
    plays: 29,
    upvotes: 3,
    sunoUrl: 'https://suno.com/song/2edd47b8-a6af-40b3-b0b5-1e1069f3768e',
    tags: 'UK Garage'
  },
  {
    id: '12',
    title: "Forever Unfinished (EDM Mix)",
    artist: 'CrashingBallade7803',
    audioUrl: 'https://d2lwuy8qc234o3.cloudfront.net/1/clip/19021700-efb0-422e-8933-25b9a5154cbe.m4a',
    imageUrl: 'https://cdn2.suno.ai/0f337431-ae0d-4493-a6f8-e89abd803514.jpeg',
    plays: 9,
    upvotes: 2,
    sunoUrl: 'https://suno.com/song/19021700-efb0-422e-8933-25b9a5154cbe',
    tags: 'edm'
  },
  {
    id: '13',
    title: "Forever Unfinished",
    artist: 'CrashingBallade7803',
    audioUrl: 'https://d2lwuy8qc234o3.cloudfront.net/1/clip/e5bd4d53-9f31-4311-8538-9151231bd689.m4a',
    imageUrl: 'https://cdn2.suno.ai/c26924b8-b81a-4af1-81e7-e41fa1081833.jpeg',
    plays: 6,
    upvotes: 1,
    sunoUrl: 'https://suno.com/song/e5bd4d53-9f31-4311-8538-9151231bd689',
    tags: 'Pulsating kick drums and crystalline hi-hats drive the trance groove, layered with airy pads and hypnotic arpeggiated synths. The breakdown features an evolving melodic lead and filtered sweeps before bursting back into an anthemic, euphoric chorus, maximizing energy and movement.'
  },
  {
    id: '10',
    title: "BIONIC",
    artist: 'CrashingBallade7803',
    audioUrl: 'https://d2lwuy8qc234o3.cloudfront.net/1/clip/6ad073f4-51a8-4a57-8158-df5512fa1048.m4a',
    imageUrl: 'https://cdn2.suno.ai/ff57e7f9-e5e1-4471-a939-31f8ce74c59d.jpeg',
    plays: 8,
    upvotes: 1,
    sunoUrl: 'https://suno.com/song/6ad073f4-51a8-4a57-8158-df5512fa1048',
    tags: 'D&B, little dubstep style, Electronic, Techno'
  },
  {
    id: '9',
    title: "You and Me",
    artist: 'CrashingBallade7803',
    audioUrl: 'https://d2lwuy8qc234o3.cloudfront.net/1/clip/4275fe75-506b-4569-be0f-ef599ddd3c0a.m4a',
    imageUrl: 'https://cdn2.suno.ai/4899d8f6-4f43-4dd9-9404-893255003b6a.jpeg',
    plays: 6,
    upvotes: 1,
    sunoUrl: 'https://suno.com/song/4275fe75-506b-4569-be0f-ef599ddd3c0a',
    tags: 'A shoegaze track opens with dense, reverb-heavy guitars awash in textural effects and slow, dreamy chord progressions. Underneath, subdued bass and drums provide steady, hypnotic rhythms as layers of ethereal synths and hushed, airy vocals float through the mix. The sound swells in the bridge, adding feedback and guitar washes before fading into a spacious, lingering outro.'
  },
  {
    id: '14',
    title: "Dead Drop Neurofunk",
    artist: 'CrashingBallade7803',
    audioUrl: 'https://d2lwuy8qc234o3.cloudfront.net/1/clip/2616dc9d-00c7-4343-baeb-95f0f8a0c99b.m4a',
    imageUrl: 'https://cdn2.suno.ai/a5e3843d-04ce-4ec9-ba09-26a8a158c6c9.jpeg',
    plays: 9,
    upvotes: 2,
    sunoUrl: 'https://suno.com/song/2616dc9d-00c7-4343-baeb-95f0f8a0c99b',
    tags: 'D&B, little dubstep style, Electronic, Techno'
  },
  {
    id: '15',
    title: "Soundwave",
    artist: 'CrashingBallade7803',
    audioUrl: 'https://d2lwuy8qc234o3.cloudfront.net/1/clip/fb07ab47-6239-4a8d-9fcf-0b9163939588.m4a',
    imageUrl: 'https://cdn2.suno.ai/0a2948da-1b8c-46f7-82e0-a153c728e5d4.jpeg',
    plays: 16,
    upvotes: 1,
    sunoUrl: 'https://suno.com/song/fb07ab47-6239-4a8d-9fcf-0b9163939588',
    tags: 'D&B, little dubstep style, Electronic, Techno'
  },
  {
    id: '16',
    title: "All The Time (Wub Mix)",
    artist: 'CrashingBallade7803',
    audioUrl: 'https://d2lwuy8qc234o3.cloudfront.net/1/clip/ad332d7b-0004-44eb-9e9c-9f8ad77c8ac3.m4a',
    imageUrl: 'https://cdn2.suno.ai/12749f4f-f8cf-4406-b737-920cbb8371e6.jpeg',
    plays: 23,
    upvotes: 1,
    sunoUrl: 'https://suno.com/song/ad332d7b-0004-44eb-9e9c-9f8ad77c8ac3',
    tags: 'D&B, little dubstep style, Electronic, Techno'
  }
];

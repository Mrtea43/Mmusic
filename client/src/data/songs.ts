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
    title: "The Experiment: Little Motion",
    artist: 'CrashingBallade7803',
    audioUrl: 'https://cdn1.suno.ai/dfeba968-3b5c-4b13-980e-d5487e5f68f2.mp3',
    imageUrl: 'https://cdn2.suno.ai/bbaa9c03-4fd4-46ca-b66f-ab7c499fff80.jpeg',
    plays: 2,
    upvotes: 0,
    sunoUrl: 'https://suno.com/song/dfeba968-3b5c-4b13-980e-d5487e5f68f2',
    tags: 'House Music, Dance, EDM, Rap, UK Garage, Rap House'
  },
  {
    id: '2',
    title: "Don't break my heart (thepopmix)",
    artist: 'CrashingBallade7803',
    audioUrl: 'https://cdn1.suno.ai/a8dff52e-51fe-4457-8a91-e7a2184e5673.mp3',
    imageUrl: 'https://cdn2.suno.ai/ffc73978-f493-4a31-8991-023ac39fce5a.jpeg',
    plays: 20,
    upvotes: 1,
    sunoUrl: 'https://suno.com/song/a8dff52e-51fe-4457-8a91-e7a2184e5673'
  },
  {
    id: '3',
    title: "Dont break my heart",
    artist: 'CrashingBallade7803',
    audioUrl: 'https://cdn1.suno.ai/46fcad0b-b035-4519-a9e1-dce70032d818.mp3',
    imageUrl: 'https://cdn2.suno.ai/aa18672b-c2f3-42d0-bd7e-99c0a16d9c7a.jpeg',
    plays: 6,
    upvotes: 0,
    sunoUrl: 'https://suno.com/song/46fcad0b-b035-4519-a9e1-dce70032d818'
  },
  {
    id: '4',
    title: "Crimson Echo",
    artist: 'CrashingBallade7803',
    audioUrl: 'https://cdn1.suno.ai/a7e2fa19-6465-4528-b69a-62082e97d4ee.mp3',
    imageUrl: 'https://cdn2.suno.ai/image_a7e2fa19-6465-4528-b69a-62082e97d4ee.jpeg',
    plays: 10,
    upvotes: 2,
    sunoUrl: 'https://suno.com/song/a7e2fa19-6465-4528-b69a-62082e97d4ee',
    tags: 'Half-time flow, vocal stutters, DJ shouts, atmospheric metaphors, UK garage'
  },
  {
    id: '5',
    title: "Crimson Echo (UK Garage)",
    artist: 'CrashingBallade7803',
    audioUrl: 'https://cdn1.suno.ai/2edd47b8-a6af-40b3-b0b5-1e1069f3768e.mp3',
    imageUrl: 'https://cdn2.suno.ai/3beda526-b791-40de-ac02-792db63ab637.jpeg',
    plays: 18,
    upvotes: 3,
    sunoUrl: 'https://suno.com/song/2edd47b8-a6af-40b3-b0b5-1e1069f3768e'
  },
  {
    id: '6',
    title: "You and Me",
    artist: 'CrashingBallade7803',
    audioUrl: 'https://cdn1.suno.ai/4275fe75-506b-4569-be0f-ef599ddd3c0a.mp3',
    imageUrl: 'https://cdn2.suno.ai/4899d8f6-4f43-4dd9-9404-893255003b6a.jpeg',
    plays: 6,
    upvotes: 1,
    sunoUrl: 'https://suno.com/song/4275fe75-506b-4569-be0f-ef599ddd3c0a'
  },
  {
    id: '7',
    title: "BIONIC",
    artist: 'CrashingBallade7803',
    audioUrl: 'https://cdn1.suno.ai/6ad073f4-51a8-4a57-8158-df5512fa1048.mp3',
    imageUrl: 'https://cdn2.suno.ai/ff57e7f9-e5e1-4471-a939-31f8ce74c59d.jpeg',
    plays: 7,
    upvotes: 1,
    sunoUrl: 'https://suno.com/song/6ad073f4-51a8-4a57-8158-df5512fa1048'
  },
  {
    id: '8',
    title: "Forever Unfinished",
    artist: 'CrashingBallade7803',
    audioUrl: 'https://cdn1.suno.ai/e5bd4d53-9f31-4311-8538-9151231bd689.mp3',
    imageUrl: 'https://cdn2.suno.ai/c26924b8-b81a-4af1-81e7-e41fa1081833.jpeg',
    plays: 4,
    upvotes: 1,
    sunoUrl: 'https://suno.com/song/e5bd4d53-9f31-4311-8538-9151231bd689'
  },
  {
    id: '9',
    title: "Forever Unfinished (EDM Mix)",
    artist: 'CrashingBallade7803',
    audioUrl: 'https://cdn1.suno.ai/19021700-efb0-422e-8933-25b9a5154cbe.mp3',
    imageUrl: 'https://cdn2.suno.ai/0f337431-ae0d-4493-a6f8-e89abd803514.jpeg',
    plays: 7,
    upvotes: 2,
    sunoUrl: 'https://suno.com/song/19021700-efb0-422e-8933-25b9a5154cbe'
  },
  {
    id: '10',
    title: "Dead Drop Neurofunk",
    artist: 'CrashingBallade7803',
    audioUrl: 'https://cdn1.suno.ai/2616dc9d-00c7-4343-baeb-95f0f8a0c99b.mp3',
    imageUrl: 'https://cdn2.suno.ai/a5e3843d-04ce-4ec9-ba09-26a8a158c6c9.jpeg',
    plays: 7,
    upvotes: 2,
    sunoUrl: 'https://suno.com/song/2616dc9d-00c7-4343-baeb-95f0f8a0c99b'
  },
  {
    id: '11',
    title: "All The Time (Wub Mix)",
    artist: 'CrashingBallade7803',
    audioUrl: 'https://cdn1.suno.ai/ad332d7b-0004-44eb-9e9c-9f8ad77c8ac3.mp3',
    imageUrl: 'https://cdn2.suno.ai/12749f4f-f8cf-4406-b737-920cbb8371e6.jpeg',
    plays: 20,
    upvotes: 1,
    sunoUrl: 'https://suno.com/song/ad332d7b-0004-44eb-9e9c-9f8ad77c8ac3'
  }
];

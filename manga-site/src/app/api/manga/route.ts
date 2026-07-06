import { NextResponse } from 'next/server';

const mangas = [
  {
    title: "Solo Leveling",
    slug: "solo-leveling",
    cover: "https://picsum.photos/id/1015/400/300",
    latestChapter: 250,
    updatedAt: "2026-07-06"
  },
  {
    title: "Nano Machine",
    slug: "nano-machine",
    cover: "https://picsum.photos/id/201/400/300",
    latestChapter: 189,
    updatedAt: "2026-07-05"
  }
];

export async function GET() {
  return NextResponse.json({
    success: true,
    count: mangas.length,
    data: mangas
  });
}
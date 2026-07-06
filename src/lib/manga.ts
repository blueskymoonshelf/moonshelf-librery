// src/lib/manga.ts
import { getAllMangas } from './api';

export async function getLatestMangas(limit = 10) {
  const mangas = await getAllMangas();
  return mangas.slice(0, limit);
}

export function formatChapterNumber(num: number): string {
  return num.toString().padStart(3, '0');
}

export function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9ก-๙\s-]/g, '')
    .replace(/\s+/g, '-');
}
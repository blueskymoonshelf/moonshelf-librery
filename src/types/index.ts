// src/types/index.ts

// ประเภทข้อมูลสำหรับมังงะ (อ้างอิงจากโครงสร้าง Nextcloud)
export interface Manga {
  title: string;
  slug: string;
  cover: string;
  banner?: string;
  poster?: string;
  description?: string;
  author: string;
  status: string;
  genres: string[];
  latestChapter?: string;
  updatedAt?: string;
}

// ประเภทข้อมูลสำหรับ metadata.json ของแต่ละเรื่อง
export interface MangaMetadata {
  title: string;
  slug: string;
  cover: string;
  banner?: string;
  description: string;
  author: string;
  status: string;
  genres: string[];
  totalChapters?: number;
}

// ประเภทสำหรับตอน
export interface Chapter {
  number: string;           // เช่น "001", "045"
  folder: string;
  pages: string[];          // รายชื่อไฟล์รูป เช่น ["001.jpg", "002.jpg"]
  totalPages: number;
}

// ประเภทสำหรับ response จาก API
export interface MangaListResponse {
  lastUpdated: string;
  totalMangas: number;
  mangas: Manga[];
}

// ประเภทสำหรับ Reader
export interface ReaderProps {
  slug: string;
  chapter: string;
  currentPage?: number;
}
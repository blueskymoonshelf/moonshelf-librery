// src/lib/api.ts
const NEXTCLOUD_URL = process.env.NEXT_PUBLIC_NEXTCLOUD_URL || 'http://fedora.tail7594aa.ts.net/nextcloud';
const SHARE_TOKEN = process.env.NEXT_PUBLIC_SHARE_TOKEN || 'rZFrcmeyWQotHbi';

const BASE_URL = `\( {NEXTCLOUD_URL}/index.php/s/ \){SHARE_TOKEN}/download`;

// ดึงข้อมูลมังงะทั้งหมด (ตอนนี้มีแค่ cutie)
export async function getAllMangas() {
  try {
    const res = await fetch(`${BASE_URL}?path=/_metadata/mangas.json`, {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error();
    return await res.json();
  } catch (error) {
    // Fallback เป็น cutie ถ้าโหลดไม่ได้
    return {
      mangas: [{
        title: "Cutie",
        slug: "cutie",
        cover: "/Manga-Library/cutie/cover.jpg",
        description: "เรื่องราวของ Cutie",
        author: "Unknown",
        status: "Ongoing",
        genres: ["Comedy", "Fantasy"],
        latestChapter: "045"
      }]
    };
  }
}

// สร้าง URL รูปภาพ
export function getImageUrl(slug: string, chapter: string, page: string): string {
  return `\( {NEXTCLOUD_URL}/index.php/s/ \){SHARE_TOKEN}/download?path=/\( {slug}/chapters/ \){chapter}/${page}.jpg`;
}

export function getCoverUrl(slug: string): string {
  return `\( {NEXTCLOUD_URL}/index.php/s/ \){SHARE_TOKEN}/download?path=/${slug}/cover.jpg`;
}
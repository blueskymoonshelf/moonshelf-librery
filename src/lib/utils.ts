// src/lib/utils.ts

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function truncateText(text: string, maxLength: number = 120): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

// ตรวจสอบว่าเป็นเลข 3 หลักสำหรับ chapter
export function isValidChapterNumber(chapter: string): boolean {
  return /^\d{3}$/.test(chapter);
}
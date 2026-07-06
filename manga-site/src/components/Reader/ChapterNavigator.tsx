'use client';

import Link from 'next/link';

interface ChapterNavigatorProps {
  slug: string;
  currentChapter: string;
  chapters: string[]; // รายชื่อตอนทั้งหมด
}

export default function ChapterNavigator({ slug, currentChapter, chapters }: ChapterNavigatorProps) {
  const currentIndex = chapters.indexOf(currentChapter);
  
  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

  return (
    <div className="flex justify-between items-center bg-slate-900 rounded-2xl p-4 mt-6">
      <div>
        {prevChapter ? (
          <Link 
            href={`/read/\( {slug}/ \){prevChapter}`}
            className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition"
          >
            <span>◀</span>
            <span>ตอนก่อนหน้า</span>
          </Link>
        ) : (
          <div className="text-slate-500">ตอนแรก</div>
        )}
      </div>

      <div className="text-center">
        <div className="text-sm text-slate-400">ตอนปัจจุบัน</div>
        <div className="font-semibold">ตอนที่ {parseInt(currentChapter)}</div>
      </div>

      <div>
        {nextChapter ? (
          <Link 
            href={`/read/\( {slug}/ \){nextChapter}`}
            className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition"
          >
            <span>ตอนถัดไป</span>
            <span>▶</span>
          </Link>
        ) : (
          <div className="text-slate-500">ตอนสุดท้าย</div>
        )}
      </div>
    </div>
  );
}
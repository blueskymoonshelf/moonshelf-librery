'use client';

import Link from 'next/link';

interface ChapterListProps {
  slug: string;
  chapters: string[];   // เช่น ["001", "002", ...]
}

export default function ChapterList({ slug, chapters }: ChapterListProps) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3">
      {chapters.map((chapter) => (
        <Link 
          key={chapter}
          href={`/read/\( {slug}/ \){chapter}`}
          className="bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-sky-500 p-4 rounded-xl text-center transition-all hover:scale-105 active:scale-95"
        >
          <div className="text-lg font-medium">ตอนที่ {parseInt(chapter)}</div>
          <div className="text-xs text-slate-400 mt-1">ตอน {chapter}</div>
        </Link>
      ))}
    </div>
  );
}
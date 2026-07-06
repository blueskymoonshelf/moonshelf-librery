'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';

export default function ReadPage() {
  const params = useParams();
  const slug = params.slug as string;
  const chapter = params.chapter as string;

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 25; // จำลอง

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-black/90 border-b border-slate-800 z-50 py-4">
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold">ตอนที่ {parseInt(chapter)}</h1>
            <p className="text-sm text-slate-400">Moonshelf Reader</p>
          </div>
          <a href={`/manga/${slug}`} className="text-sky-400 hover:underline">← กลับไปหน้ารายละเอียด</a>
        </div>
      </div>

      {/* Reader Area */}
      <div className="pt-24 pb-32 flex justify-center bg-black min-h-screen">
        <div className="max-w-4xl w-full px-4">
          <img 
            src={`https://picsum.photos/id/${90 + currentPage}/1200/1800`} 
            alt={`หน้า ${currentPage}`} 
            className="mx-auto rounded-xl shadow-2xl" 
          />
          <div className="text-center mt-6 text-slate-400">
            หน้า {currentPage} / {totalPages}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/95 border-t border-slate-800 py-6 z-50">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <button 
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            className="px-8 py-3 text-2xl hover:text-sky-400 transition"
            disabled={currentPage === 1}
          >
            ◀
          </button>

          <div className="text-center">
            <button className="bg-slate-800 hover:bg-slate-700 px-10 py-3 rounded-2xl">
              ตอนที่ {parseInt(chapter)}
            </button>
          </div>

          <button 
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            className="px-8 py-3 text-2xl hover:text-sky-400 transition"
            disabled={currentPage === totalPages}
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
}
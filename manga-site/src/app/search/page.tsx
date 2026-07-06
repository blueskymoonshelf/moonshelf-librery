'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Manga {
  title: string;
  slug: string;
  cover: string;
  latest: string;
  description?: string;
}

const allMangas: Manga[] = [
  { title: "Solo Leveling", slug: "solo-leveling", cover: "https://picsum.photos/id/1015/400/300", latest: "ตอน 250", description: "นักล่าที่กลับมาแข็งแกร่งที่สุด" },
  { title: "Nano Machine", slug: "nano-machine", cover: "https://picsum.photos/id/201/400/300", latest: "ตอน 189", description: "เทคโนโลยีแห่งอนาคตในยุคโบราณ" },
  { title: "The Beginning After The End", slug: "tbate", cover: "https://picsum.photos/id/237/400/300", latest: "ตอน 178", description: "ราชาที่กลับชาติมาเกิด" },
  { title: "Omniscient Reader", slug: "omniscient-reader", cover: "https://picsum.photos/id/180/400/300", latest: "ตอน 215", description: "ผู้อ่านที่รู้จักเรื่องทั้งหมด" },
  { title: "Wind Breaker", slug: "wind-breaker", cover: "https://picsum.photos/id/133/400/300", latest: "ตอน 512", description: "จักรวรรดิแห่งจักรยาน" },
];

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = allMangas.filter(m => 
    m.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-20">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">ค้นหามังงะ</h1>
        
        <div className="relative mb-10">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="พิมพ์ชื่อมังงะ..."
            className="w-full bg-slate-900 border border-slate-700 rounded-full py-4 px-6 pl-14 text-lg focus:outline-none focus:border-sky-500"
          />
          <i className="fa-solid fa-magnifying-glass absolute left-6 top-4.5 text-2xl text-slate-500"></i>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((manga) => (
            <Link href={`/manga/${manga.slug}`} key={manga.slug}>
              <div className="bg-slate-900 rounded-2xl overflow-hidden hover:scale-105 transition-all cursor-pointer group">
                <img src={manga.cover} alt={manga.title} className="w-full h-60 object-cover" />
                <div className="p-5">
                  <h3 className="font-bold text-xl group-hover:text-sky-400 transition">{manga.title}</h3>
                  <p className="text-sky-400 text-sm mt-1">{manga.latest}</p>
                  {manga.description && (
                    <p className="text-slate-400 text-sm line-clamp-2 mt-3">{manga.description}</p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && searchTerm && (
          <p className="text-center text-slate-400 text-xl mt-10">ไม่พบมังงะที่ค้นหา</p>
        )}
      </div>
    </div>
  );
}
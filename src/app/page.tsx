'use client';

import { useState, useEffect } from 'react';
import { getAllMangas, getImageUrl } from '@/lib/api';

interface Manga {
  title: string;
  slug: string;
  cover: string;
  latest?: string;
  description?: string;
}

export default function Home() {
  const [mangas, setMangas] = useState<Manga[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedManga, setSelectedManga] = useState<Manga | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // โหลดข้อมูลจาก Nextcloud
  useEffect(() => {
    const fetchMangas = async () => {
      try {
        const data = await getAllMangas();
        setMangas(data.length > 0 ? data : getFallbackMangas());
      } catch (error) {
        console.error("Failed to load mangas:", error);
        setMangas(getFallbackMangas());
      } finally {
        setLoading(false);
      }
    };

    fetchMangas();
  }, []);

  // ข้อมูลสำรองกรณี Nextcloud ยังไม่ทำงาน
  const getFallbackMangas = (): Manga[] => [
    { title: "Solo Leveling", slug: "solo-leveling", cover: "https://picsum.photos/id/1015/400/300", latest: "ตอน 250" },
    { title: "Nano Machine", slug: "nano-machine", cover: "https://picsum.photos/id/201/400/300", latest: "ตอน 189" },
    { title: "The Beginning After The End", slug: "tbate", cover: "https://picsum.photos/id/237/400/300", latest: "ตอน 178" },
    { title: "Omniscient Reader", slug: "omniscient-reader", cover: "https://picsum.photos/id/180/400/300", latest: "ตอน 215" },
  ];

  const filteredMangas = mangas.filter(manga =>
    manga.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openReader = (manga: Manga) => {
    setSelectedManga(manga);
    setCurrentPage(1);
  };

  const closeReader = () => {
    setSelectedManga(null);
    setCurrentPage(1);
  };

  const nextPage = () => setCurrentPage(p => p + 1);
  const prevPage = () => setCurrentPage(p => Math.max(1, p - 1));

  const showRandomManga = () => {
    if (mangas.length === 0) return;
    const random = mangas[Math.floor(Math.random() * mangas.length)];
    openReader(random);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-2xl text-slate-400">กำลังโหลดมังงะจาก Nextcloud...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navbar */}
      <nav className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <i className="fa-solid fa-moon text-3xl text-sky-400"></i>
            <h1 className="text-2xl font-bold tracking-tight">Moonshelf</h1>
          </div>
          
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <input 
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-800 border border-slate-600 rounded-full py-3 px-6 pl-12 focus:outline-none focus:border-sky-400 transition"
                placeholder="ค้นหาชื่อมังงะ..." 
              />
              <i className="fa-solid fa-magnifying-glass absolute left-5 top-3.5 text-slate-400"></i>
            </div>
          </div>

          <div className="flex items-center gap-6 text-lg">
            <a href="#" className="hover:text-sky-400 transition-colors">หน้าแรก</a>
            <a href="/search" className="hover:text-sky-400 transition-colors">ค้นหา</a>
            <a href="#" className="hover:text-sky-400 transition-colors">อัพเดทล่าสุด</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero-bg h-screen flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 tracking-tighter">อ่านมังงะในยามค่ำคืน</h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto">
            คอลเลกชันมังงะคุณภาพ • อ่านฟรี • อัพเดททุกวัน
          </p>
          <button 
            onClick={showRandomManga}
            className="bg-sky-500 hover:bg-sky-600 px-12 py-4 rounded-full text-lg font-semibold transition-all active:scale-[0.97]"
          >
            เริ่มอ่านเลย 🌙
          </button>
        </div>
      </header>

      {/* Popular Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
          <i className="fa-solid fa-fire text-orange-400"></i>
          ยอดนิยมสัปดาห์นี้
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredMangas.map((manga, i) => (
            <div 
              key={i}
              onClick={() => openReader(manga)}
              className="manga-card bg-slate-900 rounded-2xl overflow-hidden cursor-pointer group"
            >
              <div className="relative">
                <img 
                  src={manga.cover} 
                  alt={manga.title} 
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                {manga.latest && (
                  <div className="absolute top-3 right-3 bg-black/80 text-xs px-3 py-1 rounded-full">
                    {manga.latest}
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-sky-400 transition-colors">
                  {manga.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-400">
          <div className="flex items-center justify-center gap-3 mb-4">
            <i className="fa-solid fa-moon text-4xl text-sky-400"></i>
            <p className="text-3xl font-bold text-sky-400">Moonshelf</p>
          </div>
          <p className="text-lg">เว็บอ่านมังงะฟรี คลีน และสบายตา</p>
          <p className="mt-8 text-sm opacity-70">© 2026 Moonshelf • เชื่อมต่อกับ Nextcloud</p>
        </div>
      </footer>

      {/* Reader Modal */}
      {selectedManga && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4">
          <div className="max-w-5xl w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold">
                {selectedManga.title}
              </h3>
              <button 
                onClick={closeReader}
                className="text-4xl text-slate-400 hover:text-white p-2 transition"
              >
                ✕
              </button>
            </div>

            <div className="bg-slate-900 p-6 rounded-3xl">
              <img 
                src={getImageUrl(selectedManga.slug, "001", "001")} 
                alt="หน้าอ่าน" 
                className="reader-img mx-auto shadow-2xl" 
              />
              <div className="text-center mt-4 text-slate-400">
                หน้า {currentPage}
              </div>
            </div>

            <div className="flex justify-between items-center mt-8 px-8 text-4xl">
              <button onClick={prevPage} className="hover:text-sky-400 transition">◀</button>
              
              <button 
                onClick={closeReader}
                className="bg-slate-800 hover:bg-slate-700 px-10 py-4 rounded-2xl text-base font-medium transition"
              >
                ปิดหน้าอ่าน
              </button>

              <button onClick={nextPage} className="hover:text-sky-400 transition">▶</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
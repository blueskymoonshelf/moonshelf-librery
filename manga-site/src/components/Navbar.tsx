'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-moon text-3xl text-sky-400"></i>
          <Link href="/" className="text-2xl font-bold tracking-tight hover:text-sky-400 transition">
            Moonshelf
          </Link>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-xl mx-8 hidden md:block">
          <div className="relative">
            <input 
              type="text"
              placeholder="ค้นหาชื่อมังงะ..." 
              className="w-full bg-slate-800 border border-slate-600 rounded-full py-3 px-6 pl-12 focus:outline-none focus:border-sky-400 transition"
            />
            <i className="fa-solid fa-magnifying-glass absolute left-5 top-3.5 text-slate-400"></i>
          </div>
        </div>

        {/* Menu */}
        <div className="flex items-center gap-6 text-lg">
          <Link href="/" className="hover:text-sky-400 transition hidden md:block">หน้าแรก</Link>
          <Link href="/search" className="hover:text-sky-400 transition hidden md:block">ค้นหา</Link>
          <Link href="#" className="hover:text-sky-400 transition hidden md:block">แนวเรื่อง</Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700 px-6 py-4">
          <div className="flex flex-col gap-4 text-lg">
            <Link href="/" className="hover:text-sky-400">หน้าแรก</Link>
            <Link href="/search" className="hover:text-sky-400">ค้นหา</Link>
            <Link href="#" className="hover:text-sky-400">แนวเรื่อง</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
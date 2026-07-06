'use client';

import Image from 'next/image';
import Link from 'next/link';

interface MangaCardProps {
  title: string;
  slug: string;
  cover: string;
  latest?: string;
  onClick?: () => void;
}

export default function MangaCard({ title, slug, cover, latest, onClick }: MangaCardProps) {
  return (
    <div 
      onClick={onClick}
      className="manga-card bg-slate-900 rounded-2xl overflow-hidden cursor-pointer group hover:scale-[1.02] transition-all duration-300"
    >
      <div className="relative">
        <img 
          src={cover} 
          alt={title} 
          className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        {latest && (
          <div className="absolute top-3 right-3 bg-black/80 text-xs px-3 py-1 rounded-full font-medium">
            {latest}
          </div>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-sky-400 transition-colors">
          {title}
        </h3>
        <Link 
          href={`/manga/${slug}`}
          className="text-sky-400 text-sm mt-2 inline-block hover:underline"
        >
          ดูรายละเอียด →
        </Link>
      </div>
    </div>
  );
}
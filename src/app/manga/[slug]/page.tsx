import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface MangaDetail {
  title: string;
  slug: string;
  cover: string;
  banner?: string;
  description: string;
  author: string;
  status: string;
  genres: string[];
  chapters: number[];
}

const mangaData: Record<string, MangaDetail> = {
  "solo-leveling": {
    title: "Solo Leveling",
    slug: "solo-leveling",
    cover: "https://picsum.photos/id/1015/800/600",
    description: "เรื่องราวของ Sung Jin-Woo ชายผู้ที่ถูกเรียกว่า 'อ่อนแอที่สุด' แต่กลับได้รับโอกาสครั้งที่สองในการเปลี่ยนแปลงชะตาชีวิต",
    author: "Chugong",
    status: "จบแล้ว",
    genres: ["Action", "Fantasy", "Adventure"],
    chapters: Array.from({ length: 250 }, (_, i) => i + 1)
  },
  // เพิ่มเรื่องอื่นๆ ได้ที่นี่
};

export default function MangaPage({ params }: { params: { slug: string } }) {
  const manga = mangaData[params.slug];

  if (!manga) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="relative h-96">
        <Image 
          src={manga.cover} 
          alt={manga.title}
          fill 
          className="object-cover brightness-50" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/70 to-slate-950" />
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-32 relative z-10">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-64 flex-shrink-0">
            <img src={manga.cover} alt={manga.title} className="rounded-2xl shadow-2xl" />
          </div>

          <div className="flex-1 pt-8">
            <h1 className="text-5xl font-bold mb-4">{manga.title}</h1>
            <p className="text-xl text-slate-400 mb-6">โดย {manga.author}</p>

            <div className="flex gap-3 mb-8">
              {manga.genres.map(g => (
                <span key={g} className="bg-slate-800 px-4 py-1 rounded-full text-sm">{g}</span>
              ))}
              <span className="bg-emerald-500/20 text-emerald-400 px-4 py-1 rounded-full text-sm">{manga.status}</span>
            </div>

            <p className="text-lg leading-relaxed text-slate-300 mb-10">{manga.description}</p>

            <h2 className="text-2xl font-semibold mb-6">รายชื่อตอน</h2>
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-3">
              {manga.chapters.slice(0, 30).map((ch) => (
                <Link 
                  key={ch}
                  href={`/read/\( {manga.slug}/ \){ch.toString().padStart(3, '0')}`}
                  className="bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-sky-500 p-4 rounded-xl text-center transition"
                >
                  ตอนที่ {ch}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
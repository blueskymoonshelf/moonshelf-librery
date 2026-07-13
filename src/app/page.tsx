import Image from 'next/image';
import { getCoverUrl } from '@/lib/nextcloud';

export default async function Home() {
  // ตัวอย่างข้อมูล (ในอนาคตจะ fetch จาก Nextcloud)
    const trending = ["cutie", "gundam", "one-piece"];

      return (
          <div className="min-h-screen bg-[#05070d] text-[#c7d2ea] overflow-x-hidden">
                {/* Stars Background */}
                      <div className="fixed inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:50px_50px] opacity-30 pointer-events-none" />

                            {/* Navbar */}
                                  <header className="sticky top-0 z-50 backdrop-blur-md bg-[#05070d]/80 border-b border-[#263252]">
                                          {/* ... วางโค้ด navbar จาก HTML ... */}
                                                </header>

                                                      {/* Hero Section */}
                                                            <section className="hero pt-24 pb-16 px-10">
                                                                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                                                                              <div>
                                                                                          <h1 className="text-6xl font-bold leading-tight">
                                                                                                        อ่านมังงะเรื่องโปรด<br />ใต้แสง <span className="text-[#7fb2ff]">จันทร์</span>
                                                                                                                    </h1>
                                                                                                                                {/* ... ส่วนอื่น ๆ ... */}
                                                                                                                                          </div>
                                                                                                                                                  </div>
                                                                                                                                                        </section>

                                                                                                                                                              {/* Trending Grid */}
                                                                                                                                                                    <section className="px-10 py-16">
                                                                                                                                                                            <h2 className="text-3xl font-bold mb-8">อันดับยอดนิยม</h2>
                                                                                                                                                                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                                                                                                                                                                                              {trending.map((slug) => (
                                                                                                                                                                                                          <a key={slug} href={`/manga/${slug}`} className="group">
                                                                                                                                                                                                                        <Image
                                                                                                                                                                                                                                        src={getCoverUrl(slug)}
                                                                                                                                                                                                                                                        alt={slug}
                                                                                                                                                                                                                                                                        width={300}
                                                                                                                                                                                                                                                                                        height={400}
                                                                                                                                                                                                                                                                                                        className="rounded-xl transition-transform group-hover:scale-105"
                                                                                                                                                                                                                                                                                                                      />
                                                                                                                                                                                                                                                                                                                                  </a>
                                                                                                                                                                                                                                                                                                                                            ))}
                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                          </section>
                                                                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                                                                                                                                                }
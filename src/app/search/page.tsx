'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// สมมติข้อมูลจำลอง (ระบบจริงต้องดึงจาก api หรือ fetchMangaList)
const mockMangas = [
  { title: 'Cutie', slug: 'cutie', author: 'Moonshelf', tag: 'ทดสอบระบบ' },
    { title: 'ราชันย์แห่งสุริยุปราคา', slug: 'eclipse-king', author: 'อ.เคนตะ', tag: 'แอ็กชัน' },
    ];

    export default function SearchPage() {
      const [keyword, setKeyword] = useState('');
        const [results, setResults] = useState(mockMangas);

          useEffect(() => {
              const filtered = mockMangas.filter(manga => 
                    manga.title.toLowerCase().includes(keyword.toLowerCase()) ||
                          manga.author.toLowerCase().includes(keyword.toLowerCase())
                              );
                                  setResults(filtered);
                                    }, [keyword]);

                                      return (
                                          <main className="wrap" style={{ paddingTop: '100px' }}>
                                                <h1 style={{ marginBottom: '20px', color: 'var(--moon)' }}>ค้นหามังงะ</h1>
                                                      <input 
                                                              type="text" 
                                                                      placeholder="พิมพ์ชื่อเรื่อง หรือชื่อนักเขียน..." 
                                                                              value={keyword}
                                                                                      onChange={(e) => setKeyword(e.target.value)}
                                                                                              style={{
                                                                                                        width: '100%', padding: '16px', borderRadius: '8px',
                                                                                                                  background: 'var(--navy)', border: '1px solid var(--line)',
                                                                                                                            color: 'var(--paper)', fontSize: '16px', marginBottom: '40px'
                                                                                                                                    }}
                                                                                                                                          />
                                                                                                                                                
                                                                                                                                                      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                                                                                                                                              {results.length > 0 ? results.map(manga => (
                                                                                                                                                                        <Link href={`/manga/${manga.slug}`} key={manga.slug} style={{
                                                                                                                                                                                    display: 'flex', justifyContent: 'space-between', padding: '20px',
                                                                                                                                                                                                background: 'var(--navy-deep)', border: '1px solid var(--line)', borderRadius: '8px'
                                                                                                                                                                                                          }}>
                                                                                                                                                                                                                      <div>
                                                                                                                                                                                                                                    <h3 style={{ color: 'var(--moon)' }}>{manga.title}</h3>
                                                                                                                                                                                                                                                  <p style={{ color: 'var(--muted)', fontSize: '14px' }}>โดย {manga.author}</p>
                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                          <span style={{ color: 'var(--cyan)' }}>{manga.tag}</span>
                                                                                                                                                                                                                                                                                    </Link>
                                                                                                                                                                                                                                                                                            )) : <p style={{ color: 'var(--muted)' }}>ไม่พบมังงะที่ค้นหา</p>}
                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                      </main>
                                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                        
'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
    reset,
    }: {
      error: Error & { digest?: string };
        reset: () => void;
        }) {
          useEffect(() => {
              // Log the error to an error reporting service
                  console.error('พบปัญหาในระบบ:', error);
                    }, [error]);

                      return (
                          <main style={{ 
                                display: 'flex', flexDirection: 'column', alignItems: 'center', 
                                      justifyContent: 'center', minHeight: '80vh', textAlign: 'center', padding: '20px' 
                                          }}>
                                                <h2 style={{ color: 'var(--moon)', fontSize: '2rem', marginBottom: '15px' }}>
                                                        โอ๊ะโอ! ดูเหมือนจะมีบางอย่างผิดพลาด 🌑
                                                              </h2>
                                                                    <p style={{ color: 'var(--muted)', marginBottom: '30px' }}>
                                                                            เราไม่สามารถโหลดข้อมูลหน้านี้ได้ อาจเป็นปัญหาจากการเชื่อมต่อเซิร์ฟเวอร์
                                                                                  </p>
                                                                                        <div style={{ display: 'flex', gap: '15px' }}>
                                                                                                <button
                                                                                                          onClick={() => reset()}
                                                                                                                    style={{
                                                                                                                                background: 'var(--cyan)', color: 'var(--void)', padding: '12px 24px',
                                                                                                                                            borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold'
                                                                                                                                                      }}
                                                                                                                                                              >
                                                                                                                                                                        ลองใหม่อีกครั้ง
                                                                                                                                                                                </button>
                                                                                                                                                                                        <Link href="/" style={{
                                                                                                                                                                                                  background: 'var(--navy)', color: 'var(--moon)', padding: '12px 24px',
                                                                                                                                                                                                            borderRadius: '8px', border: '1px solid var(--line)', textDecoration: 'none'
                                                                                                                                                                                                                    }}>
                                                                                                                                                                                                                              กลับหน้าแรก
                                                                                                                                                                                                                                      </Link>
                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                </main>
                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                  
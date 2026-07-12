import Link from 'next/link';

interface ReaderControlsProps {
  slug: string;
    currentChapter: string; // เช่น '001'
    }

    export default function ReaderControls({ slug, currentChapter }: ReaderControlsProps) {
      // คำนวณตอนถัดไปและตอนก่อนหน้า (แปลงจาก string เช่น '001' เป็นตัวเลขแล้วบวก/ลบ)
        const currentNum = parseInt(currentChapter, 10);
          const prevChapter = String(currentNum - 1).padStart(3, '0');
            const nextChapter = String(currentNum + 1).padStart(3, '0');

              return (
                  <div style={{
                        position: 'fixed',
                              bottom: '20px',
                                    left: '50%',
                                          transform: 'translateX(-50%)',
                                                display: 'flex',
                                                      gap: '20px',
                                                            background: 'rgba(11, 17, 32, 0.9)',
                                                                  backdropFilter: 'blur(10px)',
                                                                        padding: '12px 24px',
                                                                              borderRadius: '99px',
                                                                                    border: '1px solid var(--line)',
                                                                                          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                                                                                                zIndex: 100
                                                                                                    }}>
                                                                                                          {/* ปุ่มตอนก่อนหน้า (ซ่อนถ้าเป็นตอนที่ 1) */}
                                                                                                                {currentNum > 1 ? (
                                                                                                                        <Link href={`/read/${slug}/${prevChapter}`} style={{ color: 'var(--moon)', fontWeight: 'bold' }}>
                                                                                                                                  ← ตอนก่อนหน้า
                                                                                                                                          </Link>
                                                                                                                                                ) : (
                                                                                                                                                        <span style={{ color: 'var(--muted)', cursor: 'not-allowed' }}>← ตอนก่อนหน้า</span>
                                                                                                                                                              )}

                                                                                                                                                                    <Link href={`/manga/${slug}`} style={{ color: 'var(--cyan)', fontWeight: 'bold', margin: '0 20px' }}>
                                                                                                                                                                            กลับหน้ารวมตอน
                                                                                                                                                                                  </Link>

                                                                                                                                                                                        <Link href={`/read/${slug}/${nextChapter}`} style={{ color: 'var(--moon)', fontWeight: 'bold' }}>
                                                                                                                                                                                                ตอนถัดไป →
                                                                                                                                                                                                      </Link>
                                                                                                                                                                                                          </div>
                                                                                                                                                                                                            );
                                                                                                                                                                                                            }
                                                                                                                                                                                                            
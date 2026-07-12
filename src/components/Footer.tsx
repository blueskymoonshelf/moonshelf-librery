import Link from 'next/link';

export default function Footer() {
  return (
      <footer style={{
            borderTop: '1px solid var(--line)', background: 'var(--navy-deep)',
                  padding: '40px 0', marginTop: '80px', position: 'relative', z-index: 2
                      }}>
                            <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
                                    <div>
                                              <h3 style={{ color: 'var(--moon)', marginBottom: '10px' }}>Moonshelf</h3>
                                                        <p style={{ color: 'var(--muted)', fontSize: '14px' }}>อ่านมังงะดิจิทัลใต้แสงจันทร์และหมู่ดาว</p>
                                                                </div>
                                                                        <div style={{ display: 'flex', gap: '40px' }}>
                                                                                  <div>
                                                                                              <h4 style={{ color: 'var(--cyan)', marginBottom: '10px', fontSize: '14px' }}>ลิงก์ด่วน</h4>
                                                                                                          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
                                                                                                                        <Link href="/">หน้าแรก</Link>
                                                                                                                                      <Link href="/search">ค้นหา</Link>
                                                                                                                                                  </div>
                                                                                                                                                            </div>
                                                                                                                                                                    </div>
                                                                                                                                                                          </div>
                                                                                                                                                                                <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '12px', color: 'var(--muted)' }}>
                                                                                                                                                                                        © {new Date().getFullYear()} Moonshelf. All rights reserved. Powered by Nextcloud Storage.
                                                                                                                                                                                              </div>
                                                                                                                                                                                                  </footer>
                                                                                                                                                                                                    );
                                                                                                                                                                                                    }
                                                                                                                                                                                                    
// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Moonshelf — อ่านมังงะใต้แสงจันทร์',
    description: 'ชั้นหนังสือดิจิทัลสำหรับคนรักมังงะ',
      icons: {
          icon: '/favicon.ico',
            },
            };

            export default function RootLayout({
              children,
              }: {
                children: React.ReactNode;
                }) {
                  return (
                      <html lang="th">
                            <body className="bg-[#05070d] text-[#c7d2ea] antialiased">
                                    {children}
                                          </body>
                                              </html>
                                                );
                                                }
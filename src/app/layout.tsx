import './globals.css';
import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

export const metadata = {
  title: 'Moonshelf — อ่านมังงะใต้แสงจันทร์',
  description: 'ชั้นหนังสือดิจิทัลสำหรับคนรักมังงะ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>
        <div className="stars"></div>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
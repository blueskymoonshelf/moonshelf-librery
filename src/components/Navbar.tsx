import Link from 'next/link';

export default function Navbar() {
  return (
    <header>
      <nav>
        <div className="logo">
          <span className="logo-mark">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M20 13.5A8.5 8.5 0 1 1 10.5 4a6.5 6.5 0 0 0 9.5 9.5Z" fill="#7fb2ff"/>
            </svg>
          </span>
          <Link href="/">Moonshelf</Link>
        </div>
        <div className="nav-links">
          <Link href="#trending">อันดับยอดนิยม</Link>
          <Link href="#genres">หมวดหมู่</Link>
          <Link href="#releases">อัปเดตล่าสุด</Link>
          <Link href="/library">คลังของฉัน</Link>
        </div>
        <div className="nav-actions">
          <div className="search-box">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="7"/>
              <path d="m21 21-4.3-4.3"/>
            </svg>
            <input type="text" placeholder="ค้นหาเรื่อง, นักเขียน..." />
          </div>
          <Link href="/login" className="btn-signin">เข้าสู่ระบบ</Link>
        </div>
      </nav>
    </header>
  );
}
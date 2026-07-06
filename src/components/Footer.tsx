export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-6 text-center text-slate-400">
        <div className="flex items-center justify-center gap-3 mb-4">
          <i className="fa-solid fa-moon text-4xl text-sky-400"></i>
          <p className="text-3xl font-bold text-sky-400">Moonshelf</p>
        </div>
        
        <p className="text-lg mb-2">เว็บอ่านมังงะฟรี คลีน และสบายตา</p>
        <p className="text-sm opacity-70">
          © 2026 Moonshelf • เชื่อมต่อกับ Nextcloud Storage
        </p>
        
        <div className="mt-8 text-xs text-slate-500">
          พัฒนาสำหรับการอ่านมังงะส่วนตัว
        </div>
      </div>
    </footer>
  );
}
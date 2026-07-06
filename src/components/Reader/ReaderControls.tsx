'use client';

interface ReaderControlsProps {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
  chapterNumber: string;
}

export default function ReaderControls({
  currentPage,
  totalPages,
  onPrev,
  onNext,
  onClose,
  chapterNumber
}: ReaderControlsProps) {
  return (
    <div className="flex justify-between items-center mt-8 px-4 text-4xl">
      <button 
        onClick={onPrev}
        disabled={currentPage === 1}
        className="hover:text-sky-400 disabled:opacity-40 transition disabled:cursor-not-allowed"
      >
        ◀
      </button>

      <div className="flex flex-col items-center text-base">
        <div className="font-medium">ตอนที่ {parseInt(chapterNumber)}</div>
        <div className="text-sm text-slate-400">
          {currentPage} / {totalPages}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={onClose}
          className="bg-slate-700 hover:bg-slate-600 px-8 py-3 rounded-2xl text-sm font-medium transition"
        >
          ปิด
        </button>
        
        <button 
          onClick={onNext}
          disabled={currentPage === totalPages}
          className="hover:text-sky-400 disabled:opacity-40 transition disabled:cursor-not-allowed"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
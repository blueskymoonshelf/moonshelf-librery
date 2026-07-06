'use client';

interface ImageViewerProps {
  imageUrl: string;
  alt: string;
  currentPage: number;
  totalPages: number;
}

export default function ImageViewer({ imageUrl, alt, currentPage, totalPages }: ImageViewerProps) {
  return (
    <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
      <img 
        src={imageUrl} 
        alt={alt} 
        className="reader-img mx-auto w-full max-h-[85vh] object-contain select-none"
        draggable="false"
      />
      
      {/* Page Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 px-6 py-2 rounded-full text-sm font-medium text-white flex items-center gap-2">
        <span>หน้า {currentPage}</span>
        <span className="text-slate-400">/</span>
        <span className="text-slate-400">{totalPages}</span>
      </div>
    </div>
  );
}
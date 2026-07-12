const SHARE_TOKEN = 'rZFrcmeyWQotHbi'; 
const NEXTCLOUD_BASE = 'http://fedora.tail7594aa.ts.net/nextcloud';

export function getNextcloudUrl(path: string): string {
  const cleanedPath = path.startsWith('/') ? path : `/${path}`;
    return `${NEXTCLOUD_BASE}/index.php/s/${SHARE_TOKEN}/download?path=${encodeURIComponent(cleanedPath)}`;
    }

    export async function getMangaMetadata() {
      try {
          const url = getNextcloudUrl('/_metadata/mangas.json');
              // เพิ่ม timeout หรือดักจับ error
                  const res = await fetch(url, { next: { revalidate: 60 } });
                      
                          if (!res.ok) {
                                console.warn('Nextcloud ตอบกลับมาแต่มีข้อผิดพลาด:', res.status);
                                      return []; // คืนค่าเป็น Array ว่าง
                                          }
                                              
                                                  return await res.json();
                                                    } catch (error) {
                                                        console.error('ไม่สามารถเชื่อมต่อ Nextcloud ได้:', error);
                                                            // หากพัง เว็บจะไม่แครช แต่จะคืนค่าเป็นชั้นหนังสือว่างๆ
                                                                return []; 
                                                                  }
                                                                  }
                                                                  
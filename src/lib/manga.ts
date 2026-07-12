const NEXTCLOUD_URL = process.env.NEXT_PUBLIC_NEXTCLOUD_URL || 'http://fedora.tail7594aa.ts.net/nextcloud/index.php/s/rZFrcmeyWQotHbi';

export async function fetchMangaList() {
  try {
      [span_12](start_span)// กำหนด Path ไปที่โฟลเดอร์ _metadata/mangas.json[span_12](end_span)
          const listPath = `/_metadata/mangas.json`; 
              const res = await fetch(`${NEXTCLOUD_URL}/download?path=${encodeURIComponent(listPath)}`);
                  
                      if (!res.ok) throw new Error('Failed to fetch mangas.json');
                          
                              const data = await res.json();
                                  return data;
                                    } catch (error) {
                                        console.error('Error fetching manga list:', error);
                                            return []; // คืนค่า array ว่างเพื่อไม่ให้เว็บพัง
                                              }
                                              }
                                              
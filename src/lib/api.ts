const SHARE_TOKEN = 'rZFrcmeyWQotHbi'; // แกะมาจากท้าย Link Nextcloud ของคุณ
const NEXTCLOUD_BASE = 'http://fedora.tail7594aa.ts.net/nextcloud';

/**
 * ฟังก์ชันแปลง Path ให้กลายเป็น URL สำหรับ Direct Download ภาพจาก Public Share ของ Nextcloud
  * @param path ตัวอย่าง '/cutie/cover.jpg' หรือ '/cutie/chapters/001/001.jpg'
   */
   export function getNextcloudUrl(path: string): string {
     // Nextcloud Public Share Direct Download URL format:
       // [BaseURL]/index.php/s/[Token]/download?path=[EncodedPath]
         const cleanedPath = path.startsWith('/') ? path : `/${path}`;
           return `${NEXTCLOUD_BASE}/index.php/s/${SHARE_TOKEN}/download?path=${encodeURIComponent(cleanedPath)}`;
           }

           /**
            * ฟังก์ชันดึงโครงสร้างมังงะและตอนทั้งหมดจากไฟล์ _metadata/mangas.json บน Nextcloud
             */
             export async function getMangaMetadata() {
               try {
                   const url = getNextcloudUrl('/_metadata/mangas.json');
                       const res = await fetch(url, { next: { revalidate: 60 } }); // Cache ข้อมูลไว้ 1 นาที
                           if (!res.ok) throw new Error('ไม่สามารถดึงข้อมูล mangas.json ได้');
                               return await res.json();
                                 } catch (error) {
                                     console.error('Nextcloud Fetch Error:', error);
                                         // คืนค่าข้อมูลสำรอง (Fallback) กรณี Server Nextcloud ยังไม่ได้เปิด หรือไม่มีไฟล์ เพื่อไม่ให้เว็บพัง
                                             return [
                                                   {
                                                           title: 'Cutie (มังงะทดสอบ)',
                                                                   slug: 'cutie',
                                                                           author: 'Moonshelf Team',
                                                                                   status: 'อัปเดตล่าสุด',
                                                                                           description: 'มังงะทดสอบระบบดึงภาพทะลุ Token จาก Nextcloud Server ของคุณ',
                                                                                                   genres: ['ทดสอบระบบ', 'แฟนตาซี'],
                                                                                                           chapters: ['001', '002']
                                                                                                                 }
                                                                                                                     ];
                                                                                                                       }
                                                                                                                       }
                                                                                                                       
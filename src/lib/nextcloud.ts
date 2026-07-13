const BASE_URL = process.env.NEXT_PUBLIC_NEXTCLOUD_URL!;
const TOKEN = process.env.NEXTCLOUD_SHARE_TOKEN!;

export function getImageUrl(slug: string, subPath: string = ""): string {
  const path = subPath ? `/\( {slug}/ \){subPath}` : `/${slug}`;
    return `\( {BASE_URL}/s/ \){TOKEN}/download?path=${encodeURIComponent(path)}`;
    }

    export function getCoverUrl(slug: string): string {
      return getImageUrl(slug, "cover.jpg");
      }

      export async function getMetadata(slug: string) {
        const url = getImageUrl(slug, "metadata.json");
          const res = await fetch(url);
            if (!res.ok) throw new Error("ไม่พบข้อมูล");
              return res.json();
              }
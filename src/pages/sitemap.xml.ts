import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { districtList, site } from "../site.config";

export const GET: APIRoute = async () => {
  const notes = await getCollection("notatki");
  const staticPaths = [
    "/",
    "/atlas/",
    "/dzielnice/",
    "/sprawdz/",
    "/plan/",
    "/polityka-prywatnosci/",
    ...districtList.map((d) => `/dzielnice/${d.id}/`),
  ];
  const urls = [
    ...staticPaths.map((p) => ({ loc: new URL(p, site.origin).href, lastmod: undefined as string | undefined })),
    ...notes.map((n) => ({
      loc: new URL(`/notatki/${n.slug}/`, site.origin).href,
      lastmod: n.data.pubDate.toISOString().slice(0, 10),
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>${u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ""}
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};

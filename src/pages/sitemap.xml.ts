import { getCollection } from 'astro:content';

export async function get() {
  const posts = await getCollection('posts');
  const publishedPosts = posts.filter((post) => !post.data.draft);
  
  const pages = [
    { url: '/', changefreq: 'daily', priority: 1.0, lastmod: undefined as Date | undefined },
    { url: '/archive', changefreq: 'weekly', priority: 0.8, lastmod: undefined as Date | undefined },
    { url: '/tags', changefreq: 'weekly', priority: 0.8, lastmod: undefined as Date | undefined },
    { url: '/about', changefreq: 'monthly', priority: 0.6, lastmod: undefined as Date | undefined },
    { url: '/subscribe', changefreq: 'monthly', priority: 0.6, lastmod: undefined as Date | undefined },
  ];
  
  const postUrls = publishedPosts.map((post) => ({
    url: `/posts/${post.slug}`,
    changefreq: 'monthly' as const,
    priority: 0.7,
    lastmod: post.data.updated || post.data.date,
  }));

  const allUrls = [...pages, ...postUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls.map((item) => `
  <url>
    <loc>${import.meta.env.SITE}${item.url}</loc>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
    ${item.lastmod ? `<lastmod>${new Date(item.lastmod).toISOString()}</lastmod>` : ''}
  </url>`).join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

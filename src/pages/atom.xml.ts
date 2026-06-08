import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';

export async function get() {
  const posts = await getCollection('posts');
  const publishedPosts = posts.filter((post) => !post.data.draft);
  const sortedPosts = publishedPosts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  return rss({
    title: '一心',
    description: '一个用于记录生活、阅读、技术和思考的个人博客。',
    site: import.meta.env.SITE,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      link: `/posts/${post.slug}`,
    })),
    customData: `<language>zh-CN</language>`,
  });
}

import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import site from '../data/site.json';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
  const posts = await getCollection('blog');
  const allPosts = posts.sort(
  (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
);
  return rss({
    title: site.title,
    description: site.description,
    site: 'https://pandog.media/',
    items: allPosts.map((post) => ({
      link: `/blog/${post.slug}/`,
      content: sanitizeHtml(parser.render(post.body)),
      ...post.data,
    }))
    });
  }
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  image: string;
  tags: string[];
  seoDescription: string;
  published: boolean;
  content?: string; // HTML string, only loaded for single post pages
}

// Read all posts from content/blog/*.md
export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'));

  const posts: BlogPost[] = files
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '');
      const fullPath = path.join(BLOG_DIR, filename);
      const raw = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(raw);

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
        author: data.author || 'CreatorMD Team',
        category: data.category || 'General',
        excerpt: data.excerpt || '',
        image: data.image || '',
        tags: Array.isArray(data.tags) ? data.tags : [],
        seoDescription: data.seoDescription || data.excerpt || '',
        published: data.published !== false, // default true unless explicitly false
      };
    })
    // Only show published posts, sorted newest first
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

// Read a single post by slug, including rendered HTML content
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const raw = fs.readFileSync(fullPath, 'utf8');
  const { data, content: markdownContent } = matter(raw);

  // Convert markdown to HTML
  const processed = await remark()
    .use(remarkGfm) // tables, strikethrough, task lists
    .use(remarkHtml, { sanitize: false }) // allow inline images & links
    .process(markdownContent);

  const contentHtml = processed.toString();

  return {
    slug,
    title: data.title || 'Untitled',
    date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
    author: data.author || 'CreatorMD Team',
    category: data.category || 'General',
    excerpt: data.excerpt || '',
    image: data.image || '',
    tags: Array.isArray(data.tags) ? data.tags : [],
    seoDescription: data.seoDescription || data.excerpt || '',
    published: data.published !== false,
    content: contentHtml,
  };
}

// All slugs for static generation
export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

// Format a date string nicely
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

import pagesData from '../data/pages.json';

export interface Post {
  slug: string;
  title: string;
  description: string;
  h1: string;
  image: string;
  date: string;
  category: string;
  author: string;
  body: string;
}

const all = pagesData as Post[];

export const articles: Post[] = all.filter(
  (p) => p.body && !p.slug.includes('/') && p.slug !== 'index'
);

export function excerpt(p: Post, len = 130): string {
  if (p.description) return p.description.slice(0, len + 30);
  const text = p.body.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return text.slice(0, len).replace(/\s\S*$/, '') + '…';
}

export function byCategory(cat: string): Post[] {
  return articles.filter((p) => p.category === cat);
}

export function byAuthor(author: string): Post[] {
  return articles.filter((p) => p.author === author);
}

export function formatDate(iso: string): string {
  if (!iso) return '';
  const months = [
    'januari', 'februari', 'maart', 'april', 'mei', 'juni',
    'juli', 'augustus', 'september', 'oktober', 'november', 'december',
  ];
  const d = new Date(iso);
  if (isNaN(d.getTime())) return '';
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

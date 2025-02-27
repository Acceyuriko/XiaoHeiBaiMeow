declare module 'markdown-it-toc-and-anchor';

interface NoteMeta {
  title: string;
  description: string;
  createdAt: number;
  updatedAt: number;
  cover: string;
  tags: string[];
  content: string;
  charactors: number;
}

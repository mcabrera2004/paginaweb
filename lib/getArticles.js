import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const dir = path.join(process.cwd(), 'content');

export function getArticles() {
  const files = fs.readdirSync(dir);

  return files
    .map(filename => {
      const filePath = path.join(dir, filename);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);

      return {
        ...data,
        slug: filename.replace('.md', ''),
      };
    })
    .filter(article => article.featured); // Filtrar solo los artículos destacados
}

export async function getArticleBySlug(slug) {
  const filePath = path.join(dir, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  // Convierte el markdown a HTML
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    ...data,
    slug,
    contentHtml,
  };
}
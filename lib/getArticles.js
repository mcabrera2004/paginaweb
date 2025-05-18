import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getArticles() {
  const dir = path.join(process.cwd(), 'content');
  const files = fs.readdirSync(dir);

  return files.map(filename => {
    const filePath = path.join(dir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return {
      ...data,
      slug: filename.replace('.md', '')
    };
  });
}

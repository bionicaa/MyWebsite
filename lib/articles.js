import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'articles');
export function getAll() {
  const fileNames = fs.readdirSync(articlesDirectory);
  const articles = fileNames.map(fileName => {
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      ...data,
      content,
      slug: fileName.replace(/\.md$/, ''),
    };
  });
  return articles;
}
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
// This function reads all articles from the 'articles' directory

const articlesDirectory = path.join(process.cwd(), 'articles');
export function getAll() {
  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames.map(fileName => {
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      ...data,
      content,
      slug: data.slug || fileName.replace(/\.mdx$/, ''),
    };
  });
}
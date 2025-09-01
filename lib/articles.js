import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
// This function reads all articles from the 'articles' directory

const articlesDirectory = path.join(process.cwd(), 'articles');

export async function getAll() {
  const fileNames = (await fs.readdir(articlesDirectory)).filter(name => name.endsWith('.mdx'));
  return Promise.all(fileNames.map(async fileName => {
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      ...data,
      content,
      slug: data.slug || fileName.replace(/\.mdx?$/, ''),
    };
  }));
}
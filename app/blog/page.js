import Page from '@/lib/page.jsx';
import styles from '../../styles/blog.module.css';
import NavBar from './navBar';
import { getAll } from '@/lib/articles';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc'; // for Next.js App Router
import { mdxComponents } from '@/mdx-components';

export default async function BlogPage() {
  const articles = await getAll();
  const featuredArticles = articles.filter(article => article.featured);
  
  return (
    <div>
      <Page />
      <NavBar />
      <div className={styles.blogContent}>
        <h1><strong>Featured</strong></h1>
        <p>Welcome to my blog. Here you&apos;ll find a variety of articles and posts on different topics that interest me.</p>
        <br />
        {featuredArticles.map(article => (
          <div key={article.slug}>
            <br />
            <h2><b><em>{article.title}</em></b></h2>
            <MDXRemote source={article.excerpt} components={mdxComponents} />
            <Link href={`/blog/${article.category}/${article.category}`} className="text-white mt-2 inline-block">
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

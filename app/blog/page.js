import React from 'react';
import Page from '../page';
import styles from '../../styles/blog.module.css';
import NavBar from './navBar';
import { getAll } from '../../lib/articles';
import Link from 'next/link';

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
        {featuredArticles.map(article => (
          <a key={article.slug} className={styles.article}>
            <h3 className="text-xl font-semibold">{article.category.toUpperCase()}</h3>
            <h2>{article.title}</h2>
            <p className="text-sm mt-2 text-gray-600">{article.excerpt}</p>
            <Link href={`/blog/${article.category}/${article.slug}`} className="text-blue-600 mt-2 inline-block">
              Read more →
            </Link>
          </a>
        ))}
      </div>
    </div>
  );
}

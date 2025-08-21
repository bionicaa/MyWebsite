import React from "react";
import Page from "@/app/page";
import NavBar from "../../navBar";
import styles from "styles/blog.module.css";
import { convertMarkdownToHtml } from "../../htmlConverter";
import { getAll } from "@/lib/articles";

export default async function FitnessPage({ params }) {
  const { fitness } = params; // fitness is the slug
  const articles = await getAll();
  // Filter articles by category or slug, depending on your data structure
  const fitnessArticles = articles.filter(article => article.slug && article.slug.toLowerCase() === fitness.toLowerCase());
  return (
    <div>
      <Page />
      <NavBar />
      <div className={styles.blogContent}>
        <h1><strong>Fitness & Health</strong></h1>

        {fitnessArticles.length > 0 ? (
          fitnessArticles.map(article => (
            <div key={article.id}>
              <h2>{article.title} </h2>
              <div dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(article.content) }} />
            </div>
          ))
        ) : (
          <p>No articles found.</p>
        )}
      </div>
    </div>
  );
}
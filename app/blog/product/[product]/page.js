import React from "react";
import Page from "@/app/page";
import NavBar from "../../navBar";
import styles from "styles/blog.module.css";
import { convertMarkdownToHtml } from "../../htmlConverter";
import { getAll } from "@/lib/articles";

export default async function ProductPage({ params }) {
  const { product } = params; // product is the slug
  const articles = await getAll();
  // Filter articles by category or slug, depending on your data structure
  const productArticles = articles.filter(
    article => article.slug && article.slug.toLowerCase() === product.toLowerCase()
  );
  return (
    <div>
      <Page />
      <NavBar />
      <div className={styles.blogContent}>
        <h1><strong>Product</strong></h1>
        {productArticles.length > 0 ? (
          productArticles.map(article => (
            <div key={article.id}>
              <h2>{article.title} </h2>
              <h3>{article.date}</h3>
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

import Page from "@/app/page";
import NavBar from "../../navBar";
import styles from "styles/blog.module.css";
import { getAll } from "@/lib/articles";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function ProductPage({ params }) {
  const { product } = params; // product is the slug
  const articles = await getAll();
  // Filter articles by slug
  const article = articles.find(a => a.slug && a.slug.toLowerCase() === product.toLowerCase());
  return (
    <div>
      <Page />
      <NavBar />
      <div className={styles.blogContent}>
        <h1><strong>Product</strong></h1>
        {article ? (
          <div>
            <h2>{article.title}</h2>
            <h3>{article.date}</h3>
            <MDXRemote source={article.content} />
          </div>
        ) : (
          <p>No articles found.</p>
        )}
      </div>
    </div>
  );
}

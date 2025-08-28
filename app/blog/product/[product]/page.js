import Page from "@/app/page";
import NavBar from "../../navBar";
import styles from "styles/blog.module.css";
import { getAll } from "@/lib/articles";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/mdx-components";

export default async function ProductPage({ params }) {
  const { product } = params; // product is the slug
  const articles = await getAll();
  // Filter articles by slug
  const article = articles.filter(a => a.slug && a.slug.toLowerCase() === "product");
  return (
    <div>
      <Page />
      <NavBar />
      <div className={styles.blogContent}>
        <h1><strong>Product</strong></h1>
        <br />
        {article.length > 0 ? (
          article.map(article => (
            <div key={article.slug}>
              <br />
              <h3><em>{article.date}</em></h3>
              <MDXRemote source={article.content} components={mdxComponents} />
            </div>
        ))) : (
          <p>No articles found.</p>
        )}
      </div>
    </div>
  );
}

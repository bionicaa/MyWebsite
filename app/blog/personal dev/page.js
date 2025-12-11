import Base from "@/app/base.jsx";
import NavBar from "../navBar";
import styles from "styles/blog.module.css";
import { MDXRemote } from 'next-mdx-remote/rsc'; // for Next.js App Router
import { getAll } from "@/lib/articles";
import { mdxComponents } from "@/mdx-components";

// This function tells Next.js which fitness slugs to statically generate
export async function generateStaticParams() {
  const articles = await getAll();
  // Filter articles for the fitness category and return their slugs
  const params = articles
    .filter(a => a.category && a.category.toLowerCase() === "personal")
    .map(a => ({ personal: a.slug }));
  // Always return at least one param for static export
  return params.length > 0 ? params : [{ personal: "no-articles" }];
}

export default async function PersonalDevPage({ params }) {
  const { personal } = params; // fitness is the slug
  const articles = await getAll();
  // Filter articles by slug
  const article = articles.filter(a => a.category && a.category.toLowerCase() === "personal");

  return (
    <div className={styles.pageContainer}>
      <Base />
      <div className={styles.contentOverlay}>
        <NavBar />
        <div className={styles.blogContent}>
          <h1><strong>Personal Development</strong></h1>
          <br />
          {article.length > 0 ? (
          article.map(article => (
            <div key={article.slug}>
              <br />
              <h3><em>{article.date}</em></h3>
              <MDXRemote source={article.content} components={mdxComponents} />
            </div>
          ))
        ) : (
          <p>No articles found.</p>
        )}
        </div>
      </div>
    </div>
  );
}
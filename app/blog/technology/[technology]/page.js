import Page from "@/lib/page.jsx";
import NavBar from "../../navBar";
import styles from "styles/blog.module.css";
import { MDXRemote } from 'next-mdx-remote/rsc'; // for Next.js App Router
import { getAll } from "@/lib/articles";
import { mdxComponents } from "@/mdx-components";

// This function tells Next.js which technology slugs to statically generate
export async function generateStaticParams() {
  const articles = await getAll();
  const params = articles
    .filter(a => a.category && a.category.toLowerCase() === "technology")
    .map(a => ({ technology: a.slug }));
  // Always return at least one param for static export
  return params.length > 0 ? params : [{ technology: "no-articles" }];
} 

export default async function TechnologyPage({ params }) {
  const { technology } = params; // technology is the slug
  const articles = await getAll();
  // Filter articles by slug
  const article = articles.filter(a => a.slug && a.slug.toLowerCase() === technology.toLowerCase());
  return (
    <div>
      <Page />
      <NavBar />
      <div className={styles.blogContent}>
        <h1><strong>Technology</strong></h1>
        <br />
        {technology !== "no-articles" ? (
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
  );
}

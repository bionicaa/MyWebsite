import Page from "@/app/page";
import NavBar from "../../navBar";
import styles from "styles/blog.module.css";
import { MDXRemote } from 'next-mdx-remote/rsc'; // for Next.js App Router
import { getAll } from "@/lib/articles";
import { mdxComponents } from "@/mdx-components";

export default async function FitnessPage({ params }) {
  const { fitness } = params; // fitness is the slug
  const articles = await getAll();
  // Filter articles by slug
  const article = articles.find(a => a.slug && a.slug.toLowerCase() === fitness.toLowerCase());
  
  return (
    <div>
      <Page />
      <NavBar />
      <div className={styles.blogContent}>
        <h1><strong>Fitness & Health</strong></h1>
        <br />
        {article ? (
          <div>
            <h2>{article.title} </h2>
            <h3>{article.date}</h3>
            <MDXRemote source={article.content} components={mdxComponents} />
          </div>
        ) : (
          <p>No articles found.</p>
        )}
      </div>
    </div>
  );
}
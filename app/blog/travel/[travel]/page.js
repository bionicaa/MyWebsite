import Page from "@/app/page";
import NavBar from "../../navBar";
import styles from "styles/blog.module.css";
import { MDXRemote } from 'next-mdx-remote/rsc'; // for Next.js App Router
import { getAll } from "@/lib/articles";
import { mdxComponents } from "@/mdx-components";

export default async function TravelPage({ params }) {
  const { travel } = params; // travel is the slug
  const articles = await getAll();
  // Filter articles by slug
  const article = articles.find(a => a.slug && a.slug.toLowerCase() === travel.toLowerCase());
  return (
    <div>
      <Page />
      <NavBar />
      <div className={styles.blogContent}>
        <h1><strong>Travel & History</strong></h1>
        <br />
        {article ? (
          <div>
            <h3><em>{article.date}</em></h3>
            <MDXRemote source={article.content} components={mdxComponents} />
          </div>
        ) : (
          <p>No articles found.</p>
        )}
      </div>
    </div>
  );
}

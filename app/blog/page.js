import React from 'react';
import Page from '../page';
import styles from '../../styles/blog.module.css';
import NavBar from './navBar';

function BlogPage() {
  return (
    <>
      <Page>
      </Page>
      <NavBar />
      <div className={styles.blogContent}>
        <h1><strong>Featured</strong></h1>
        <p>Welcome to my blog. Here you&apos;ll find a variety of articles and posts on different topics that interest me.</p>
        <a className={styles.article}>
          Read more...
        </a>
      </div>
    </>
  );
}

export default BlogPage;

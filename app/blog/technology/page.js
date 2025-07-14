import React from 'react';
import Page from "@/app/page";
import NavBar from '../navBar';
import styles from '../../../styles/blog.module.css';

function TechnologyPage() {
  return (
    <div>
      <Page />
      <NavBar />
      <div className={styles.blogContent}>
        <h1><strong>Technology</strong></h1>
      </div>
    </div>
  );
}

export default TechnologyPage;

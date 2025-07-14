import React from 'react';
import Page from '@/app/page';
import NavBar from '../navBar';
import styles from '../../../styles/blog.module.css';

function FitnessPage() {
  return (
    <>
      <Page />
      <NavBar />
      <div className={styles.blogContent}>
        <h1><strong>Fitness</strong></h1>
      </div>
    </>
  );
}

export default FitnessPage;
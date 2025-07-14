import React from 'react';
import Page from '@/app/page';
import NavBar from '../navBar';
import styles from '../../../styles/blog.module.css';

function ProductPage() {
  return (
    <div>
      <Page />
      <NavBar />
      <div className={styles.blogContent}>
        <h1><strong>Product</strong></h1>
      </div>
    </div> 
  );
}

export default ProductPage;

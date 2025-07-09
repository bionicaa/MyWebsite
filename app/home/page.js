import React from 'react'
import styles from '../../styles/home.module.css'
import Page from '../page';

// This is the home page of the application
function HomePage() {
  return (
    <>
      <Page>
      </Page>
      <div className={styles.content}>
        <h1>Home</h1>
        <p>All about me.</p>
      </div>
    </>
    
  );
}

export default HomePage;
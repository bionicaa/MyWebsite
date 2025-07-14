import React from 'react';
import Link from 'next/link';
import styles from '../../styles/blog.module.css';

function NavBar() {
  return (
    <div className={styles.navBar}>
      <p>
        <strong>Categories</strong>
        <br />
        <Link href="/blog/product">Product</Link>
        <br />
        <Link href="/blog/technology">Technology</Link>
        <br />
        <Link href="/blog/fitness">Fitness</Link>
        <br />
        <Link href="/blog/travel">Travel</Link>
      </p>
    </div>
  );
}

export default NavBar;

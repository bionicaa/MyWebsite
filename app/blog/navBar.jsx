import Link from 'next/link';
import styles from 'styles/blog.module.css';

function NavBar() {
  return (
    <div className={styles.navBar}>
      <p>
        <strong>Categories</strong>
        <br />
        <br />
        <Link href="/blog/product">Product</Link>
        <br />
        <br />
        <Link href="/blog/technology">Technology</Link>
        <br />
        <br />
        <Link href="/blog/fitness">Fitness & Health</Link>
        <br />
        <br />
        <Link href="/blog/travel">Travel & History</Link>
      </p>
    </div>
  );
}

export default NavBar;

'use client';

import styles from '../styles/expertise.module.css';

/**
 * Expertise component
 * Props:
 * - items: [{ slug, title, text, icon }]
 */
export default function Expertise({ items = [] }) {
  return (
    <section className={styles.grid} aria-label="Expertise">
      {items.map((item, idx) => (
        <article className={styles.card} key={item.slug ?? idx}>
          {item.icon && (
            <div className={styles.icon}>
              <img src={item.icon} alt={item.title + ' icon'} />
            </div>
          )}
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.text}>{item.text}</p>
        </article>
      ))}
    </section>
  );
}
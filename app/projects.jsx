'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/projects.module.css';

/**
 * Projects component
 * Props:
 *  - projects: [{ slug, title, description (ReactNode|string), image, demo, repo }]
 */
export default function Projects({ projects = [] }) {
  if (!projects.length) return null;

  return (
    <section className={styles.container} aria-label="Projects">
      <div className={styles.grid}>
        {projects.map((p, i) => (
          <article className={styles.card} key={p.slug ?? `proj-${i}`}>
            {p.image && (
              <div className={styles.media}>
                <Image
                  src={p.image}
                  alt={p.title}
                  width={600}
                  height={340}
                  className={styles.image}
                />
              </div>
            )}
            <div className={styles.body}>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.description}>{p.description}</p>
              <div className={styles.actions}>
                {p.demo && <Link href={p.demo} className={styles.link}>Live</Link>}
                {p.repo && <Link href={p.repo} className={styles.link}>Code</Link>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
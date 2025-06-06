// pages/education/index.js

import { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { getAllPosts } from '../../lib/posts';
import styles from '../../styles/Education.module.css';

export async function getStaticProps() {
  const allPosts = getAllPosts();
  return { props: { allPosts } };
}

export default function EducationIndex({ allPosts }) {
  // ← Declare selectedTag state here
  const [selectedTag, setSelectedTag] = useState(null);

  // Build unique tag list
  const allTags = useMemo(() => {
    const set = new Set();
    allPosts.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [allPosts]);

  // Filter posts by selectedTag
  const filteredPosts = useMemo(() => {
    if (!selectedTag) return allPosts;
    return allPosts.filter((p) => p.tags.includes(selectedTag));
  }, [allPosts, selectedTag]);

  return (
    <>
      <Head>
        <title>Education | York Paris</title>
        <meta
          name="description"
          content="Explore our educational posts on custom jewelry and design."
        />
        <meta property="og:title" content="Education | York Paris" />
        <meta
          property="og:description"
          content="Educational posts on custom jewelry and design."
        />
      </Head>

      <main className={styles.educationContainer}>
        <h1 className={styles.educationTitle}>Educational Articles</h1>

        {/* ===== Tag filters ===== */}
        <div className={styles.tagList}>
          <button
            className={
              selectedTag === null ? styles.tagItemActive : styles.tagItem
            }
            onClick={() => setSelectedTag(null)}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={
                selectedTag === tag ? styles.tagItemActive : styles.tagItem
              }
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* ===== Post list ===== */}
        <ul className={styles.postList}>
          {filteredPosts.map(({ slug, date, title, description, tags }) => (
            <li key={slug} className={styles.postItem}>
              <Link href={`/education/${slug}`} className={styles.postLink}>
                <h2 className={styles.postTitle}>{title}</h2>
                <time className={styles.postDate}>
                  {new Date(date).toDateString()}
                </time>
                {description && (
                  <p className={styles.postDescription}>{description}</p>
                )}
                <div className={styles.postTags}>
                  {tags.map((t) => (
                    <span key={t} className={styles.postTag}>
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
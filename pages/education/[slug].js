// pages/education/[slug].js

import Head from 'next/head'
import { getAllPosts, getPostBySlug } from '../../lib/posts'
import styles from '../../styles/EducationPost.module.css'

export async function getStaticPaths() {
  const posts = getAllPosts()
  const paths = posts.map((p) => ({ params: { slug: p.slug } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const postData = await getPostBySlug(params.slug)
  return { props: { postData } }
}

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title} | York Paris</title>
        <meta name="description" content={postData.description} />
        <meta property="og:title" content={`${postData.title} | York Paris`} />
        <meta property="og:description" content={postData.description} />
      </Head>

      <article className={styles.postContainer}>
        <h1 className={styles.postTitle}>{postData.title}</h1>
        <time className={styles.postDate}>{new Date(postData.date).toDateString()}</time>
        <div
          className={styles.postContent}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </>
  )
}
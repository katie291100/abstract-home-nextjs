import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { getSortedArticlesData } from '../lib/articles';
import Card from '../components/card';
import Layout from '../components/layout';

export default function Home({allArticlesData}) {
  return (
      <Layout home>      
        <h1 className="mb-[1.5rem] leading-[1.15rem] text-[3.6rem] text-center">
          Welcome to&nbsp;
          <a
            href="https://nextjs.org"
            className="text-[#0070f3] hover:underline focus:underline active:underline"
          >Next.js!</a>
        </h1>

        <p className="align-center leading-6 text-base mt-2">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <Card
            link="https://nextjs.org/docs"
            heading="Documentation &rarr;"
            description="Find in-depth information about Next.js features and API."
            />

          <Card
            link="https://nextjs.org/learn"
            heading="Learn &rarr;"
            description="Learn about Next.js in an interactive course with quizzes!"
            />

          <Card
            link="https://github.com/vercel/next.js/tree/master/examples"
            heading="Examples &rarr;"
            description="Discover and deploy boilerplate example Next.js projects."
            />

          <Card
            link="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            heading="Deploy &rarr;"
            description="Instantly deploy your Next.js site to a public URL with Vercel."
            />
        </div>
        <ul>
          {allArticlesData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/articles/${id}`}>{title}</Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
    </Layout>
  )
}
export async function getStaticProps() {
  const allArticlesData = getSortedArticlesData()
  return {
    props: {
      allArticlesData
    }
  }
}

import Head from 'next/head'
import IntroHeader from "../components/introHeader";
import RecentPosts from "../components/recentPosts";
import FeaturedWork from "../components/featuredWork";

import {getAllPosts, getAllWork} from "../lib/api";

export async function getStaticProps() {
  const posts = getAllPosts();
  const work = getAllWork();

  return {
    props: {
      posts,
      work,
    },
  };
}

export default function Home({posts, work}) {
  return (
    <div>
      <Head>
       

          <title>Christophers WebDev Portfolio</title>
          <meta name="description" content="WebDev Portfolio mit Next.js" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
        <IntroHeader />
        <RecentPosts posts={posts} />
        <FeaturedWork work={work} />
    </div>
  )
}

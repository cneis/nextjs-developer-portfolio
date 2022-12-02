import Head from 'next/head'
import Article from "../../components/article";
import {getAllPosts} from "../../lib/api";

export async function getStaticProps() {
    const posts = getAllPosts();

    return {
        props: {
            posts,
        },
    };
}

export default function Blog({ posts }) {
    return (
        <div>
            <Head>
                <title>Christopher Neis Blog</title>
                <meta name="description" content="In diesem Blog schreibe ich ganz kurze Tipps zu Web Developemnt, die ich auch in dieser Seite umgesetzt habe." />
                <meta name="robots" content="index, follow>" />
                <meta name="viewport" content='width=device-width,initial-scale=1' />
                <meta charSet='UTF-8' />
                <link rel="icon" href="/public/favicon.ico" />
            </Head>
            <section className='px-6'>
                <div className='max-w-4xl mx-auto'>
                    <h1 className='text-3xl font-bold mb-6 p-4'>Blog</h1>
                    {posts.map((post) => (
                        <Article key={post.slug} className='border-b-2 my-6 rounded-md' post={post} />
                    ))}
                </div>
            </section>
        </div>
    )
}

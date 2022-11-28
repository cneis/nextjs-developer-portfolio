import md from 'markdown-it';
import Link from "next/link";

import {getAllPosts, getPostBySlug} from "../../lib/api";

export async function getStaticPaths() {
    const posts = getAllPosts();

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug
                }
            }
        }),
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {
    const post = getPostBySlug(slug);
    return {
        props: post,
    };
}

export default function PostPage({ frontmatter, content }) {
    return (
        <section className='px-6'>
            <div className='max-w-4xl mx-auto py-12'>

                <div className='prose mx-auto'>
                <nav>
                    <ul className='flex -ml-10 align-center list-none'>
                        <li>
                            <Link href='/blog'> 
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" /></svg>
                                </div>
                            </Link>
                        </li>
                        <li><Link href='/blog'>Zurück zur Liste</Link></li>
                    </ul>
                </nav>
                    <h1>{frontmatter.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
                </div>
            </div>
        </section>
    );
}




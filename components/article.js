import Link from "next/link";

export default function Article({post, className = 'rounded-lg'}) {
    return (
        <Link href={`blog/${post.slug}`}>
        <article className={`bg-white p-4 duration-700 hover:scale-105 hover:bg-sky-100 drop-shadow-md hover:drop-shadow-xl ${className}`}>
            <h3 className='text-2xl mb-2 font-medium cursor-pointer'>{post.title}</h3>
            <span className='text-gray-600 mb-4 block'><time>{post.date}</time> | {post.tags.map(tag => tag).join(', ')}</span>
            <p>
                {post.description}
            </p>
        </article>
        </Link>
    );
}
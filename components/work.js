import Image from "next/image";
import Link from "next/link";

export default function Work({item}) {
    return (
        <article className='flex flex-col md:flex-row items-center border-b-2 py-6'>
            <div className='w-full md:w-1/3 mb-3 md:mr-6'>
                <Image src={item.image} className='rounded-lg' layout="responsive" width={500} height={335} />
            </div>
            <div>
                <h3 className='text-2xl mb-2 font-medium'>{item.title}</h3>
                <span className='text-gray-600 my-4 block'>
                    <time className='px-2 py-1.5 mt-4 mr-4 rounded-xl border-solid border-myblue-100 border-2'>
                        {item.year}
                    </time>
                    Kategorie: {item.category}
                </span>
                <p>{item.description}</p>
                <button className='bg-myblue-100 text-white px-5 py-1.5 mt-4 rounded drop-shadow-md hover:drop-shadow-xl duration-700 hover:scale-110'>
                    <Link href={`${item.link}`}>
                        <a target="_blank">Show me</a></Link>
                </button>
            </div>
        </article>
    );
}


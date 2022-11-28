import Image from "next/image";
import Link from "next/link";

export default function IntroHeader() {
    return (
        <header className='px-6 py-14'>
            <div className='max-w-4xl mx-auto flex gap-14 items-center flex-col-reverse md:flex-row drop-shadow-md hover:drop-shadow-xl'>
                <div>
                    <h1 className='text-3xl font-bold mb-6'>Ich bin Christopher, <br />Web Developer</h1>
                    <p className='text-lg mb-6'>Du brauchst eine Landing Page, Portfolio-Seite, einen Blog? <br />
                    Du brauchst Wordpress-Unterstützung, oder möchtest eine Website in html und css gebaut haben? <br />
                    Oder Du möchtest Dein Projekt performant in React umgesetzt haben?</p>
                    <Link href='/work'>
                        <a className='inline-block bg-sky-500 text-white px-6 py-3 text-lg rounded drop-shadow-md hover:drop-shadow-xl duration-700 hover:scale-110'>Check my work</a>
                    </Link>


                </div>
                <span className='m-5 inline-block before:w-full before:aspect-square before:block before:absolute before:-left-1.5 before:top-1.5 before:bg-myblue-100 relative before:block before:absolute before:bg-sky-500 relative z-0 before:rounded-full'>
                    <Image src='/chris_portrait.svg'
                           width='240'
                           height='240'
                           alt='Image of Chris'
                           className='z-10 relative rounded-full'
                    />
                </span>
            </div>
        </header>
    )
}

import Head from 'next/head'
import Work from "../components/work";
import {getAllWork} from "../lib/api";

export async function getStaticProps() {
    const work = getAllWork();

    return {
        props: {
            work,
        },
    };
}

export default function WorkPage({work}) {
    return (
        <div>
            <Head>
                <title>Christopher Neis - Meine Arbeit</title>
                <meta name="description" content="Übersicht über meine letzten Projekte" />
                <meta name="robots" content="index, follow>" />
                <meta name="viewport" content='width=device-width,initial-scale=1' />
                <meta charSet='UTF-8' />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className='px-6'>
                <div className='max-w-4xl mx-auto'>
                    <h1 className='text-3xl font-bold mb-6 p-4'>Work</h1>
                    {work.map((workItem) => (
                        <Work key={workItem.title} item={workItem} />
                    ))}
                </div>
            </section>
        </div>
    )
}

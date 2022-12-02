import Head from 'next/head'
import Form from '../components/form'
import Banner from '../components/banner'



export default function Contact() {
    return (
        <div>
            <Head>
                <title>Christopher Neis - Developer Skills und Kontakt</title>
                <meta name="description" content="Schau Dir an, welche IT-Skills ich anbiete, und nimm Kontakt mit mir auf, wenn Du ein Projekt für mich hast." />
                <meta name="robots" content="index, follow>" />
                <meta name="viewport" content='width=device-width,initial-scale=1' />
                <meta charSet='UTF-8' />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className='px-6'>
                <div className='max-w-4xl mx-auto'>
                    <h1 className='text-3xl font-bold mb-6 p-4'>Kontakt</h1>
                <Form />
                <Banner />
            
                </div>
            </section>
        </div>
    )
}

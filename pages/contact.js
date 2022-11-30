import Head from 'next/head'
import Form from '../components/form'
import Banner from '../components/banner'


export default function Contact() {
    return (
        <div>
            <Head>
                <title>Kontakt</title>
                <meta name="description" content="Kontakt" />
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

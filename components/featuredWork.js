import SectionHeader from "./sectionHeader";
import Work from "./work";

export default function FeaturedWork({work}) {
    return (
        <section className='px-6'>
            <div className='max-w-4xl mx-auto py-12'>
                <SectionHeader title='Aktuelle Projekte' href='/work' color="text-black" />
                <div className='flex flex-col gap-2'>
                    <Work item={work[0]}/>
                    <Work item={work[1]}/>
                </div>
            </div>
        </section>
    )
}

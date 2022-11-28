export default function SectionHeader({title, href, color = 'text-sky-500'}) {
    return (
        <div className='flex justify-between items-center mb-8'>
            <h2 className='text-2xl font-bold'>{title}</h2>
            <a className={ `${color} font-semibold  hover:underline`} href={href}>
                Zeige alle
            </a>
        </div>
    );
}



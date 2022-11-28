import Link from "next/link";


export default function Header() {
   
    const routes = ['Blog', 'Work', 'Contact'];

    return (
        <header className='container mx-auto flex justify-between h-24 items-center px-6 md:px-0'>
            <Link href='/'>
                <img src="/logo.png" width="32" height="32" alt="logo" className="cursor-pointer hover:scale-105 duration-700"/>
            </Link>
            <nav>
                <ul className='flex gap-6 font-medium'>
                

                {routes.map(route => {
                        return (
                            <li key={route} className={`hover:underline `}>
                                <Link href={`/${route.toLowerCase()}`}>{route}</Link>
                            </li>
                        )
                })}

                </ul>
            </nav>
        </header>
    )
}

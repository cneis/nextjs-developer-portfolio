import Link from "next/link";
import Image from 'next/image#'

export default function Header() {
   
    const routes = ['Blog', 'Work', 'Contact'];

    return (
        <header className='container mx-auto flex justify-between h-24 items-center px-6 md:px-0'>
            <Link href='/'>
                
                <Image 
                    src="/logo.png" 
                    width="32" 
                    height="32" 
                    alt="logo" 
                    
                    className="cursor-pointer hover:scale-105 duration-700 rounded-md"/>
                
            </Link>
            <nav>
                <ul className='flex gap-6'>
                

                {routes.map(route => {
                        return (
                            <li key={route} className={`hover:underline`}>
                                <Link href={`/${route.toLowerCase()}`}><span className="cursor-pointer font-medium">{route}</span></Link>
                            </li>
                        )
                })}

                </ul>
            </nav>
        </header>
    )
}

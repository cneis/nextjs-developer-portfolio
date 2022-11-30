import Image from "next/image";


export default function Banner() {
    return (
        <header>
            <div className='slider-container'>
                <div className="slider-track">
                    {/* erste */}
                    <div className="slide">
                        <Image src="/logos/flowbitelogo.jpg" height='100px' width='250px' alt='logo'/>
                    </div>
                    <div className="slide">
                        <Image src="/logos/github.png" height='100px' width='150px' alt='logo' />
                    </div>
                    <div className="slide">
                        <Image src="/logos/sql.svg" height='100px' width='250px' alt='logo' />
                    </div>
                    <div className="slide">
                        <Image src="/logos/react.svg" height='100px' width='250px' alt='logo' />
                    </div>
                    <div className="slide">
                        <Image src="/logos/CSS3_logo.svg" height='100px' width='250px' alt='logo' />
                    </div>
                    <div className="slide">
                        <Image src="/logos/html_logo.svg" height='100px' width='250px' alt='logo' />
                    </div>
                    <div className="slide">
                        <Image src="/logos/mongodb.png" height='100px' width='150px' alt='logo' />
                    </div>
                    <div className="slide">
                        <Image src="/logos/sanity_logo.svg" height='100px' width='250px' alt='logo' />
                    </div>
                    <div className="slide">
                        <Image src="/logos/next_logo.svg" height='100px' width='250px' alt='logo' />
                    </div>
                    {/* erste */}
                    <div className="slide">
                        <Image src="/logos/flowbitelogo.jpg" height='100px' width='250px' alt='logo'/>
                    </div>
                    <div className="slide">
                        <Image src="/logos/github.png" height='100px' width='150px' alt='logo' />
                    </div>
                    <div className="slide">
                        <Image src="/logos/sql.svg" height='100px' width='250px' alt='logo' />
                    </div>
                    <div className="slide">
                        <Image src="/logos/react.svg" height='100px' width='250px' alt='logo' />
                    </div>
                    <div className="slide">
                        <Image src="/logos/CSS3_logo.svg" height='100px' width='250px' alt='logo' />
                    </div>
                    <div className="slide">
                        <Image src="/logos/html_logo.svg" height='100px' width='250px' alt='logo' />
                    </div>
                    <div className="slide">
                        <Image src="/logos/mongodb.png" height='100px' width='150px' alt='logo' />
                    </div>
                    <div className="slide">
                        <Image src="/logos/sanity_logo.svg" height='100px' width='250px' alt='logo' />
                    </div>
                    <div className="slide">
                        <Image src="/logos/next_logo.svg" height='100px' width='250px' alt='logo' />
                    </div>
                </div>
               
            </div>
        </header>
    )
}

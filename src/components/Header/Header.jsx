import React, { useState } from 'react'
import Nav from './Navbar/Nav'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

function Header() {
    let [open, setOpen] = useState(false)
    let pages = [
        { id: 1, name: 'Home', link: '/home' },
        { id: 3, name: 'Deals', link: '/deals' },
        { id: 4, name: 'Copuns', link: '/copuns' },
        { id: 2, name: 'About', link: '/about' },
        { id: 5, name: 'Contact us', link: '/contact' }
    ];
    return (
        <nav>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {
                    open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>
                }
            </div>
            <ul className={`md:flex bg-slate-500 justify-center absolute duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]'}`}>
                {
                    pages.map(page => <Nav
                        key={page.id}
                        page={page}
                    ></Nav>)    
                }
            </ul>
        </nav>
    )
}

export default Header
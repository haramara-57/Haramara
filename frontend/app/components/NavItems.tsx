import React from 'react'
import { Link, NavLink } from 'react-router'
import { sidebarItems } from '~/constants'
import { cn } from '~/lib/utils'

const NavItems = () => 
    {
        const user = {
            name: 'haramara user',
            email:'contact@haramara.com',
            imageUrl: '/assets/images/david.webp'
    }
  return (
    <section className='nav-items'>
        <Link to='/' className="link-logo">
        <img src="/assets/icons/logo.svg" alt="logo" className="size-[30px]" />
        <h1>HARAMARA</h1>
        </Link>

        <div className='container'>
            <nav>
                {sidebarItems.map(({id, href, icon, label}) => (
                    <div>
                        <NavLink to={href} key={id}>
                            {({isActive} : {isActive: boolean}) => (
                                <div className={cn('group nav-item', {
                                    'bg-primary-100 !text-white' : isActive
                                })}>
                                    <img 
                                    src={icon}
                                    alt={label}
                                    className={`group-hover:brightness-0 size-0 group-hover:invert ${isActive ? 'brightness-0 invert' : 'text-dark-200'}`}
                                    />
                                    {label}
                                </div>
                            )}
                        </NavLink>
                    </div>
                ))}
            </nav>
            <footer className='nav-footer'>
                <img src={user?.imageUrl || '/assets/images/david.webp'} alt={user?.name || 'Hamara'} />
                <article>
                    <h2>{user?.name || 'Hamara user'}</h2>
                    <h2>{user?.email || 'hamaraemail@gmail.com' }'</h2>
                </article>
                <button onClick={() => {
                    console.log('logout')
                }} className='cursor-pointer'></button>
            </footer>
        </div>
    </section>
  )
}

export default NavItems
import logoImage from '@/assets/logo.png';
import Image from 'next/image';
import classes from './header.module.css';
import HeaderBg from './header-bg';
import NavLink from './nav-link';
import Link from 'next/link';

export default function Header() {

  return <header className={classes.header}>
        <HeaderBg />
        <Link href="/" className={classes.logo}>
            <Image 
                src={logoImage.src} 
                alt="NextLevel Food Logo" 
                width={logoImage.width} 
                height={logoImage.height} 
                priority />
            <span>NextLevel Food</span>
        </Link>
        <nav className={classes.nav}>
            <menu className={classes.menu}>
              <li>
                <NavLink href="/meals">Browse Meals</NavLink>
              </li>
              <li>
                <NavLink href="/meals/share">Share Meal</NavLink>
              </li>
              <li>
                <NavLink href="/community">Foodies Community</NavLink>
              </li>
            </menu>
        </nav>
    </header>;
}

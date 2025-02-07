import Link from 'next/link';
import logoImage from '@/assets/logo.png';
import Image from 'next/image';
import classes from './header.module.css';
import HeaderBg from './header-bg';

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
                <Link href="/meals">Browse Meals</Link>
              </li>
              <li>
                <Link href="/meals/share">Share Meal</Link>
              </li>
              <li>
                <Link href="/community">Foodies Community</Link>
              </li>
            </menu>
        </nav>
    </header>;
}

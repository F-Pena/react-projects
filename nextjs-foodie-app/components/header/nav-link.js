'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './nav-link.module.css';

export default function NavLink({ href, children }) {
    const pathname = usePathname();
  return (
    <Link href={href} className={`${classes.link} ${pathname === href ? classes.active : ''}`}>
      {children }
    </Link>
  );
}




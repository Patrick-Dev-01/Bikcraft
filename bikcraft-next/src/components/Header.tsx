import styles from '../styles/components/Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import bikcraftLogo from '../../public/bikcraft.svg';

export default function Header({}){
    const route = useRouter();
    
    return(
        <header className={styles.header}>
            <div className={styles.logo_header}>
                <Link href="/"><a><Image src={bikcraftLogo} alt="Bikcraft"/></a></Link>
            </div>

            <nav className={styles.menu}>
                <ul>
                    <li><Link href="/about"><a className={`${route.pathname === '/about' ? styles.active : ''}`}>Sobre</a></Link></li>
                    <li><Link href="/products"><a className={`${route.pathname === '/products' ? styles.active : ''}`}>Produtos</a></Link></li>
                    <li><Link href="/portfolio"><a className={`${route.pathname === '/portfolio' ? styles.active : ''}`}>Portfólio</a></Link></li>
                    <li><Link href="/contact"><a className={`${route.pathname === '/contact' ? styles.active : ''}`}>Contato</a></Link></li>
                </ul>
            </nav>
        </header>
    )
}
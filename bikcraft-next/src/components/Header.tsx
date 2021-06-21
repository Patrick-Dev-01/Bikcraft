import styles from '../styles/components/Header.module.css';
import Image from 'next/image';
import Link from 'next/link';

import bikcraftLogo from '../../public/bikcraft.svg';

export default function Header(){

    return(
        <header className={styles.header}>
            <div className={styles.logo_header}>
                <Link href="/"><a><Image src={bikcraftLogo} alt="Bikcraft"/></a></Link>
            </div>

            <nav className={styles.menu}>
                <ul>
                    <li className={styles.about ? styles.active : ''}><Link href="/about">Sobre</Link></li>
                    <li><Link href="/products">Produtos</Link></li>
                    <li><Link href="/portfolio">Portfólio</Link></li>
                    <li><Link href="/contato">Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}
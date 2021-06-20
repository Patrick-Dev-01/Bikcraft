import styles from '../styles/components/Header.module.css';
import Image from 'next/image';

import bikcraftLogo from '../../public/bikcraft.svg';

export default function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.logo_header}>
                <Image src={bikcraftLogo} alt="Bikcraft"/>
            </div>

            <nav className={styles.menu}>
                <ul>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Portfólio</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}
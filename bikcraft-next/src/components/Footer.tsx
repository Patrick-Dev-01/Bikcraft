import styles from '../styles/components/Footer.module.css';
import Image from 'next/image';

import facebook from '../../public/redes-sociais/facebook.svg';
import instagram from '../../public/redes-sociais/instagram.svg';
import twitter from '../../public/redes-sociais/twitter.svg';

export default function Footer(){
    return(
        <>
            <section className={styles.break}>
                <blockquote className={styles.blockquote}>
                <p>&quot;o verdadeiro segredo da felicidade está em ter um genuíno 
                    interesse por todos os detalhes da vida contidiana.&quot;</p>

                <cite>William Morris</cite>
                </blockquote>
            </section>

            <footer>
                <div className={styles.footer}>
                    <div className={styles.history}>
                        <h3>Nossa história</h3>
                        <p>o verdadeiro segredo da felicidade está em ter um genuíno 
                        interesse por todos os detalhes da vida cotidiana. interesse por todos os detalhes da vida cotidiana.</p>
                    </div>

                    <div className={styles.contact}>
                        <h3>contato</h3>
                        <ul>
                            <li>- (11) 9999-9999</li>
                            <li>- contato@bikcraft.com</li>
                            <li>- São Paulo - SP</li>
                        </ul>
                    </div>

                    <div className={styles.social_media}>
                        <h3>redes sociais</h3>
                        <ul>
                            <li><a href="#"><Image src={facebook} alt="Facebook"/></a></li>
                            <li><a href="#"><Image src={instagram} alt="Instagram"/></a></li>
                            <li><a href="#"><Image src={twitter} alt="Twitter"/></a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.rightsReserved}>
                    <p>Bikcraft 2021 - Alguns Direitos Reservados</p>
                </div>
            </footer>
      </>
    )
}
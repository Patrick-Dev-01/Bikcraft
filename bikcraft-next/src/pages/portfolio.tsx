import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Portfolio.module.css';
import Image from 'next/image';

import passeioBike from '../../public/portfolio/passeio.jpg';
import esporteBike from '../../public/portfolio/esporte.jpg';
import retroBike from '../../public/portfolio/retro.jpg';

export default function Portfolio(){

    return(
        <div>
            <Head>
                <meta http-Equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Bikcraft - Portfólio</title>
            </Head>

            <Header />

            <section className={styles.portfolio_introduction}>
                <h1>Portfólio</h1>
                <p>conheça mais o nosso portfólio</p>
            </section>

            <section className={styles.portfolio_blockquote}>
                <blockquote>
                    &quot;No mundo atual, a continua expansão de nossa 
                    atividade cumpre um papel essencial na formulação da gestão inovadora da qual fazemos parte.&quot; 

                    <cite>Barbara Moss</cite>  
                </blockquote>
            </section>

            <section className={styles.portfolio}>
                <ul>
                    <li className={styles.passeio}><Image src={passeioBike} alt="Passeio"/></li>
                    <li className={styles.retro}><Image src={retroBike} alt="Retro" /></li>
                    <li className={styles.esporte}><Image src={esporteBike} alt="Esporte"/></li>
                </ul>
            </section>

            <Footer />
        </div>
    )
}
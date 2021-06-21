import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/About.module.css';
import Image from 'next/image';

import bikcraftQualidade from '../../public/bikcraft-qualidade.svg';
import equipeBikcraft from '../../public/equipe-bikcraft.jpg';

export default function About(){
    return(
        <div>
            <Head>
                <meta http-Equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Bikcraft - Sobre</title>
            </Head>

            <Header />

            <section className={styles.about_introduction}>
                <h1>Sobre</h1>
                <p>conheça mais sobre a bikcraft</p>
            </section>

            <section className={styles.about_mission}>

                <div className={styles.about_history}>
                    <h2>História, Missão e Visão</h2>

                    <p>O verdadeiro segredo da felicidade está em ter um genuíno 
                    interesse por todos os detalhes da vida cotidiana. Interesse por todos os detalhes da vida cotidiana.</p>

                    <p>O verdadeiro segredo da felicidade está em ter um genuíno 
                    interesse por todos os detalhes da vida cotidiana. Interesse por todos os detalhes da vida cotidiana.</p>
                </div>

                <div className={styles.about_values}>
                    <h2>Valores</h2>

                    <ul>
                        <li>- Qualidade no processo com</li>
                        <li>- Foco no cliente sem perder a </li>
                        <li>- Diversão, preservando a </li>
                        <li>- Natureza com sustentabilidade</li>
                    </ul>
                </div>

                <div>
                    <Image src={equipeBikcraft} alt="Equipe Bikcraft"/>
                </div>
            </section>

            <section className={styles.quality}>
                <h2>Qualidade</h2>
                <div>
                    <Image src={bikcraftQualidade} alt="Qualidade" />
                </div>
                <ul>
                    <li>
                        <h3>Durabilidade</h3>
                        <p>O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem</p>
                    </li>
                    <li>
                        <h3>Design</h3>
                        <p>O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem</p>
                    </li>
                    <li>
                        <h3>Sustentabilidade</h3>
                        <p>O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem</p>
                    </li>
                </ul>
            </section>

            <Footer />
        </div>
    )
}
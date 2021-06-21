import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Products.module.css';
import Image from 'next/image';

import passeio_1 from '../../public/produtos/bikcraft-passeio-1.jpg';
import passeio_2 from '../../public/produtos/bikcraft-passeio-2.jpg';
import esporte_1 from '../../public/produtos/bikcraft-esporte-1.jpg';
import esporte_2 from '../../public/produtos/bikcraft-esporte-2.jpg';
import retro_1 from '../../public/produtos/bikcraft-retro-1.jpg';
import retro_2 from '../../public/produtos/bikcraft-retro-2.jpg';
import passeio from '../../public/produtos/passeio.svg';
import esporte from '../../public/produtos/esporte.svg';  
import retro from '../../public/produtos/retro.svg';  

export default function Products(){
    return(
        <div>
            <Head>
                <meta http-Equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Bikcraft - Produtos</title>
            </Head>

            <Header />

            <section className={styles.products_introduction}>
                <h1>Produtos</h1>
                <p>conheça todos os nossos produtos</p>
            </section>

            <section className={styles.products}>
                <div className={styles.products_container}>
                    <div className={styles.product_item}>
                        <div className={styles.image}>
                            <h1>Passeio</h1>
                            <Image src={passeio_1} alt="Passeio"/>
                        </div>
                        <div className={styles.icon}>
                            <div>
                                <Image src={passeio} alt="Passeio"/>
                            </div>
                        </div>
                        <div className={styles.bike}>
                            <Image src={passeio_2} alt="Passeio"/>
                        </div>
                        <div className={styles.description}>
                            <p>O Verdadeiro Segredo Da Felicidade Está Em Ter Um Genuíno Interesse Por Todos Os Detalhes Da Vida Cotidiana. 
                            Interesse Por Todos Os Detalhes Da Vida Cotidiana.</p>

                            <ul>
                                <li>conforto</li>
                                <li>velocidade</li>
                                <li>design</li>
                                <li>versatilidade</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.product_item}>
                        <div className={styles.image}>
                            <h1>Esporte</h1>
                            <Image src={esporte_1} alt="Esporte"/>
                        </div>
                        <div className={styles.icon}>
                            <div>
                                <Image src={esporte} alt="Esporte"/>
                            </div>
                        </div>
                        <div className={styles.bike}>
                            <Image src={esporte_2} alt="Esporte"/>
                        </div>
                        <div className={styles.description}>
                            <p>O Verdadeiro Segredo Da Felicidade Está Em Ter Um Genuíno Interesse Por Todos Os Detalhes Da Vida Cotidiana. 
                            Interesse Por Todos Os Detalhes Da Vida Cotidiana.</p>

                            <ul>
                                <li>conforto</li>
                                <li>velocidade</li>
                                <li>design</li>
                                <li>versatilidade</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.product_item}>
                        <div className={styles.image}>
                            <h1>retro</h1>
                            <Image src={retro_1} alt="Retro"/>
                        </div>
                        <div className={styles.icon}>
                            <div>
                                <Image src={retro} alt="Retro"/>
                            </div>
                        </div>
                        <div className={styles.bike}>
                            <Image src={retro_2} alt="Retro"/>
                        </div>
                        <div className={styles.description}>
                            <p>O Verdadeiro Segredo Da Felicidade Está Em Ter Um Genuíno Interesse Por Todos Os Detalhes Da Vida Cotidiana. 
                            Interesse Por Todos Os Detalhes Da Vida Cotidiana.</p>

                            <ul>
                                <li>conforto</li>
                                <li>velocidade</li>
                                <li>design</li>
                                <li>versatilidade</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
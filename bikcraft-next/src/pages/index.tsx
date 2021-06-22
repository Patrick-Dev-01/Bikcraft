import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

import passeio from '../../public/produtos/passeio.svg';
import esporte from '../../public/produtos/esporte.svg';  
import retro from '../../public/produtos/retro.svg';  
import passeioBike from '../../public/portfolio/passeio.jpg';
import esporteBike from '../../public/portfolio/esporte.jpg';
import retroBike from '../../public/portfolio/retro.jpg';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta http-Equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bikcraft</title>
      </Head>

      <Header />

      <section className={styles.introduction}>
        <h1>Bicletas feitas a mão</h1>
        <blockquote className={styles.blockquote}>
          
          <p>&quot;não tenha nada em sua casa que você não considere útil ou acredita ser bonito.&quot;</p>

          <cite>William Morris</cite>
        </blockquote>

        <button type="button" className={styles.buttonBudget}>Orçamento</button>
      </section>

      <section className={styles.products}>
        <h2>Produtos</h2>
        <ul className={styles.products_list}>
          <li>
            <div  className={styles.product_image}>
              <Image src={passeio} alt="Bikcraft Passeio"/>
            </div>
            <div className={styles.product_description}>
              <h2>Passeio</h2>
              <p>O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O</p>
            </div>
          </li>

          <li>
            <div className={styles.product_image}>
              <Image src={esporte} alt="Bikcraft Esporte"/>
            </div>
            <div className={styles.product_description}>
              <h2>Esporte</h2>
              <p>O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O</p>
            </div>
          </li>

          <li>
            <div className={styles.product_image}>
              <Image src={retro} alt="Bikcraft Retro"/>
            </div>
            <div className={styles.product_description}>
              <h2>Retro</h2>
              <p>O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O</p>
            </div>
          </li>
        </ul>

        <h3>clique aqui e veja os detalhes dos produtos</h3>
        <button type="button" className={styles.productButton}>Produtos</button>
      </section>

      <section className={styles.portfolio}>
        <h2>Portfólio</h2>
        <ul>
          <li className={styles.passeio}><Image src={passeioBike} alt="Passeio"/></li>
          <li className={styles.retro}><Image src={retroBike} alt="Retro" /></li>
          <li className={styles.esporte}><Image src={esporteBike} alt="Esporte"/></li>
        </ul>

        <h3>conheça mais o nosso portfólio</h3>
        <button type="button" className={styles.portfolioButton}>Portfólio</button>
      </section>

      <section className={styles.quality}>
        <h2>Qualidade</h2>

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

        <h4>conheça mais sobre a história da bikcraft</h4>
        <button type="button" className={styles.aboutButton}>Sobre</button>
      </section>

      <Footer />
    </div>
  )
}

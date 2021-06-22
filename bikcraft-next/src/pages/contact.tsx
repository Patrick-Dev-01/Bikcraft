import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Contact.module.css';
import Image from 'next/image';

import mapa from '../../public/endereco-bikcraft.jpg';
import facebook from '../../public/redes-sociais/facebook.svg';
import instagram from '../../public/redes-sociais/instagram.svg';
import twitter from '../../public/redes-sociais/twitter.svg';

export default function Contact(){
    return(
        <div>
            <Head>
                <meta http-Equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Bikcraft - Contato</title>
            </Head>

            <Header />

            <section className={styles.contact_introduction}>
                <h1>Contato</h1>
                <p>tire suas dúvidas com a gente</p>
            </section>

            <section className={styles.contact_form}>
                <form action="" className={styles.form}>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" />
                    <label htmlFor="email">E-mail</label>
                    <input type="text" />
                    <label htmlFor="telefone">Telefone</label>
                    <input type="text" />
                    <label htmlFor="mensagem">Especificações</label>
                    <textarea name="" id=""></textarea>

                    <button type="submit">Enviar</button>
                </form>

                <div className={styles.contact_data}>
                    <h3>Dados</h3>
                    <span>+55 11 99999-9999</span>
                    <span>orcamento@bikcraft.com</span>
                    <span>Rua Ali perto - São Paulo</span>
                    <span>São Paulo - SP - Brasil</span>

                    <h3>Redes Sociais</h3>
                    <ul>
                        <li><Image src={facebook} alt="Facebook"/></li>
                        <li><Image src={instagram} alt="Instagram"/></li>
                        <li><Image src={twitter} alt="Twitter"/></li>
                    </ul>
                </div>

                <div className={styles.address}>
                    <Image src={mapa} alt="Bikcraft endereço"/>
                </div>
            </section>

            <Footer />
        </div>
    )
}
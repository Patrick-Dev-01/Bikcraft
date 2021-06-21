import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Portfolio.module.css';
import Image from 'next/image';
import { useRef, useState } from 'react';

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
                <h1>Produtos</h1>
                <p>conheça todos os nossos produtos</p>
            </section>
        </div>
    )
}
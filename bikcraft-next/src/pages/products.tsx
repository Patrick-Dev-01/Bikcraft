import Head from 'next/head';
import { useCallback, useRef } from 'react';
import { Success } from '../shared/Success';

import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Products.module.css';
import Image from 'next/image';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as yup from 'yup';
import api from '../services/api';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import useModal from '../hooks/useModal';

import passeio_1 from '../../public/produtos/bikcraft-passeio-1.jpg';
import passeio_2 from '../../public/produtos/bikcraft-passeio-2.jpg';
import esporte_1 from '../../public/produtos/bikcraft-esporte-1.jpg';
import esporte_2 from '../../public/produtos/bikcraft-esporte-2.jpg';
import retro_1 from '../../public/produtos/bikcraft-retro-1.jpg';
import retro_2 from '../../public/produtos/bikcraft-retro-2.jpg';
import passeio from '../../public/produtos/passeio.svg';
import esporte from '../../public/produtos/esporte.svg';  
import retro from '../../public/produtos/retro.svg';  

interface FormData{
    name: string;
    email: string;
    phone: string;
    specifications: string;
}

export default function Products(){
    const { showModal } = useModal();
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data: FormData) => {
        try{
            const schema = yup.object().shape({
                name: yup.string().required('O Nome é obrigatório'),
                email: yup.string()
                .email('Digite um E-mail válido')
                .required('O E-mail é obrigatório'),

                phone: yup.string().required('O Telefone é obrigatório').matches(/^[0-9]*$/, 'Digite apenas números')
                .min(11, 'O Telefone precisa ter 11 digitos')
                .max(11, 'O Telefone precisa ter 11 digitos'),

                specifications: yup.string().required('Descreva as especificações da sua Bikcraft')
            })

            await schema.validate(data, {
                abortEarly: false
            })

            formRef.current?.setErrors({})
            formRef.current?.reset();

            await api.post(`/budget`, data).then(response => {
                showModal('success')
            }).catch(err => {
                showModal('error')
            });

        } catch (err) {
            if(err instanceof yup.ValidationError){
                let errorMessages = {};

                err.inner.forEach(error => {
                    errorMessages[error.path] = error.message;
                })

                formRef.current?.setErrors(errorMessages)
            }
        }
    }, [showModal])

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
                <Success />
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

            <section className={styles.budget}>
                <h2>Orçamento</h2>
                <div className={styles.budget_form}>
                    <Form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
                        <label htmlFor="nome">Nome</label>
                        <Input name="name"/>
                        <label htmlFor="email">E-mail</label>
                        <Input name="email"/>
                        <label htmlFor="telefone">Telefone</label>
                        <Input name="phone"/>
                        <label htmlFor="orcamento">Especificações</label>
                        <Textarea name="specifications"/>

                        <button type="submit">Enviar</button>
                    </Form>

                    <div className={styles.budget_data}>
                        <h3>Dados</h3>
                        <span>+55 11 99999-9999</span>
                        <span>orcamento@bikcraft.com</span>

                        <h3>Monte sua Bikcraft</h3>
                        <p>Determine as especificações</p>

                        <ul>
                            <li>- Cores</li>
                            <li>- Estilo</li>
                            <li>- Medidas</li>
                            <li>- Acessórios</li>
                            <li>- E Outros</li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
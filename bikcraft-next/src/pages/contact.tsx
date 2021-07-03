import Head from 'next/head';
import { useCallback, useRef } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input';
import styles from '../styles/Contact.module.css';
import Image from 'next/image';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as yup from 'yup';
import api from '../services/api';
import useModal from '../hooks/useModal';
import Textarea from '../components/Textarea';

import mapa from '../../public/endereco-bikcraft.jpg';
import facebook from '../../public/redes-sociais/facebook.svg';
import instagram from '../../public/redes-sociais/instagram.svg';
import twitter from '../../public/redes-sociais/twitter.svg';

interface FormData{
    name: string;
    email: string;
    phone: string;
    message: string;
}

export default function Contact(){

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

                message: yup.string().required('Descreva a sua dúvida')
            })

            await schema.validate(data, {
                abortEarly: false
            })

            formRef.current?.setErrors({})
            
            await api.post(`/doubt`, data).then(response => {
                showModal('success')
                formRef.current?.reset();
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
                <title>Bikcraft - Contato</title>
            </Head>

            <Header />

            <section className={styles.contact_introduction}>
                <h1>Contato</h1>
                <p>tire suas dúvidas com a gente</p>
            </section>

            <section className={styles.contact_form}>
                <Form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
                    <label htmlFor="nome">Nome</label>
                    <Input name="name" />
                    <label htmlFor="email">E-mail</label>
                    <Input name="email" />
                    <label htmlFor="telefone">Telefone</label>
                    <Input name="phone" />
                    <label htmlFor="mensagem">Mensagem</label>
                    <Textarea name="message" />

                    <button type="submit">Enviar</button>
                </Form>

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
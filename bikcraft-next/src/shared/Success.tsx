import styles from '../styles/components/Modal.module.css';

export function Success(){
    return(
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h1>Sucesso!</h1>
                <p>Seu orçamento foi enviado para nossa equipe e em breve entraremos em contato para mais informações </p>
            </div>
        </div>
    )
}
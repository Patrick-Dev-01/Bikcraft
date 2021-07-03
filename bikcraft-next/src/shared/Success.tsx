import useModal from '../hooks/useModal';
import styles from '../styles/components/Modal.module.css';

export function Success(){
    const { openModal } = useModal();

    return(
        <div className={styles.overlay} style={{ display: `${openModal ? 'block' : 'none'}`}}>
            <div className={`${styles.modal} ${styles.success}`}>
                <h1>Sucesso!</h1>
                <p>Seus dados foram enviados para nossa equipe e em breve entraremos em contato para mais informações.</p>

                <div className={styles.progressbarSuccess}></div>
            </div>
        </div>
    )
}
import useModal from '../hooks/useModal';
import styles from '../styles/components/Modal.module.css';

export function Error(){
    const { openModal } = useModal();
    
    return(
        <div className={styles.overlay} style={{ display: `${openModal ? 'block' : 'none'}`}}>
            <div className={`${styles.modal} ${styles.error}`}>
                <h1>Erro no envio</h1>
                <p>Um erro inesperado ocorreu ao enviar os dados, por favor tente novamente mais tarde.</p>

                <div className={`${styles.progressbarError}`}></div>
            </div>
        </div>
    )
}
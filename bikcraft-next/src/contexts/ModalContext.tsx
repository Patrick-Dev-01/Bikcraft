import { createContext, useState } from 'react';
import { Success } from '../shared/Success';
import { Error } from '../shared/Error';

interface ModalContextData{
    modalId: string;
    openModal: boolean;
    showModal: (id: string) => void;
    hideModal: () => void;
}

interface ModalProps{
    children: React.ReactNode;
}

export const ModalContext = createContext({} as ModalContextData)

export default function ModalProvider({ children }: ModalProps){
    const [modalId, setModalId] = useState<string>('');
    const [openModal, setOpenModal] = useState<boolean>(false);

    function showModal(id: string){
        setModalId(id);
        setOpenModal(true);

        setTimeout(() => {
            hideModal();
        }, 5000)
    }

    function hideModal(){
        setOpenModal(false)
    }

    return(
        <ModalContext.Provider value={{
            modalId,
            openModal,
            showModal,
            hideModal
        }}>
            
            { children }
            { openModal && (
                modalId === 'success' ? <Success /> :
                modalId === 'error' ? <Error /> :
                <></>
            )}
           
        </ModalContext.Provider>
    )
}
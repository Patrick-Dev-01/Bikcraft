import { createContext, useState } from 'react';
import { Success } from '../shared/Success';
import { Error } from '../shared/Error';

interface ModalContextData{
    modalId: string;
    showModal: (id: string) => void;
    closeModal: () => void;
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
    }

    function closeModal(){
        setOpenModal(false)
    }

    return(
        <ModalContext.Provider value={{
            modalId,
            showModal,
            closeModal,
        }}>
            
            { children }
            {/* { openModal && (
                modalId === 'success' ? <Success /> :
                modalId === 'error' ? <Error /> :
                <></>
            )} */}
           
        </ModalContext.Provider>
    )
}
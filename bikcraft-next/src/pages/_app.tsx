import type { AppProps } from 'next/app';
import '../styles/global.css';
import ModalProvider from '../contexts/ModalContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <Component {...pageProps}></Component>
    </ModalProvider>
  )
}
export default MyApp;

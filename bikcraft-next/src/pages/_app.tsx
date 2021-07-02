import type { AppProps } from 'next/app';
import '../styles/global.css';
import ModalProvider from '../contexts/modal';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <Component {...pageProps}></Component>
    </ModalProvider>
  )
}
export default MyApp;

import Document, { Html, Head, Main, NextScript } from 'next/document';

// Configurando o Document no Next

export default class MyDocument extends Document{
    render(){
        return(
            <Html>
                <Head>
                    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
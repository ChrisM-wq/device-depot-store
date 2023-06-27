import {createGlobalStyle} from "styled-components";
// import {CartContextProvider} from "@/components/CartContext";

import Head from 'next/head';
const GlobalStyles = createGlobalStyle`
  body{
    background-color: #eee;
    padding:0;
    margin:0;
    font-family: 'Poppins', sans-serif;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
        <Head>
        <title>Device Depot</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        </style>
      </Head>
      <GlobalStyles />
      {/* <CartContextProvider> */}
        <Component {...pageProps} />
      {/* </CartContextProvider> */}
    </>
  );
}
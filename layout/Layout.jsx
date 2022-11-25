import React from 'react'
import Head from 'next/head'
import NavbarCustom from '../components/NavbarCustom';


const layout = ({children}) => {
  return (
    <>
     <Head>
       <title> Mejichantas</title>
       <meta name="description" content="Generated by create next app" />
       <link rel="icon" href="/favicon.ico" />
     </Head>
     <NavbarCustom/>
     <main> {children}  </main>
      
      <footer>
        
      </footer>
    </>
  );
};

export default layout;
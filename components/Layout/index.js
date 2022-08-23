import React from 'react';
import Head from 'next/head';
import Menu from './Menu';
import Footer from './Footer';

const Layout = ({ children }) => {

    return (
<>
<Head>
      <title>Logistik Solutions</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
      />
      <link rel="icon" type="image" href="/img/favicon.png" />
    </Head>
    <Menu />
    { children }
    <Footer />
</>
    );
};

export default Layout;
import React from 'react';
import Header from './header';
import Footer from './footer';

import { FCR } from '../../util';

const MetaLayout: FCR = (props) => {
    return (
        <>
            <Header />
            <main className="font-Montserrat">{props.children}</main>
            <Footer />
        </>
    );
};

export default MetaLayout;

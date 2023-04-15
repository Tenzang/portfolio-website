import React from 'react';
import Header from './header';
import Footer from './footer';

import { FCR } from '../../util';

const MetaLayout: FCR = (props) => {
    return (
        <>
            <Header />
            <main className="font-Montserrat divide-y-2 divide-light-highlight/10 dark:divide-dark-highlight/10">
                {props.children}
            </main>
            <Footer />
        </>
    );
};

export default MetaLayout;

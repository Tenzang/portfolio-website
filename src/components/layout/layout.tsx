import React from 'react';
import Header from './header';
import Footer from './footer';

import type { FC } from '../../util';

const Layout: FC = ({ children }) => {
    return (
        <>
            <Header />
            <main
                id="main"
                tabIndex={-1}
                className="font-Montserrat divide-y-2 divide-light-highlight/10 dark:divide-dark-highlight/10"
            >
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;

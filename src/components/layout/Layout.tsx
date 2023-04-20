import React, { ReactChildren } from 'react';
import { Header, Footer } from '.';

interface LayoutProps {
    children: ReactChildren;
}

export default ({ children }: LayoutProps) => {
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

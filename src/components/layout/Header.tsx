import React from 'react';
import { Navbar } from '.';
import ContentSkipper from '../ContentSkipper';
import Floater from '../Floater';
import useSiteMetadata from '../../hooks/useSiteMetadata';

export default () => {
    const { social } = useSiteMetadata();

    return (
        <header className="mt-6 text-center flex flex-col">
            <ContentSkipper />
            <h1 className="uppercase text-5xl">Loden Gendun</h1>
            <h2 className="text-2xl mt-4 mb-6">Software Engineer</h2>
            <Navbar />
            <aside>
                <Floater {...social[0]} />
            </aside>
        </header>
    );
};

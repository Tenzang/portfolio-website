import React from 'react';
import { Navbar } from './navbar';
import ContentSkipper from '../contentskipper';

import { FC } from '../../util';
import Floater from '../floater/floater';
import useSiteMetadata from '../../hooks/useSiteMetadata';

const Header: FC = () => {
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

export default Header;

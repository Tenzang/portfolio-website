import React from 'react';
import { Navbar } from './navbar';

import { FC } from '../../util';

const Header: FC = () => {
    return (
        <header className="mt-6 text-center flex flex-col">
            <h1 className="uppercase text-5xl">Loden Gendun</h1>
            <h2 className="text-2xl mt-4 mb-6">Software Engineer</h2>
            <Navbar />
        </header>
    );
};

export default Header;

import React from 'react';

import { FC } from '../../util';
import { Link } from 'gatsby';

const Footer: FC = () => {
    const RADIUS = '30px';
    return (
        <footer className="p-1 rounded-t-3xl text-center bg-light-secondary dark:bg-dark-secondary">
            Built with{' '}
            <Link to="https://www.gatsbyjs.org" className="underline">
                Gatsby
            </Link>{' '}
            ,{' '}
            <Link to="https://www.typescriptlang.org" className="underline">
                Typescript
            </Link>{' '}
            &{' '}
            <Link to="https://www.tailwindcss.com" className="underline">
                TailwindCSS
            </Link>{' '}
            <span className="text-sm">({new Intl.DateTimeFormat('en-US').format(new Date())})</span>
        </footer>
    );
};

export default Footer;

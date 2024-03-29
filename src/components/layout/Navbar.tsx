import React from 'react';
import { Link } from 'gatsby';

interface LinkType {
    name: string;
    url: string;
    target?: string;
}

export default () => {
    const links: LinkType[] = [
        {
            name: 'About',
            url: '#about'
        },
        {
            name: 'Skills',
            url: '#skills'
        },
        {
            name: 'Projects',
            url: '#projects'
        },
        {
            name: 'Contact',
            url: '#contact'
        },
        {
            name: 'Resume',
            url: '/resume.pdf',
            target: '_blank'
        }
    ];

    return (
        <nav
            className="sm:bg-light-secondary sm:dark:bg-dark-secondary rounded-t-2xl"
            aria-label="Navigation Menu"
        >
            <ul className="flex justify-evenly" aria-label="Page Sections">
                {links.map((link, i) => {
                    return (
                        <li
                            key={i}
                            className="flex flex-auto bg-light-secondary hover:bg-light-highlight dark:hover:bg-dark-highlight sm:bg-transparent first:rounded-tl-2xl last:rounded-tr-2xl"
                        >
                            <Link
                                className="text-sm sm:text-lg flex-1 py-2 uppercase  focus-visible:bg-light-highlight dark:focus-visible:bg-dark-highlight hover:text-light-primary focus-visible:text-light-primary dark:hover:text-dark-primary dark:focus-visible:text-dark-primary transition"
                                to={link.url}
                                target={link.target || '_self'}
                            >
                                {link.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

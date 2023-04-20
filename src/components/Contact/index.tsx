import React from 'react';

import { FC } from '../../util';
import { Link as LinkType } from '../../hooks/useSiteMetadata';
import { Link } from 'gatsby';

interface ContactProps {
    social: LinkType[];
}

const Contact: FC<ContactProps> = ({ social }) => {
    return (
        <div className="text-center flex flex-col gap-6">
            <p>You can find me at:</p>
            <ul aria-label="Social links" className="flex justify-center gap-10">
                {social.map((icon, i) => (
                    <li key={i}>
                        <Link to={icon.url} target="_blank" key={icon.name}>
                            <img
                                src={`/icons/${icon.img}.svg`}
                                width={50}
                                alt=""
                                aria-hidden
                                className="mx-auto invert dark:filter-none"
                            />
                            {icon.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Contact;

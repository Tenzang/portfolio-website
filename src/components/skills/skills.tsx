import React from 'react';
import { Tooltip } from 'react-tooltip';
import { Language } from '../../hooks/useSiteMetadata';

import type { FC } from '../../util';

interface SkillsProps {
    languages: Language[];
}

const Skills: FC<SkillsProps> = ({ languages }) => {
    const EXT = '.svg';
    const PATH = '/icons/';

    return (
        <div className="divide-y-2 divide-dotted divide-light-highlight/20 dark:divide-dark-highlight/20">
            {languages.map((language, i) => (
                <section key={i} className="py-10">
                    <header className="flex justify-center space-x-4">
                        {language.img && (
                            <img
                                src={PATH + language.img + EXT}
                                alt=""
                                aria-hidden
                                width={30}
                                className="invert dark:filter-none"
                            />
                        )}
                        <h4 className="text-2xl text-center">{language.name}</h4>
                    </header>
                    <ul aria-label={language.name + ' tools'} className="flex justify-evenly mt-5">
                        {language.libraries.map((library) => (
                            <li key={library.name} className="flex">
                                <img
                                    src={PATH + library.img + EXT}
                                    width={60}
                                    alt={library.name}
                                    data-tooltip-id={library.name}
                                    data-tooltip-content={library.name}
                                    className="invert dark:filter-none"
                                />
                                <Tooltip id={library.name} />
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </div>
    );
};

export default Skills;

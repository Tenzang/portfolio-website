import { Tooltip } from '@material-ui/core';
import React from 'react';
import { Language } from '../../hooks/useSiteMetadata';

import { FC } from '../../util';

interface SkillsProps {
    languages: Language[];
}

const Skills: FC<SkillsProps> = ({ languages }) => {
    const EXT = '.svg';
    const PATH = '/icons/';

    return (
        <div className="divide-y-2 divide-dotted divide-light-highlight/20 dark:divide-dark-highlight/20">
            {languages.map((language) => (
                <section className="py-10">
                    <header className="flex justify-center space-x-4">
                        {language.img && (
                            <img src={PATH + language.img + EXT} alt="" aria-hidden width={30} />
                        )}
                        <h4 className="text-2xl text-center">{language.name}</h4>
                    </header>
                    <div className="flex justify-evenly mt-5">
                        {language.libraries.map((library) => (
                            <Tooltip title={library.name} key={library.name}>
                                <img src={PATH + library.img + EXT} width={60} alt={library.name} />
                            </Tooltip>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
};

export default Skills;

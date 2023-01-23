import { Box, Typography, Tooltip, Divider } from '@material-ui/core';
import React from 'react';

import { FC } from '../../util';

interface Library {
    name: string;
    img: string;
}

interface Language {
    name: string;
    img: string;
    libraries: Library[];
}

interface SkillsProps {
    languages: Language[];
}

const Skills: FC<SkillsProps> = ({ languages }) => {
    const spacing = 5;

    const EXT = '.svg';
    const PATH = '/icons/';

    return (
        <>
            {languages.map((language) => (
                <>
                    <Box my={spacing}>
                        <Typography variant="h3" align="center">
                            {language.img && (
                                <Box component="span" mr={5}>
                                    <img
                                        src={PATH + language.img + EXT}
                                        style={{ width: '40px' }}
                                    />
                                </Box>
                            )}
                            {language.name}
                        </Typography>
                        <Box display="flex" justifyContent="space-evenly" mt={spacing}>
                            {language.libraries.map((library) => (
                                <Tooltip title={library.name} key={library.name}>
                                    <img src={PATH + library.img + EXT} style={{ width: '65px' }} />
                                </Tooltip>
                            ))}
                        </Box>
                    </Box>
                    <Divider />
                </>
            ))}
        </>
    );
};

export default Skills;

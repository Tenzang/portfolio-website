import { Box, Container, Link, Typography } from '@material-ui/core';
import React from 'react';

import { FC } from '../../util';
import { Link as LinkType } from '../../hooks/useSiteMetadata';


interface ContactProps {
    social: LinkType[];
}

const Contact: FC<ContactProps> = ({ social }) => {
    return (
        <Box display="flex" flexDirection="column">
            <Typography variant="h5" align="center">
                <p>You can find me at:</p>
            </Typography>
            <Box display="flex" justifyContent="space-evenly" pt={2}>
                {social.map((icon) => (
                    <Link href={icon.url} target="_blank" key={icon.name}>
                        <Container>
                            <img
                                src={`/icons/${icon.img}.svg`}
                                style={{
                                    width: '50px',
                                    display: 'block',
                                    margin: '0 auto'
                                }}
                            />
                            <Typography align="center">{icon.name}</Typography>
                        </Container>
                    </Link>
                ))}
            </Box>
        </Box>
    );
};

export default Contact;

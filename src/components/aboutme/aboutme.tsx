import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { FakeTyper } from '../index';
import { FC } from '../../util';
import { Author } from '../../hooks/useSiteMetadata';

const AboutMe: FC<Author> = ({ about, code }) => {
    return (
        <Container maxWidth="md">
            <FakeTyper code={code} />
            <Typography>
                {about.split('\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                ))}
            </Typography>
        </Container>
    );
};

export default AboutMe;

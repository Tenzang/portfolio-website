import React from 'react';
import { Container, Link, Typography } from '@material-ui/core';

import { FC } from '../../util';
import { Link as LinkType } from '../../hooks/useSiteMetadata';

const Floater: FC<LinkType> = ({ url, name, img }) => {
    return (
        <Link
            href={url}
            style={{
                position: 'fixed',
                right: '2%',
                top: '25px',
                fontSize: '72%'
            }}
            target="_blank"
        >
            <Container>
                <img
                    src={`/icons/${img}.svg`}
                    alt={`${name} icon`}
                    width="40px"
                />
            </Container>
            <Typography align='center'>{name}</Typography>
        </Link >
    );
};

export default Floater;


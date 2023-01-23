import React from 'react';
import { Box, Button, ButtonGroup, Link, Typography } from '@material-ui/core';

import { FC } from '../../util';

interface LinkType {
    name: string;
    url: string;
    target?: string;
}

export const Navbar: FC = () => {
    const links: LinkType[] = [
        {
            name: 'ABOUT',
            url: '#about'
        },
        {
            name: 'SKILLS',
            url: '#skills'
        },
        {
            name: 'PROJECTS',
            url: '#projects'
        },
        {
            name: 'CONTACT',
            url: '#contact'
        },
        {
            name: 'RESUME',
            url: '/resume.pdf',
            target: '_blank'
        }
    ];

    const RADIUS = {
        top: '25px',
        bot: '5px'
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            style={{
                borderTopLeftRadius: RADIUS.top,
                borderTopRightRadius: RADIUS.top,
                borderBottomLeftRadius: RADIUS.bot,
                borderBottomRightRadius: RADIUS.bot
            }}
            bgcolor="background.paper"
            component="nav"
            p={1.5}
            mt={4}
        >
            <ButtonGroup
                color="primary"
                disableRipple
                variant="text"
                aria-label="text button group"
            >
                {links.map((link) => {
                    return (
                        <Button key={link.name}>
                            <Link href={link.url} underline="none" target={link.target || '_self'}>
                                <Typography variant='h5'>
                                    {link.name}
                                </Typography>
                            </Link>
                        </Button>
                    );
                })}
            </ButtonGroup>
        </Box>
    );
};

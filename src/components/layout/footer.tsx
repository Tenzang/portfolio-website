import React from 'react';
import { Typography, Link, Box } from '@material-ui/core';

import { FC } from '../../util';

const Footer: FC = () => {
    const RADIUS = '30px';
    return (
        <Box
            style={{
                borderTopLeftRadius: RADIUS,
                borderTopRightRadius: RADIUS
            }}
            bgcolor="background.paper"
            component="footer"
            p={1}
        >
            <Typography align="center" variant="h5">
                © {new Date().getFullYear()}, Built with
                {` `}
                <Link href="https://www.gatsbyjs.org" color="inherit">
                    Gatsby
                </Link>
                ,{` `}
                <Link href="https://www.typescriptlang.org" color="inherit">
                    Typescript
                </Link>{' '}
                and
                {` `}
                <Link href="https://material-ui.com/" color="inherit">
                    @Material-ui
                </Link>
                ,
            </Typography>
        </Box>
    );
};

export default Footer;

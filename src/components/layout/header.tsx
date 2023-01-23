import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { Navbar } from './navbar';

import { FC } from '../../util';

const Header: FC = () => {
    return (
        <Box mt={4} component="header">
            <Typography align="center" variant="h1">
                LODEN GENDUN
            </Typography>
            <Typography align="center" variant="h3" gutterBottom>
                Software Engineer
            </Typography>
            <Navbar />
        </Box>
    );
};

export default Header;

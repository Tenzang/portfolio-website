import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import MetaLayout from './meta-layout';
import { FCR, themes } from '../../util';
import SEO from '../seo/seo';

const Layout: FCR = (props) => {
    return (
        <ThemeProvider theme={themes['dark']}>
            <SEO title="Loden Gendun"></SEO>
            <CssBaseline />
            <MetaLayout>{props.children}</MetaLayout>
        </ThemeProvider>
    );
};

export default Layout;

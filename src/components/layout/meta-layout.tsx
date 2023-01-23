import React from 'react';
import { Container } from '@material-ui/core';
import Header from './header';
import Footer from './footer';

import { FCR } from '../../util';

const MetaLayout: FCR = (props) => {
    return (
        <Container maxWidth="md">
            <Header />
            <main>{props.children}</main>
            <Footer />
        </Container>
    );
};

export default MetaLayout;

import React from 'react';

import MetaLayout from './meta-layout';
import { FCR } from '../../util';
import SEO from '../seo/seo';

const Layout: FCR = (props) => {
    return (
        <>
            <SEO title="Loden Gendun"></SEO>
            <MetaLayout>{props.children}</MetaLayout>
        </>
    );
};

export default Layout;

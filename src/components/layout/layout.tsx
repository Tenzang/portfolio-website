import React from 'react';

import MetaLayout from './meta-layout';
import { FC } from '../../util';
import SEO from '../seo/seo';

const Layout: FC = ({ children }) => {
    return (
        <>
            <SEO title="Loden Gendun"></SEO>
            <MetaLayout>{children}</MetaLayout>
        </>
    );
};

export default Layout;

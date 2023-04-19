import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

import { Seo } from '../components';
import { FC } from '../util';

const NotFoundPage: FC = () => {
    useEffect(() => {
        navigate('/');
    }, []);

    return (
        <>
            <Seo title="404: Not found" />
            <h2>NOT FOUND</h2>
            You just hit a route that doesn&#39;t exist... the sadness.
        </>
    );
};

export default NotFoundPage;

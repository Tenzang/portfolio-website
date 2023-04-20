import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

import { FC } from '../util';

const NotFoundPage: FC = () => {
    useEffect(() => {
        navigate('/');
    }, []);

    return (
        <>
            <h2>NOT FOUND</h2>
            You just hit a route that doesn&#39;t exist... the sadness.
        </>
    );
};

export default NotFoundPage;

import React from 'react';

import { FC } from '../../util';
import { Link as LinkType } from '../../hooks/useSiteMetadata';
import { Link } from 'gatsby';

const Floater: FC<LinkType> = ({ url, name, img }) => {
    return (
        <Link to={url} className="fixed right-5 top-5 text-sm" target="_blank">
            <img src={`/icons/${img}.svg`} alt="" width="40px" aria-hidden className="mx-auto" />
            {name}
        </Link>
    );
};

export default Floater;

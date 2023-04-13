import React from 'react';
import { FakeTyper } from '../index';
import { FC } from '../../util';
import { Author } from '../../hooks/useSiteMetadata';

const AboutMe: FC<Author> = ({ about, code }) => {
    return (
        <>
            <FakeTyper code={code} />
            {about.split('\n').map((paragraph, i) => (
                <p key={i} className="py-2">
                    {paragraph}
                </p>
            ))}
        </>
    );
};

export default AboutMe;

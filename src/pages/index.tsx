import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { AboutMe, Contact, Projects, Skills } from '../components/index';

import { FC } from '../util';
import useSiteMetadata from '../hooks/useSiteMetadata';

const IndexPage: FC = () => {
    const { author, languages, projects, social } = useSiteMetadata();

    interface Section<T> {
        title: string;
        component: FC<T>;
        id: string;
        props?: T;
    }

    const sections: Section<any>[] = [
        {
            title: 'About Me',
            component: AboutMe,
            id: 'about',
            props: author
        },
        {
            title: 'Skills',
            component: Skills,
            id: 'skills',
            props: { languages }
        },
        {
            title: 'Projects',
            component: Projects,
            id: 'projects',
            props: projects
        },
        {
            title: 'Contacts',
            component: Contact,
            id: 'contact',
            props: { social }
        }
    ];

    return (
        <>
            {sections.map((section) => {
                return (
                    <Box component="section" my={5} id={section.id}>
                        <Typography variant="h2" align="center">
                            {section.title}
                        </Typography>
                        <section.component {...section.props} />
                    </Box>
                );
            })}
        </>
    );
};

export default IndexPage;

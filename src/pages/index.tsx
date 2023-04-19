import React from 'react';
import { AboutMe, Contact, Projects, Skills } from '../components/index';

import { FC } from '../util';
import useSiteMetadata from '../hooks/useSiteMetadata';

const IndexPage = () => {
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

    return sections.map((section) => (
        <section aria-labelledby={`${section.id}-section-label`} className="py-10" id={section.id}>
            <h3 className="text-center text-3xl" id={`${section.id}-section-label`}>
                {section.title}
            </h3>
            <section.component {...section.props} />
        </section>
    ));
};

export default IndexPage;

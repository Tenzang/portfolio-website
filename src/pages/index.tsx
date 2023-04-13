import React from 'react';
import { AboutMe, Contact, Projects, Skills } from '../components/index';

import { FC } from '../util';
import useSiteMetadata from '../hooks/useSiteMetadata';
import Floater from '../components/floater/floater';

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
            <aside>
                <Floater {...social[0]} />
            </aside>
            <main className="divide-y-2 divide-light-highlight/10 dark:divide-dark-highlight/10">
                {sections.map((section) => {
                    return (
                        <section
                            aria-labelledby={`${section.id}-section-label`}
                            className="py-5"
                            id={section.id}
                        >
                            <h3 className="text-center text-3xl" id={`${section.id}-section-label`}>
                                {section.title}
                            </h3>
                            <section.component {...section.props} />
                        </section>
                    );
                })}
            </main>
        </>
    );
};

export default IndexPage;

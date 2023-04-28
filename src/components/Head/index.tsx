import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default () => {
    const {
        site: {
            siteMetadata: { title, description }
        }
    } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `
    );

    return (
        <>
            <html lang="en" />
            <body className="m-auto px-3 md:w-[48rem] bg-light-primary dark:bg-dark-primary text-light-highlight dark:text-dark-highlight" />
            <title>Loden Gendun | {title}</title>
            <meta name="description" content={description} />
            <meta name="og:title" content={title} />
            <meta name="og:description" content={description} />
            <meta name="og:type" content="website" />
        </>
    );
};

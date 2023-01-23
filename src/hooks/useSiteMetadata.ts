import { graphql, useStaticQuery } from 'gatsby';

export interface SiteMetadata {
    title: string;
    description: string;
    author: {
        name: string;
        content: string;
        code: string;
    };
    languages: {
        name: string;
        img?: string;
        libraries: {
            name: string;
            img: string;
        }[];
    }[];
    projects: {
        backend: {
            name: string;
            tools: {
                name: string;
                img: string;
            }[];
            img: string;
            description: string;
            url: string;
            status?: string;
        };
        frontEnd: {
            name: string;
            tools: {
                name: string;
                img: string;
            }[];
            img: string;
            description: string;
            url: string;
        };
    };
    social: {
        name: string;
        img: string;
        url: string;
    }[];
}

export default (): SiteMetadata => {
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    title
                    description
                    author {
                        name
                        about
                        code
                    }
                    languages {
                        name
                        img
                        libraries {
                            name
                            img
                        }
                    }
                    projects {
                        backEnd {
                            name
                            tools {
                                name
                                img
                            }
                            img
                            description
                            url
                            status
                        }
                        frontEnd {
                            name
                            tools {
                                name
                                img
                            }
                            img
                            description
                            url
                        }
                    }
                    social {
                        name
                        img
                        url
                    }
                }
            }
        }
    `);

    return data.site.siteMetadata;
};

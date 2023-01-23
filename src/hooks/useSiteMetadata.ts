import { graphql, useStaticQuery } from 'gatsby';

export interface Author {
    name: string;
    about: string;
    code: string;
}

interface Image {
    name: string;
    img: string;
}

export interface Link extends Image {
    url: string;
}

export interface Language extends Image {
    libraries: Image[];
}

export interface Project extends Link {
    tools: Image[];
    url: string;
    status?: string;
    description: string;
    img: string;
}

export interface Projects {
    backEnd: Project[];
    frontEnd: Project[];
}

export interface SiteMetadata {
    title: string;
    description: string;
    author: Author;
    languages: Language[];
    projects: Projects;
    social: Link[];
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

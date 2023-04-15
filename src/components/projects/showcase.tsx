import { Tooltip, withStyles } from '@material-ui/core';
import React, { FC } from 'react';
import { Project } from '../../hooks/useSiteMetadata';
import { Link } from 'gatsby';

interface ShowcaseProps {
    title: string;
    projects: Project[];
}

const HTMLTooltip = withStyles(() => ({
    tooltip: {
        backgroundColor: 'background.paper',
        maxWidth: '700px'
    }
}))(Tooltip);

const Showcase: FC<ShowcaseProps> = ({ title, projects }) => {
    return (
        <div className="py-10 text-center">
            <h4 className="text-2xl">{title}</h4>
            {projects.map((project) => (
                <article className="my-14" key={project.name}>
                    <h5 className="text-xl">{project.name}</h5>
                    {project.status && (
                        <span className="block m-x-auto uppercase text-sm text-light-highlight/75 dark:text-dark-highlight/50">
                            {project.status}
                        </span>
                    )}
                    <ul className="flex justify-center my-10" aria-label="tools used">
                        {project.tools.map((tool) => (
                            <li className="mx-4" key={tool.name}>
                                <Tooltip title={tool.name}>
                                    <img
                                        src={`/icons/${tool.img}.svg`}
                                        width={50}
                                        alt={tool.name}
                                    />
                                </Tooltip>
                            </li>
                        ))}
                    </ul>
                    <HTMLTooltip
                        title={project.description.split('\n').map((par, i) => (
                            <p className="text-lg" key={i}>
                                {par}
                            </p>
                        ))}
                        placement="top"
                    >
                        <Link to={project.url} target="_blank">
                            <img
                                src={`/images/${project.img}.webp`}
                                alt={`image of ${project.name}`}
                                style={{
                                    width: '80%'
                                }}
                                loading="lazy"
                                className="mx-auto rounded-2xl drop-shadow-light dark:drop-shadow-dark"
                            />
                        </Link>
                    </HTMLTooltip>
                </article>
            ))}
        </div>
    );
};

export default Showcase;

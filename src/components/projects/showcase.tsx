import React, { FC } from 'react';
import { Link } from 'gatsby';
import { Tooltip } from 'react-tooltip';
import { Project } from '../../hooks/useSiteMetadata';

import 'react-tooltip/dist/react-tooltip.css';

interface ShowcaseProps {
    title: string;
    projects: Project[];
}

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
                                <img
                                    src={`/icons/${tool.img}.svg`}
                                    width={50}
                                    alt={tool.name}
                                    data-tooltip-id={tool.name}
                                    data-tooltip-content={tool.name}
                                    className="mx-auto invert dark:filter-none"
                                />
                                <Tooltip id={tool.name} />
                            </li>
                        ))}
                    </ul>
                    <Link
                        to={project.url}
                        target="_blank"
                        data-tooltip-id={project.img}
                        data-tooltip-html={project.description.split('.').join('.<br />')}
                        data-tooltip-place="bottom"
                        data-tooltip-offset={-200}
                    >
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
                    <Tooltip id={project.img} noArrow className="max-w-sm sm:max-w-xl text-2xl" />
                </article>
            ))}
        </div>
    );
};

export default Showcase;

import React from 'react';
import Carousel from 'react-material-ui-carousel';

import { FC } from '../../util';
import Showcase from './showcase';
import { Projects as ProjectsProps } from '../../hooks/useSiteMetadata';

const Projects: FC<ProjectsProps> = ({ frontEnd, backEnd }) => {
    return (
        <Carousel
            navButtonsWrapperProps={{
                style: {
                    top: '50px',
                    height: '0px'
                }
            }}
            animation="slide"
            navButtonsAlwaysVisible
            indicators={false}
            interval={10000}
        >
            <Showcase title="Front End" projects={frontEnd} />
            <Showcase title="Back End" projects={backEnd} />
        </Carousel>
    );
};

export default Projects;

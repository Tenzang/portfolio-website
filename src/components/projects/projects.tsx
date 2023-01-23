import { Box } from '@material-ui/core';
import React from 'react';
import Carousel from 'react-material-ui-carousel';

import { FC } from '../../util';
import Showcase from './showcase';

interface Tool {
    name: string;
    img: string;
}

export interface Project {
    name: string;
    tools: Tool[];
    img: string;
    description: string;
    url: string;
    status?: string;
}

interface ProjectsProps {
    frontEnd: Project[];
    backEnd: Project[];
}

const Projects: FC<ProjectsProps> = ({ frontEnd, backEnd }) => {
    return (
        <Box mt={5}>
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
            >
                <Showcase title="Front End" projects={frontEnd} />
                <Showcase title="Back End" projects={backEnd} />
            </Carousel>
        </Box>
    );
};

export default Projects;

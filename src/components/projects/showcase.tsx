import { Box, Button, Container, Link, Tooltip, Typography, withStyles } from '@material-ui/core';
import React, { FC } from 'react';
import { Project } from './projects';

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
        <Box py={5}>
            <Typography align="center" variant="h3">
                {title}
            </Typography>
            <Typography align="center" variant="h3">
                {projects.map((project) => (
                    <Box mt={5}>
                        <Container>
                            {project.name}
                            {project.status && (
                                <Button style={{ display: 'block', margin: '0 auto' }} disabled>
                                    {project.status}
                                </Button>
                            )}
                        </Container>
                        <Box display="flex" justifyContent="center" my={4}>
                            {project.tools.map((tool) => (
                                <Box mx={1.5}>
                                    <Tooltip title={tool.name}>
                                        <img
                                            src={`/icons/${tool.img}.svg`}
                                            style={{ width: '50px' }}
                                        />
                                    </Tooltip>
                                </Box>
                            ))}
                        </Box>
                        <HTMLTooltip
                            title={
                                <Typography align="center" variant="h6">
                                    {project.description.split('\n').map((par) => (
                                        <p>{par}</p>
                                    ))}
                                </Typography>
                            }
                            placement="top"
                        >
                            <Link href={project.url} target="_blank">
                                <img
                                    src={'/images/' + project.img}
                                    alt={`image of ${project.name}`}
                                    style={{
                                        width: '80%',
                                        borderRadius: 15,
                                        boxShadow: '0 0 15px white'
                                    }}
                                />
                            </Link>
                        </HTMLTooltip>
                    </Box>
                ))}
            </Typography>
        </Box>
    );
};

export default Showcase;

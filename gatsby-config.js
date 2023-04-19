const hobbies = ['Board Games', 'Tabletop Role-Playing Games', 'Singing'];
const passions = ['Coding', 'Animal Welfare'];
const languages = [
    'HTML',
    'CSS (Cascading Style Sheets)',
    'Javascript',
    'Typescript',
    'Ruby',
    'SQL'
];
const frameworks = ['Rails', 'Sinatra', 'React', 'Vue', 'Gatsby', 'Node.js', 'Express.js'];

module.exports = {
    siteMetadata: {
        title: 'Portfolio',
        author: {
            name: `Loden Gendun`,
            about: `Hi! Here's my journey so far...\nI've been working in the retail industry for the past five years while studying Human Biology at Macquarie University. However, after deciding my chosen career path did not align with my goals, I decided to change gears and pursue software engineering.\n In early 2022, I completed a software engineering immersive program and was offered a role as Instructional Associate due to my performance and tendency to support my peers. I've been continuing to learn and develop in my field through online courses, contract work & side projects.\n Now, I'm seeking a new opportunity to join a growth-oriented team who I can share with my passion for coding.`,
            code: `import SoftwareEngineer from "general-assembly";\n\nconst loden = new SoftwareEngineer();\n\nloden.hobbies = ["${hobbies.join(
                '", "'
            )}"];\nloden.passions = ["${passions.join(
                '", "'
            )}"];\nloden.languages = ["${languages.join(
                '", "'
            )}"];\nloden.frameworks = ["${frameworks.join('", "')}"];\n\nexport default loden;`
        },
        languages: [
            {
                name: 'Core',
                libraries: [
                    {
                        name: 'HTML',
                        img: 'html5'
                    },
                    {
                        name: 'CSS',
                        img: 'css3'
                    },
                    {
                        name: 'Git',
                        img: 'git'
                    },
                    {
                        name: 'Github',
                        img: 'github'
                    }
                ]
            },
            {
                name: 'Javascript / Typescript',
                img: 'javascript',
                libraries: [
                    {
                        name: 'React',
                        img: 'react'
                    },
                    {
                        name: 'Jest',
                        img: 'jest'
                    },
                    {
                        name: 'Vue',
                        img: 'vue'
                    },
                    {
                        name: 'Express',
                        img: 'express'
                    },
                    {
                        name: 'Node',
                        img: 'node'
                    }
                ]
            },
            {
                name: 'Ruby',
                img: 'ruby',
                libraries: [
                    {
                        name: 'Sinatra',
                        img: 'sinatra'
                    },
                    {
                        name: 'Ruby on Rails',
                        img: 'rails'
                    }
                ]
            },
            {
                name: 'Database',
                img: 'sql',
                libraries: [
                    {
                        name: 'SQLite',
                        img: 'sqlite'
                    },
                    {
                        name: 'PostreSQL',
                        img: 'postgresql'
                    },
                    {
                        name: 'MongoDB',
                        img: 'mongodb'
                    }
                ]
            }
        ],
        projects: {
            frontEnd: [
                {
                    name: 'Retro Arcade',
                    tools: [
                        {
                            name: 'NodeJS',
                            img: 'node'
                        },
                        {
                            name: 'React',
                            img: 'react'
                        },
                        {
                            name: 'SCSS',
                            img: 'scss'
                        }
                    ],
                    img: 'retro-arcade',
                    description: `A web game application created by myself and Kristabel Wong for our fourth and final project at General Assembly. We chose a fun final project that could show off our skills in React, featuring Tetris, Snake, Space Invaders and Pong.`,
                    url: 'https://retro-arcade.netlify.app/'
                },
                {
                    name: 'Tic-Tac-Toe',
                    tools: [
                        {
                            name: 'html',
                            img: 'html5'
                        },
                        {
                            name: 'css',
                            img: 'css3'
                        },
                        {
                            name: 'Javascript',
                            img: 'javascript'
                        }
                    ],
                    img: 'tic-tac-toe',
                    description: `The classic game of Tic-Tac-Toe built using good old HTML, CSS & Javascript. After completing player vs player functionality I went on to add computer opponents ranging three difficulty options.`,
                    url: 'https://tenzang.github.io/ideal-chainsaw/'
                },
                {
                    name: 'This site!',
                    tools: [
                        {
                            name: 'NodeJS',
                            img: 'node'
                        },
                        {
                            name: 'Gatsby',
                            img: 'gatsby'
                        },
                        {
                            name: 'GraphQL',
                            img: 'graphql'
                        }
                    ],
                    img: 'portfolio-site',
                    description:
                        'Originally, this website was created using basic HTML, CSS, and Javascript. However, I later migrated it to Gatsby to take advantage of the benefits of reusable React components whilst preserving search engine optimization.',
                    url: 'https://loden-gendun.com/'
                }
            ],
            backEnd: [
                {
                    name: 'Coding Campfire',
                    tools: [
                        {
                            name: 'NestJS',
                            img: 'nestjs'
                        },
                        {
                            name: 'MongoDB',
                            img: 'mongodb'
                        },
                        {
                            name: 'Jest',
                            img: 'jest'
                        }
                    ],
                    img: 'coding-campfire',
                    description: `A swiss army knife for Instructional Associates at General Assembly. Here, IA's can create and manage a schedule of daily coding exercises.`,
                    status: 'Work in Progress',
                    url: 'https://www.coding-campfire.com'
                },
                {
                    name: 'Auto Novel',
                    tools: [
                        {
                            name: 'Ruby on Rails',
                            img: 'rails'
                        },
                        {
                            name: 'Bootstrap',
                            img: 'bootstrap'
                        }
                    ],
                    img: 'auto-novel',
                    description:
                        'A CRUD app with a twist! This project was my first foray into backend web development using Ruby on Rails. Developing Auto-Novel was a fun exercise in backend data-handling, as the "create novel" functionality is based on a crude random novel construction algorithm I designed.',
                    url: 'https://auto-novel.herokuapp.com/'
                }
            ]
        },
        social: [
            {
                name: 'Github',
                img: 'github',
                url: `https://github.com/Tenzang`
            },
            {
                name: 'Linkedin',
                img: 'linkedin',
                url: 'https://linkedin.com/in/loden-gendun'
            },
            {
                name: 'Email',
                img: 'email',
                url: 'mailto:gendun.loden@gmail.com'
            }
        ]
    },
    plugins: [
        `gatsby-plugin-typescript`,
        `gatsby-plugin-react-helmet`,
        'gatsby-plugin-postcss',
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(`./src/components/layout/index.tsx`)
            }
        },
        {
            resolve: `gatsby-omni-font-loader`,
            options: {
                enableListener: true,
                preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
                web: [
                    {
                        name: `Montserrat`,
                        file: `https://fonts.googleapis.com/css2?family=Montserrat&display=swap`
                    }
                ]
            }
        }
    ],
    pathPrefix: '/'
};

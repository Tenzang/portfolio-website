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
            about: `For the past five years I've been working in the Retail industry as a Stock Clerk at Woolworths whilst studying Human Biology at Macquarie University. Toward the end of my degree however, I discovered that the career I was pursuing had slipped out of alignment with my beliefs. After graduating, faced with a tough decision I decided to change gears and pursue something different, and I'm so grateful I did.
            Software Engineering quickly went from an interest, to my passion as I began studying in the General Assembly Software Engineering Immersive program. The line between work and play has never felt so blurred as I've suddenly found myself plunged into a field filled with fascinating opportunities to discover, create, and innovate.
            During my 3 months in the program, I was rapidly exposed to a diverse set of software development tools and technologies including Javascript, HTML, CSS, Ruby, Rails, React, postgreSQL, Git, Github, deployment platforms and more. Being exposed to such a wide breadth of topics in such a short amount of time was staggering, but extraordinarily fulfilling and I feel that I thrived in that environment.
            Immediately after the program, I was shoulder-tapped by my instructor and offered a role as Instructional Associate due to my performance throughout the course and my frequent tendency to offer support to my peers. Having accepted this offer two times now, I have been able to not only re-explore the topics previously studied but also strengthen my ability to communicate logic and concepts, as well as write code in a style that emphasizes cleanliness, clarity and readability. During this period, In my down time I've been studying Python and Typescript whilst practicing testing and working on collaborative side-projects with some of my fellow GA graduates.
            Now as I seek my next opportunity, I'm eager to continue to learn and develop both on and off the job with a like-minded, growth oriented team!`,
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
                        name: 'Node',
                        img: 'node'
                    },
                    {
                        name: 'Express',
                        img: 'express'
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
        {
            resolve: 'gatsby-plugin-material-ui'
        },
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

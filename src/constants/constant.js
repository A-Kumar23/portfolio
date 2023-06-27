import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,

    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,

    ignou,
    du,
    cbse,
    githubS,
    linkedin,
    instagram,
    twitter,
    github,
    filmpire,
    code,
    hybridClothing,
    infiniteScroll,
    jokesTeller,
    quoteGenerator,
    bootstrap,
    afterEffects,
    premierePro,
    photoshop,
    illustrator,
    cliffex,
    digital,
    graySpace,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React UI Developer",
        icon: mobile,
    },
    {
        title: "Web Designer",
        icon: mobile,
    },
    {
        title: "Graphic Designer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    }
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Bootstrap CSS",
        icon: bootstrap,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "Adobe Illustrator",
        icon: illustrator,
    },
    {
        name: "Adobe Photoshop",
        icon: photoshop,
    },
    {
        name: "Adobe After Effects",
        icon: afterEffects,
    },
    {
        name: "Adobe Premiere Pro",
        icon: premierePro,
    },
];

const experiences = [
    {
        title: "React.js UI Developer",
        company_name: "Cliffex Software Consulting Pvt. Ltd.",
        company_address: "Noida",
        icon: cliffex,
        iconBg: "#383E56",
        date: "Sep 2022 - Present",
        points: [
            "Worked on responsive design, making interfaces adaptable across different devices and screen sizes",
            "Implement visual design concepts into functional user interfaces using HTML, CSS, Bootstrap, JavaScript and React.",
            "Work together with UX designers to improve user experience and unify design vision.",
            "Update the user interface for old projects and resolve the UI error.",
        ],

    },
    {
        title: "Graphic Designer",
        company_name: "GreaySpace Developer",
        company_address: "Work From Home",
        icon: graySpace,
        iconBg: "#E6DEDD",
        date: "Apr 2021 - Sep 2021",
        points: [
            "Creating visual graphics according to the client's requirement",
            "Creating visual graphics for use in motion graphics",
            "Enhancing the old graphic image into a clear visuals graphic.",
        ],

    },
    {
        title: "Graphic Designer",
        company_name: "DigitalEsprit",
        company_address: "Ghaziabad",
        icon: digital,
        iconBg: "#E6DEDD",
        date: "Oct 2019 - Mar 2020",
        points: [
            "Creating social media visuals for posting online.",
            "Creating short motion graphic visuals for social media",
        ],

    },
];

const educations = [
    {
        title: "Bachelor of Computer Application",
        company_name: "IGNOU",
        icon: ignou,
        iconBg: "#abe8ff",
        date: "2020 - Present",
    },
    {
        title: "Bachelor of Commerce",
        company_name: "Delhi University",
        icon: du,
        iconBg: "#ddb2d2",
        date: "2017 - 2020",

    },
    {
        title: "Senior School",
        company_name: "CBSE",
        icon: cbse,
        iconBg: "#E6DEDD",
        date: "2015 - 2017",

    },
    {
        title: "High School",
        company_name: "CBSE",
        icon: cbse,
        iconBg: "#E6DEDD",
        date: "2013 - 2015",

    },
];
const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Filmpire",
        description:
            "A web-based platform can look up films by their names or categories. Additionally, you can read more about the cast and the movie description.",
        tags: [
            {
                name: "reactJS",
                color: "blue-text-gradient",
            },
            {
                name: "redux",
                color: "green-text-gradient",
            },
            {
                name: "MUI",
                color: "pink-text-gradient",
            },
        ],
        image: filmpire,
        source_live_link: "https://https://filmpire-akumar23.netlify.app/.com/",
        source_code_link: "https://github.com/A-Kumar23/filmpire2.0/",
    },
    {
        name: "Hybrid Clothing",
        description:
            "A web-based platform allows search for clothing based on category. Additionally, there are checkout , add to cart features and login with help of firebase.",
        tags: [
            {
                name: "reactJS",
                color: "blue-text-gradient",
            },
            {
                name: "reactContext",
                color: "green-text-gradient",
            },
            {
                name: "firebase",
                color: "orange-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: hybridClothing,
        source_live_link: "https://hybridclothingcontext.netlify.app/",
        source_code_link: "https://github.com/A-Kumar23/hybrid-clothing",
    }
];

const miniProjects = [
    {
        name: "Infinity Scroll",
        description:
            "A web-based platform allows search for clothing based on category. Additionally, there are checkout , add to cart features and login with help of firebase.",
        image: infiniteScroll,
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "js",
                color: "orange-text-gradient",
            },
            {
                name: "unsplashApi",
                color: "pink-text-gradient",
            },
        ],
        source_live_link: "https://infnity-scroll.netlify.app/",
        source_code_link: "https://github.com/A-Kumar23/WebDev-Projects/tree/main/Infinite%20Scroll",
    },
    {
        name: "Jokes Teller",
        description:
            "A web-based platform allows search for clothing based on category. Additionally, there are checkout , add to cart features and login with help of firebase.",
        image: jokesTeller,
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "js",
                color: "orange-text-gradient",
            },
            {
                name: "jokeApi",
                color: "pink-text-gradient",
            },
        ],
        source_live_link: "https://jokes-teller-akumar.netlify.app/",
        source_code_link: "https://github.com/A-Kumar23/WebDev-Projects/tree/main/Jokes%20Teller",
    },
    {
        name: "Quote Generator",
        description:
            "A web-based platform allows search for clothing based on category. Additionally, there are checkout , add to cart features and login with help of firebase.",
        image: quoteGenerator,
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "js",
                color: "orange-text-gradient",
            },
            {
                name: "quoteApi",
                color: "pink-text-gradient",
            },
        ],
        source_live_link: "https://quote-generator-akumar23.netlify.app/",
        source_code_link: "https://github.com/A-Kumar23/WebDev-Projects/tree/main/Quote%20Generator",
    },

]

const socialMedias = [
    {
        name: "Github",
        profile_link: "https://github.com/A-Kumar23",
        icon: github,
    },
    {
        name: "Linkedin",
        profile_link: "https://www.linkedin.com/in/arun-kanaujia-960761130",
        icon: linkedin,
    },
    {
        name: "Instagram",
        profile_link: "https://instagram.com/hybrid_creation_?igshid=MzNlNGNkZWQ4Mg==",
        icon: instagram,
    },
    {
        name: "Twitter",
        profile_link: "https://twitter.com/",
        icon: twitter,
    }
]

export { services, technologies, experiences, educations, testimonials, projects, socialMedias, miniProjects };

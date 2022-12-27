
const getResumeInfo = () => {

    const langpoly = {
        experienceHeader: "Experience in DigiGround",
        experienceIntro: `Software development agent`,
        hightlight: [
            "participate in commercial projects, internationalization tool development",
            "Frontend Stacks: React, React Native",
            "Backend Stacks: Nodejs, expressJS, sequeliz",
            "Database: mysql, mongoDB",
            "Other tools: AdminBron, bugTracker",
            "Use Bitbucket as the Git based code hosting and collaboration tool",
            "Agile work environment",

        ],
        projectPreview: '/pupilovers.png',
        projectLinks: ["https://puppilovers.com/", "https://oktion.com.au/", "http://langpoly.digiground.com.au/"]
    }
    
    const jracdamy = {
        experienceHeader: "Experience in JR Acadamy",
        experienceIntro: `Educational institution management system development and maintenance, Experienced as full stack developer, Agile work environment`,
        hightlight: [
            "Maintenance of JR ACADEMY official website",
            "Educational institution management system development",
            "Frontend Stacks: React, Redux-Saga, Typescript, Axios, ESlint, Ant-Desgin",
            "Backend Stacks: Nodejs, Express, Keystone.js, MongoDB",
            "JIRA used for issue tracking and project management",
            "Use Bitbucket as the Git based code hosting and collaboration tool",
            "Agile work environment",

        ],
        projectPreview: '/JR_dashboard.png',
        projectLinks: ["https://learn.jiangren.com.au/", "https://jiangren.com.au/"]
    }

    const pizza = {
        experienceHeader: "Pizza Website",
        experienceIntro: `Web-based online pizza ordering system that enables customers to order their pizzas online for home delivery from Margherita.
        The primary functionalities include login and register, customer data and order storing, admin management system for editing pizza menu and advertisements,
        online payment method, order tracking, and responsive user interface for customers to order pizza from PC or mobile`,
        hightlight: [
            "React (16.13.1) as the frontend framework",
            "Sass/Google material-UI/Bootstrap for the styling",
            "JWT/Node.js/Express.js/Mongoose for back-end implementation and authentication",
            "RESTful APIs implementation",
            "Deployed react-stripe-checkout (3.4.1) for credit card payment option",

        ],
        projectPreview: '/pizzaWebsite.png',
        projectLinks: ["http://mp-pizza.s3-website-ap-southeast-2.amazonaws.com/pizza"],
    }

    const weather = {
        experienceHeader: "Weather App",
        experienceIntro: `React application allows users to search for the current weather.`,
        hightlight: [
            "React(16.13.1)",
            "CSS/Bootstrap for the styling",
            "Axios(0.20.0) to fetch data from open weather map",
            "Redux for state management (7.2.1).",
            "Set up an express (express 4.17.1) server",

        ],
        projectPreview: '/weatherApp.png',
        projectLinks: ["http://weather-app-mingxin.s3-website-ap-southeast-2.amazonaws.com/"],
    }

    const personalWebDemo = {
        experienceHeader: "Online Resume",
        experienceIntro: `Styling Resume build with Next 13`,
        hightlight: [
            "Next(13.0.1)",
            "tailwindcss(3.2.4)",
            "typescript(4.9.3)",
            "framer-motion(7.6.12)",
        ],
        projectPreview: '/onlineResume.png',
        projectLinks: ["https://resume-web-iota.vercel.app/"],
    }

    const allExperience = [langpoly, jracdamy, personalWebDemo, pizza, weather]

    return allExperience

}

export default getResumeInfo;
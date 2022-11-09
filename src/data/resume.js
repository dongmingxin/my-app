
const getResumeInfo = () => {
    
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
        projectPreview: 'JR_dashboard.png',
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
        projectPreview: 'pizzaWebsite.png',
        projectLinks: ["http://mp-pizza.s3-website-ap-southeast-2.amazonaws.com/pizza"],
    }

    const Weather = {
        experienceHeader: "Weather App",
        experienceIntro: `React application allows users to search for the current weather.`,
        hightlight: [
            "React(16.13.1)",
            "CSS/Bootstrap for the styling",
            "Axios(0.20.0) to fetch data from open weather map",
            "Redux for state management (7.2.1).",
            "Set up an express (express 4.17.1) server",

        ],
        projectPreview: 'weatherApp.png',
        projectLinks: ["http://weather-app-mingxin.s3-website-ap-southeast-2.amazonaws.com/"],
    }

    const allExperience = [jracdamy, pizza, Weather]

    return allExperience

}

export default getResumeInfo;
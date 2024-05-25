//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import { faGithubAlt, faLinkedinIn, faMediumM, faFacebook, faTwitter, faInstagram, faYoutube, faBehance } from "@fortawesome/free-brands-svg-icons"

export const userinfo = {
    logoText: "Hardeep Chhabra", //This text is visible on your navbar and footer like your logo.
    contact: {
        email: 'hardeep96singh@gmail.com', //It is always a good idea to mention your email on your website. Good platform to communicate.
        phone: '1234567890', //Phone number is optional, if you dont want it, consider leaving it blank .
        countrycode: '+91' //It is advisable to add the country code incase you mention your contact number.
    },
    socials: [
        //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
        //more icons are imported above, use as you like them.
        { type: 'github', link: '', icon: faGithubAlt },
        { type: 'linkedin', link: '', icon: faLinkedinIn },
        { type: 'medium', link: '', icon: faMediumM },
    ],
    greeting: {
        //this text goes on your landing page
        title: "Hey there, I am Hardeep.",
        subtitle: "Hello! I'm Hardeep Chhabra, a seasoned Full-Stack Software Developer with a dynamic journey spanning six years. Beginning as an intern, I've steadily progressed through roles from Junior Developer to Senior Developer, ultimately assuming the mantle of Technical Team Lead."
    },
    capabilities: [
        //this text goes on your home page in table format.
        //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
        //For aesthetics, it is advisable for you to keep similar number of skills in each category
        {
            category: "Category", // eg.frontend, backend, devops etc
            skills: ["Skillset1", "Skillset1", "Skillset1"] //eg. react, html, python etc.
        },
        {
            category: "Category",
            skills: ["Skillset2", "Skillset2", "Skillset2"]
        },
        {
            category: "Category",
            skills: ["Skillset3", "Skillset3", "Skillset3"]
        },
        {
            category: "Category",
            skills: ["Skillset4", "Skillset4", "Skillset4"]
        },
    ],
    about: {
        //this text goes at the bottom of your home page.
        content: "My expertise lies in a diverse array of technologies, including Python, Django Rest Framework (DRF), JavaScript, DevOps, Docker, Kubernetes, GitHub Actions, Pandas, ETL (Extract, Transform, Load), and PySpark.Throughout my career, I've seamlessly blended my technical prowess with practical application, having successfully delivered on numerous Python and JavaScript freelancing projects alongside my professional commitments. With a passion for innovation and a proven track record of leadership, I'm dedicated to driving impactful solutions and pushing the boundaries of possibility in the world of software development & data science.",
        resume: "/" //link your resume here. it can be drive link or any other link
    },
    education: {
        visible: true, //set this to false if you want to omit this section
        educationList: [
            {
                time: 'May - Oct 2020', //timespan
                title: 'Degree name', //eg. BTech in Compuster Engineering
                organization: 'School Name', //eg. VJTI, Mumbai
                description: 'Lorem ipsum dolor sit amet consectetur' //eg. secured a cgpa of 9.25 in all sems appeared in so far
            },
            {
                time: 'May - Oct 2020',
                title: 'Degree name',
                organization: 'School Name',
                description: 'Lorem ipsum dolor sit amet consectetur'
            },
            {
                time: 'May - Oct 2020',
                title: 'Degree name',
                organization: 'School Name',
                description: 'Lorem ipsum dolor sit amet consectetur'
            },
        ],
    },
    experience: {
        visible: true, //set this to false if you want to omit this section
        experienceList: [
            {
                company: 'Dunder Mifflin', //company name eg.Microsoft
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*', //companylogo
                position: 'Regional Manager', //post you held eg.Senior SDE
                time: 'March 2020 - May 2020', //timespan
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum' //eg. spearheaded the graphics team in designing SASS product UIs
            },
            {
                company: 'Dunder Mifflin',
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'Regional Manager',
                time: 'March 2020 - May 2020',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum'
            },
            {
                company: 'Dunder Mifflin',
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'Regional Manager',
                time: 'March 2020 - May 2020',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum'
            },
        ],
    },
    blogs: {
        //set this to false if you want to omit this section
        visible: true
    },
}

export const headings = {
    //you can customise all the headings here.
    workHomePage: 'Work',
    workMainPage: 'Projects',
    capabilities: 'Capabilities',
    about: 'About Me',
    education: 'Education',
    experience: 'Experiences',
    blogs: 'I write!',
    contact: 'Contact Me',
}

export const ctaTexts = {
    //you can customise all the cta texts here.
    landingCTA: 'My work',
    workCTA: 'View All',
    capabCTA: 'Get in Touch',
    educationCTA: 'About Me',
    resumeCTA: 'Resume',
    submitBTN: 'Submit'
}
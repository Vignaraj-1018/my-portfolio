import { medleyPic,attendanceProjectPic, attendanceProjectLogo, medleyLogo, mailProject, leetCode, github, linkedin, instagram, hackerrank, leetCodeWhite, githubWhite, linkedinWhite, instagramWhite, hackerrankwhite, hackerrankLogo, courseraLogo, sololearnLogo } from "../assets"
import { AngularBasicHR, AngularIntermediateHR, BackendAPIFreeCodeCamp, CSSBasicHR, FrontendDeveloperReact, GitGithubCoursera, JavascriptBasicHR, JavascriptInterHR, NodeBasicHR, NodeInterHR, ProblemSolvingBasicHR, ProblemSolvingInterHR, PythonBasicHR, PythonCoursera, ReactBasicHR, RestAPIIntermediateHR, SQLAdvancedHR, SQLBasicHR, SQLIntermediateHR, SololearnCSS, SololearnCpp, SololearnHTML, SololearnJS, SololearnPHP, SololearnPython, SololearnReact } from "../assets/certificates"
import { angularWhite, cWhite, cppWhite, cssWhite, expressjsWhite, flaskWhite, gitWhite, htmlWhite, jsWhite, mongodbWhite, nextjsWhite, nodejsWhite, pythonWhite, reactWhite, springbootWhite, tailwindcssWhite, tsWhite, vscodeWhite } from "../assets/teckstack-logo"
import { gitHubFoss, intern101, jsQuery } from "../assets/volunteering"

export const techStack = [
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg", name: "C" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg", name: "C++" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", name: "Python" },
    // { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg", name: "java" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg", name: "HTML5" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg", name: "CSS3" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", name: "Javascript" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", name: "Typescript" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg", name: "TailwindCSS" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", name: "React" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angular/angular-original.svg", name: "Angular" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg", name: "Flask" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg", name: "SpringBoot" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg", name: "MongoDB" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg", name: "Git" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg", name: "GitHub" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg", name: "NodeJS" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg", name: "Next.js" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg", name: "ExpressJS" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg", name: "VSCode" },
]

export const techStackWhite = [
    { src: cWhite, name: "C" },
    { src: cppWhite, name: "C++" },
    { src: htmlWhite, name: "HTML5" },
    { src: cssWhite, name: "CSS3" },
    { src: jsWhite, name: "Javascript" },
    { src: tsWhite, name: "Typescript" },
    { src: tailwindcssWhite, name: "TailwindCSS" },
    { src: angularWhite, name: "Angular" },
    { src: flaskWhite, name: "Flask" },
    { src: springbootWhite, name: "SpringBoot" },
    { src: gitWhite, name: "Git" },
    { src: nodejsWhite, name: "NodeJS" },
    { src: nextjsWhite, name: "Next.js" },
    { src: expressjsWhite, name: "ExpressJS" },
    { src: vscodeWhite, name: "VSCode" },
    { src: githubWhite, name: "GitHub" },
    { src: reactWhite, name: "React" },
    { src: pythonWhite, name: "Python" },
    { src: mongodbWhite, name: "MongoDB" },
]

export const projects=[
    {
        id:35,
        title:'Tower of Hanoi',
        code:'https://github.com/Vignaraj-1018/tower-of-hanoi',
        demo:'https://tower-of-hanoi-vignu.vercel.app/',
        dp:mailProject,
        pic:mailProject,
        techStack:['Next.js'],
        dataId: '6697d4090375401bc91dd61e',
        description:"Tower of Hanoi puzzle game with Next.js, allowing users to select and solve puzzles with 3 to 10 disks. Challenge yourself and see how quickly you can so..."
    },
    {
        id:34,
        title:'Grammarly Clone',
        code:'https://github.com/Vignaraj-1018/grammarly-clone',
        demo:'https://grammarly-clone-vignu.netlify.app/',
        dp:mailProject,
        pic:mailProject,
        techStack:['Next.js', 'Gemini API'],
        dataId: '665cb26ae17a699f8e43ba7c',
        description:"Grammarly clone, a website and a Chrome extension, that allows users to correct their grammar and spelling mistakes on the go. This project showcases my..."
    },
    {
        id:33,
        title:'Student Attendance System',
        code:'https://github.com/Vignaraj-1018/Students-Attendance-System-Frontend',
        demo:'https://students-attendance-system.vercel.app/',
        dp:attendanceProjectLogo,
        pic:attendanceProjectPic,
        techStack:['Angular', 'SpringBoot', 'MongoDB'],
        dataId: '6686df3a6dd63d57860b198a',
        description:"This Angular-based front-end repository powers a Student Attendance System, providing a user-friendly interface for students to effortlessly track their..."
    },
    {
        id:32,
        title:'Mail Merchant',
        code:'https://github.com/Vignaraj-1018/Mail-Merchant',
        demo:'https://mail-merchant.netlify.app/',
        dp:mailProject,
        pic:mailProject,
        techStack:['React', 'Flask', 'MongoDB'],
        dataId: "6637eb51faf5c5cd1ffb4a1e",
        description:"Mail Merchant is a free email integration API built with Python Flask and MongoDB. Users can create an account, verify their email address, and obtain an..."
    },
    {
        id:31,
        title:'Medley - Music Player',
        code:'https://github.com/Vignaraj-1018/MEDLEY-Music-Player',
        demo:'https://medley-web.netlify.app/',
        dp:medleyLogo,
        pic:medleyPic,
        techStack:['React', 'Redux', 'ShazamAPI'],
        dataId: '66db22b0af5b40a453fbe8e2',
        description:"Plays songs with Shazam Core API. Plays the desired song on search. Explore trending songs around us with Geolocation API."
    },
]

const leetCodeAPIUrl = "https://helper-api-vignu.el.r.appspot.com/leetcode_data"
const leetCodeUsername = "vignaraj03"
export const leetCodeProfileDataQuery = `${leetCodeAPIUrl}/my_profile/${leetCodeUsername}`;
export const leetCodeProblemsSolvedQuery = `${leetCodeAPIUrl}/solvedProblemsCount/${leetCodeUsername}`;
export const leetCodeLanguagesSolvedQuery = `${leetCodeAPIUrl}/languageProblemsCount/${leetCodeUsername}`;
export const leetCodeCalendarDataQuery = `${leetCodeAPIUrl}/calendarData/${leetCodeUsername}`;

export const allWebsiteViewAnalytics = `https://helper-api-vignu.el.r.appspot.com/my_website_analytics/get_all_view_counts`;

export const socialMediaLink = [
    {
        name:"LeetCode",
        link: "https://helper-api-vignu.el.r.appspot.com/redirect_links/redirect/66549f0a1a0309060e2557f7",
        logo: leetCode
    },
    {
        name:"GitHub",
        link: "https://helper-api-vignu.el.r.appspot.com/redirect_links/redirect/66549f1e9631d5480b281d09",
        logo: github
    },
    {
        name:"LinkedIn",
        link: "https://helper-api-vignu.el.r.appspot.com/redirect_links/redirect/66549f32430f12d8ca9dcf2b",
        logo: linkedin
    },
    {
        name:"Instagram",
        link: "https://helper-api-vignu.el.r.appspot.com/redirect_links/redirect/66549f429631d5480b281d0a",
        logo: instagram
    },
    {
        name:"Hackerrank",
        link: "https://helper-api-vignu.el.r.appspot.com/redirect_links/redirect/66549f5e2e1a11bdfd26cf33",
        logo: hackerrank
    },
]

export const socialMediaWhiteLink = [
    {
        id:"SM1",
        name:"LeetCode",
        link: "https://helper-api-vignu.el.r.appspot.com/redirect_links/redirect/66549f0a1a0309060e2557f7",
        logo: leetCodeWhite
    },
    {
        id:"SM2",
        name:"GitHub",
        link: "https://helper-api-vignu.el.r.appspot.com/redirect_links/redirect/66549f1e9631d5480b281d09",
        logo: githubWhite
    },
    {
        id:"SM3",
        name:"LinkedIn",
        link: "https://helper-api-vignu.el.r.appspot.com/redirect_links/redirect/66549f32430f12d8ca9dcf2b",
        logo: linkedinWhite
    },
    {
        id:"SM4",
        name:"Instagram",
        link: "https://helper-api-vignu.el.r.appspot.com/redirect_links/redirect/66549f429631d5480b281d0a",
        logo: instagramWhite
    },
    {
        id:"SM5",
        name:"HackerRank",
        link: "https://helper-api-vignu.el.r.appspot.com/redirect_links/redirect/66549f5e2e1a11bdfd26cf33",
        logo: hackerrankwhite
    },
]

export const education = [
    {
        year:"2020 - Present",
        name:"M.Sc. Software Systems",
        institute: "Coimbatore Institute of Technology, Coimbatore",
        grade: "8.55 (upto 8th sem)"
    },
    {
        year:"2018 - 2020",
        name:"Higher Secondary",
        institute: "Bharatiya Vidya Bhavan, Coimbatore",
        grade: "84 %"
    },
    // {
    //     year:"2018",
    //     name:"Secondary",
    //     institute: "Bharatiya Vidya Bhavan, Coimbatore",
    //     grade: "89 %"
    // },
]

export const workExp = [
    {
        name:"Software Engineer Intern",
        organisation: "Smartail Pvt. Ltd.",
        duration: "Jun 2023 - Nov 2023",
        location: "Chennai",
        desc:"Completed a 6-month internship at Smartail as a Software Engineer, developing full stack applications with Angular, Spring Boot, MongoDB, and Python."
    }
]

export const certificates = [
    {
        id:'C1',
        name:'Backend Development and APIs',
        organisation:'freeCodeCamp',
        issueDate: 'May 2024',
        credentialId: 'vignaraj_1018-bedaa',
        credentialLink: 'https://freecodecamp.org/certification/Vignaraj_1018/back-end-development-and-apis',
        skills: 'Node.js, Express.js, MongoDB, Mongoose, RESTFul API',
        picture: BackendAPIFreeCodeCamp,
        logo:'https://www.freecodecamp.org/static/ribbon-f4307732bf92855b215beb8c6dbde5cc.svg',
        description: 'Developed proficiency in using Node.js to build scalable backend applications, enhancing my ability to create efficient server-side solutions. Acquired in-depth knowledge of MongoDB, a leading NoSQL database, for effective data storage and retrieval in web applications.'
    },
    {
        id:'C2',
        name:'Frontend Developer (React)',
        organisation:'HackerRank',
        issueDate: 'May 2024',
        credentialId: 'f830bd5abd91',
        credentialLink: 'https://www.hackerrank.com/certificates/f830bd5abd91',
        skills: 'React.js, CSS, JavaScript, Front-End Development',
        picture: FrontendDeveloperReact,
        logo:hackerrankLogo,
        description: 'The HackerRank React Frontend Developer Role Certification tests your skills in React, JavaScript, and CSS through a one-hour timed assessment to enhance your job market visibility.'
    },
    {
        id:'C3',
        name:'Crash Course on Python',
        organisation:'Coursera',
        issueDate: 'January 2023',
        credentialId: 'GEZNPPRTGMP8',
        credentialLink: 'https://www.coursera.org/account/accomplishments/certificate/GEZNPPRTGMP8',
        skills: 'Python',
        picture:PythonCoursera ,
        logo:courseraLogo,
        description: 'The "Crash Course on Python" by Coursera, created by Google, introduces beginners to Python programming through video lectures, quizzes, and hands-on exercises, covering basic concepts and practical applications.  '
    },
    {
        id:'C4',
        name:'Introduction to Git and GitHub',
        organisation:'Coursera',
        issueDate: 'May 2024',
        credentialId: 'JTBPUL98CHL9',
        credentialLink: 'https://coursera.org/verify/JTBPUL98CHL9',
        skills: 'Git, GitHub',
        picture:GitGithubCoursera ,
        logo:courseraLogo,
        description: 'The "Introduction to Git and GitHub" certification from Coursera, created by Google, is a beginner-level course that teaches the fundamentals of version control using Git and GitHub, focusing on practical skills for software development and collaboration.'
    },
    {
        id:'C5',
        name:'Python (Basic)',
        organisation:'HackerRank',
        issueDate: 'February 2023',
        credentialId: '3845058cb1f7',
        credentialLink: 'https://www.hackerrank.com/certificates/3845058cb1f7',
        skills: 'Python',
        picture:PythonBasicHR ,
        logo:hackerrankLogo,
        description: 'The HackerRank Python (Basic) Skills Certification assesses foundational Python programming knowledge through a 90-minute timed test, enhancing job prospects by verifying core competencies.'
    },
    {
        id:'C6',
        name:'Problem Solving (Basic)',
        organisation:'HackerRank',
        issueDate: 'February 2023',
        credentialId: '2e64258c1a8a',
        credentialLink: 'https://www.hackerrank.com/certificates/2e64258c1a8a',
        skills: 'Data Structures and Algorithms',
        picture:ProblemSolvingBasicHR,
        logo:hackerrankLogo,
        description: 'The HackerRank Problem Solving (Basic) Skills Certification is a 90-minute timed test that assesses your knowledge of fundamental data structures and algorithms, including arrays, strings, sorting, and searching, to verify and showcase your problem-solving abilities to potential employers.'
    },
    {
        id:'C7',
        name:'React (Basic)',
        organisation:'HackerRank',
        issueDate: 'May 2024',
        credentialId: 'ddbd575f08f3',
        credentialLink: 'https://www.hackerrank.com/certificates/ddbd575f08f3',
        skills: 'React',
        picture:ReactBasicHR ,
        logo:hackerrankLogo,
        description: 'The React (Basic) certification from HackerRank verifies your foundational skills in React, including basic routing, rendering elements, state management, handling events, ES6 and JavaScript, and form validation.'
    },
    {
        id:'C8',
        name:'Problem Solving (Intermediate)',
        organisation:'HackerRank',
        issueDate: 'May 2024',
        credentialId: 'c95d818fe011',
        credentialLink: 'https://www.hackerrank.com/certificates/c95d818fe011',
        skills: 'Data Structures and Algorithms',
        picture:ProblemSolvingInterHR ,
        logo:hackerrankLogo,
        description: 'The HackerRank Problem Solving (Intermediate) certification validates your proficiency in core programming concepts like data structures (hash tables, stacks, queues) and algorithms (finding optimal solutions, analyzing complexity).'
    },
    {
        id:'C9',
        name:'Node (Basic)',
        organisation:'HackerRank',
        issueDate: 'May 2024',
        credentialId: '7eb4e7df4b2e',
        credentialLink: 'https://www.hackerrank.com/certificates/7eb4e7df4b2e',
        skills: 'Node.js',
        picture: NodeBasicHR ,
        logo:hackerrankLogo,
        description: 'The HackerRank Node.js (Basic) certification assesses your understanding of fundamental Node.js concepts like modules, callbacks, and file systems.'
    },
    {
        id:'C10',
        name:'Node.js (Intermediate)',
        organisation:'HackerRank',
        issueDate: 'May 2024',
        credentialId: '126b969ce8e2',
        credentialLink: 'https://www.hackerrank.com/certificates/126b969ce8e2',
        skills: 'Node.js',
        picture:NodeInterHR ,
        logo:hackerrankLogo,
        description: 'The HackerRank Node.js (Intermediate) certification tests your ability to build scalable applications using Node.js, focusing on event-driven architecture, concurrency, and packaging.'
    },
    {
        id:'C11',
        name:'JavaScript (Basic)',
        organisation:'HackerRank',
        issueDate: 'May 2024',
        credentialId: '6a3da10e6e52',
        credentialLink: 'https://www.hackerrank.com/certificates/6a3da10e6e52',
        skills: 'JavaScript',
        picture:JavascriptBasicHR ,
        logo:hackerrankLogo,
        description: 'The HackerRank JavaScript (Basic) certification verifies your grasp of foundational JavaScript concepts like variables, functions, loops, and conditionals.'
    },
    {
        id:'C12',
        name:'JavaScript (Intermediate)',
        organisation:'HackerRank',
        issueDate: 'May 2024',
        credentialId: 'e14839634e5e',
        credentialLink: 'https://www.hackerrank.com/certificates/e14839634e5e',
        skills: 'JavaScript',
        picture:JavascriptInterHR ,
        logo:hackerrankLogo,
        description: 'The HackerRank JavaScript (Intermediate) certification validates your competency in advanced JavaScript features like asynchronous programming, object-oriented programming, and design patterns.'
    },
    {
        id:'C13',
        name:'CSS (Basic)',
        organisation:'HackerRank',
        issueDate: 'May 2024',
        credentialId: 'c48a8ffb2e03',
        credentialLink: 'https://www.hackerrank.com/certificates/c48a8ffb2e03',
        skills: 'CSS',
        picture:CSSBasicHR ,
        logo:hackerrankLogo,
        description: 'The HackerRank CSS (Basic) certification assesses your knowledge of fundamental CSS concepts for styling web pages (selectors, box model, text properties).'
    },
    {
        id:'C21',
        name:'SQL (Basic)',
        organisation:'HackerRank',
        issueDate: 'July 2024',
        credentialId: '53a26183bfa6',
        credentialLink: 'https://www.hackerrank.com/certificates/53a26183bfa6',
        skills: 'SQL - Simple Queries, Relationships, and Aggregators',
        picture: SQLBasicHR,
        logo: hackerrankLogo,
        description: 'I earned the SQL (Basic) certification from HackerRank, showcasing my foundational skills in querying and managing databases efficiently.'
    },
    {
        id:'C22',
        name:'SQL (Intermediate)',
        organisation:'HackerRank',
        issueDate: 'July 2024',
        credentialId: '4c53c6cb8b6c',
        credentialLink: 'https://www.hackerrank.com/certificates/4c53c6cb8b6c',
        skills: 'SQL - Joins, Unions, and Sub-Queries',
        picture: SQLIntermediateHR,
        logo: hackerrankLogo,
        description: 'I earned the SQL (Intermediate) certification from HackerRank, demonstrating my ability to handle complex queries, joins, and data manipulation in SQL.'
    },
    {
        id:'C23',
        name:'SQL (Advanced)',
        organisation:'HackerRank',
        issueDate: 'Aug 2024',
        credentialId: 'e81e7f8c3e9b',
        credentialLink: 'https://www.hackerrank.com/certificates/e81e7f8c3e9b',
        skills: 'SQL - Query Optimization, Data Modeling, Indexing, Window Functions, and Pivots',
        picture: SQLAdvancedHR,
        logo: hackerrankLogo,
        description: 'I earned the SQL (Advanced) certification from HackerRank, showcasing my expertise in complex SQL queries, optimization, and advanced database management techniques.'
    },
    {
        id:'C24',
        name:'Angular (Basic)',
        organisation:'HackerRank',
        issueDate: 'Aug 2024',
        credentialId: '1e7a9f75d1ed',
        credentialLink: 'https://www.hackerrank.com/certificates/1e7a9f75d1ed',
        skills: 'MVC Frameworks, Components (Angular, Dynamic, Styling), TypeScript, Two Way Binding and Form Validation.',
        picture: AngularBasicHR,
        logo: hackerrankLogo,
        description: 'I earned the Angular (Basic) certification from HackerRank, demonstrating a solid foundation in building dynamic web applications using Angular.'
    },
    {
        id:'C25',
        name:'Angular (Intermediate)',
        organisation:'HackerRank',
        issueDate: 'Aug 2024',
        credentialId: '08933a4f2891',
        credentialLink: 'https://www.hackerrank.com/certificates/08933a4f2891',
        skills: 'Routing, NgModules, Observables for data transmission and event handling, Dependency Injections, and APIs.',
        picture: AngularIntermediateHR,
        logo: hackerrankLogo,
        description: 'I earned the Angular (Intermediate) certification from HackerRank, showcasing my ability to build more advanced and scalable web applications using Angular.'
    },
    {
        id:'C26',
        name:'RestAPI (Intermediate)',
        organisation:'HackerRank',
        issueDate: 'Aug 2024',
        credentialId: '810f444bf5bc',
        credentialLink: 'https://www.hackerrank.com/certificates/810f444bf5bc',
        skills: 'Getting Data from an API and Process using Parameters or Paging.',
        picture: RestAPIIntermediateHR,
        logo: hackerrankLogo,
        description: 'I achieved the REST API (Intermediate) certification from HackerRank, demonstrating my skills in building and managing robust, efficient RESTful APIs.'
    },
    {
        id:'C14',
        name:'React + Redux',
        organisation:'Sololearn',
        issueDate: 'November 2022',
        credentialId: 'CT-5ZNQ56DF',
        credentialLink: 'https://www.sololearn.com/certificates/CT-5ZNQ56DF',
        skills: 'React, Redux',
        picture:SololearnReact ,
        logo:sololearnLogo,
        description: 'Build dynamic user interfaces with React components and manage application state effectively using Redux.'
    },
    {
        id:'C15',
        name:'Python Data Structures',
        organisation:'Sololearn',
        issueDate: 'January 2023',
        credentialId: 'CT-4NORPHE2',
        credentialLink: 'https://www.sololearn.com/certificates/CT-4NORPHE2',
        skills: 'Python, List, Tuple, Set, Dictionary',
        picture:SololearnPython ,
        logo:sololearnLogo,
        description: 'Learn core Python data structures like lists, dictionaries, and sets to organize and manipulate data efficiently.'
    },
    {
        id:'C16',
        name:'JavaScript',
        organisation:'Sololearn',
        issueDate: 'October 2022',
        credentialId: 'CT-59SOGBDB',
        credentialLink: 'https://www.sololearn.com/certificates/CT-59SOGBDB',
        skills: 'JavaScript',
        picture:SololearnJS ,
        logo:sololearnLogo,
        description: 'Grasp essential JavaScript concepts like variables, functions, and DOM manipulation, making web pages interactive.'
    },
    {
        id:'C17',
        name:'PHP',
        organisation:'Sololearn',
        issueDate: 'July 2021',
        credentialId: 'CT-NOYUEIYE',
        credentialLink: 'https://www.sololearn.com/certificates/CT-NOYUEIYE',
        skills: 'PHP',
        picture:SololearnPHP ,
        logo:sololearnLogo,
        description: 'Understand server-side scripting with PHP syntax, variables, and control flow to build dynamic web applications.'
    },
    {
        id:'C18',
        name:'CSS',
        organisation:'Sololearn',
        issueDate: 'October 2022',
        credentialId: 'CT-IALFH6A7',
        credentialLink: 'https://www.sololearn.com/certificates/CT-IALFH6A7',
        skills: 'CSS',
        picture:SololearnCSS ,
        logo:sololearnLogo,
        description: 'Style web pages using CSS selectors, properties, and layout techniques, bringing your web pages to life visually.'
    },
    {
        id:'C19',
        name:'HTML',
        organisation:'Sololearn',
        issueDate: 'July 2021',
        credentialId: 'CT-HGWUOTRB',
        credentialLink: 'https://www.sololearn.com/certificates/CT-HGWUOTRB',
        skills: 'HTML, DOM',
        picture:SololearnHTML ,
        logo:sololearnLogo,
        description: 'Build the foundation of web pages with HTML elements and structure, creating the content users see.'
    },
    {
        id:'C20',
        name:'C++',
        organisation:'Sololearn',
        issueDate: 'September 2022',
        credentialId: 'CT-XACRN9CL',
        credentialLink: 'https://www.sololearn.com/certificates/CT-XACRN9CL',
        skills: 'C++, OOP - Basic',
        picture:SololearnCpp ,
        logo:sololearnLogo,
        description: 'Master C++ syntax, control flow, and object-oriented programming fundamentals to create powerful applications.'
    },

]

export const volunteeringList = [
    {
        title: "Git and GitHub Session",
        venue:"FOSS Club of CIT",
        date:"May 2024",
        description: "Handled a session on Git and GitHub basics, imparting essential knowledge to participants and fostering their understanding of version control.",
        link:"https://helper-api-vignu.el.r.appspot.com/redirect_links/redirect/668c17bfad64e28bc9d11f70",
        photo:gitHubFoss
    },
    {
        title: "Intern 101: Smartail",
        venue:"FOSS Club of CIT",
        date:"April 2024",
        description: "Shared insights and tips on navigating the internship landscape, helping students prepare for and succeed in their internships.",
        link:"https://helper-api-vignu.el.r.appspot.com/redirect_links/redirect/668c17dcad64e28bc9d11f71",
        photo:intern101
    },
    {
        title: "JS Query",
        venue:"FOSS Club of CIT",
        date:"March 2023",
        description: "Handled a session on JavaScript basics, imparting knowledge to participants and fostering their understanding of fundamental programming concepts.",
        link:"https://helper-api-vignu.el.r.appspot.com/redirect_links/redirect/668c17f4ad64e28bc9d11f72",
        photo:jsQuery
    }
];
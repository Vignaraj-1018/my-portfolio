export const techStack = [
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg", name: "c" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg", name: "cpp" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", name: "python" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg", name: "java" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg", name: "html5" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg", name: "css3" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", name: "javascript" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", name: "typescript" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg", name: "tailwindcss" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", name: "react" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angular/angular-original.svg", name: "angular" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg", name: "flask" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg", name: "springboot" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg", name: "mongodb" },
]
import { medleyPic,attendanceProjectPic, attendanceProjectLogo, medleyLogo, mailProject } from "../assets"
export const projects=[
    {
        id:31,
        title:'Medley | Web Music Player | React | ShazamAPI',
        code:'https://github.com/Vignaraj-1018/MEDLEY-Music-Player',
        demo:'https://medley-web.netlify.app/',
        dp:medleyLogo,
        pic:medleyPic
    },
    {
        id:32,
        title:'Student Attendance System | Angular | SpringBoot',
        code:'https://github.com/Vignaraj-1018/Students-Attendance-System-Frontend',
        demo:'https://students-attendance-system.vercel.app/',
        dp:attendanceProjectLogo,
        pic:attendanceProjectPic
    },
    {
        id:33,
        title:'Mail Merchant - Mail Service Web Application | React | Python-Flask',
        code:'https://github.com/Vignaraj-1018/Mail-Merchant',
        demo:'https://mail-merchant.netlify.app/',
        dp:mailProject,
        pic:mailProject
    }
]

const leetCodeAPIUrl = "https://helper-api-vignu.el.r.appspot.com/leetcode_data"
const leetCodeUsername = "vignaraj03"
export const leetCodeProfileDataQuery = `${leetCodeAPIUrl}/my_profile/${leetCodeUsername}`;
export const leetCodeProblemsSolvedQuery = `${leetCodeAPIUrl}/solvedProblemsCount/${leetCodeUsername}`;
export const leetCodeLanguagesSolvedQuery = `${leetCodeAPIUrl}/languageProblemsCount/${leetCodeUsername}`;
export const leetCodeCalendarDataQuery = `${leetCodeAPIUrl}/calendarData/${leetCodeUsername}`;
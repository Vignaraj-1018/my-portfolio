import React from 'react'
import { github, instagram, linkedin, myPic, waveHand } from '../assets'

const Home = () => {
  return (
    <>
        <div className="flex flex-col sm:flex-row-reverse w-full justify-center items-center gap-10 sm:pt-52 pt-32">
            <div className="flex">
                <img src={myPic} alt="My Picture" className='flex w-[20rem] h-[25rem] rounded-xl' />
            </div>
            <div className="flex flex-col sm:w-[30rem] w-full gap-10 p-10 ">
                <div className="flex text-3xl font-bold gap-5 justify-center sm:justify-normal">
                    <p className="flex">Software Developer</p>
                    <img src={waveHand} alt="Waving Hand" className='sm:flex hidden h-10 w-10' />
                </div>
                <p className="flex text-xl text-slate-500 text-center sm:text-left">
                    Hi, I'm Vignaraj, A passionate Software Developer based in Coimbatore, Tamil Nadu. 📍
                </p>
                <div className="flex flex-row gap-5 items-center justify-center sm:justify-normal">
                    <a href=""><img className='flex' src={linkedin} alt="LinkedIn"/></a>
                    <a href=""><img className='flex' src={github} alt="GitHub"/></a>
                    <a href=""><img className='flex' src={instagram} alt="Instagram"/></a>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 p-10">
            <p className="flex text-xl font-bold underline-offset-4 underline">Tech Stack</p>
            <div className="flex flex-row flex-wrap gap-5 justify-center">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" className='flex h-10 w-10' />
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cpp" className='flex h-10 w-10' />
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" className='flex h-10 w-10' />
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" className='flex h-10 w-10' />
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="html5" className='flex h-10 w-10' />
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="css3" className='flex h-10 w-10' />
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" className='flex h-10 w-10' />
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" className='flex h-10 w-10' />
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" alt="tailwindcss" className='flex h-10 w-10' />
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="react" className='flex h-10 w-10' />
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/angular/angular-original.svg" alt="angular" className='flex h-10 w-10' />
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg" alt="flask" className='flex h-10 w-10' />
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg" alt="spring" className='flex h-10 w-10' />
            </div>
        </div>
    </>
  )
}

export default Home
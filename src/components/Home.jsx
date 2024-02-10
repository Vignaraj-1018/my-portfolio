import React from 'react'
import { github, instagram, linkedin, myPic, waveHand } from '../assets'
import { techStack } from '../constants'

const Home = () => {
  return (
    <div className=' sm:py-52 py-32 flex flex-col bg-slate-50'>
        <div className="flex flex-col sm:flex-row-reverse w-full justify-center items-center gap-10">
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
                    <a href="https://www.linkedin.com/in/vignaraj-d"><img className='flex' src={linkedin} alt="LinkedIn"/></a>
                    <a href="https://github.com/Vignaraj-1018"><img className='flex' src={github} alt="GitHub"/></a>
                    <a href="https://www.instagram.com/vignu_1018"><img className='flex' src={instagram} alt="Instagram"/></a>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 p-10">
            <p className="flex text-xl font-bold underline-offset-4 underline">Tech Stack</p>
            <div className="flex flex-row flex-wrap gap-5 justify-center">
                {techStack.map((item)=>(
                    <img src={item.src} key={item.name} alt={item.name} title={item.name} className='flex h-10 w-10 cursor-default' />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Home
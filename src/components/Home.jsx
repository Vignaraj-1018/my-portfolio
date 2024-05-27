import React from 'react'
import { github, hackerrank, instagram, leetCode, linkedin, myPic, waveHand } from '../assets'
import { socialMediaLink, techStack } from '../constants'

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
                {socialMediaLink.map((item)=>(
                    <a href={item.link}  key={item.name} target='_blank'><img className='flex' src={item.logo} alt={item.name}/></a>
                ))}
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
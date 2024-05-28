import React from 'react'
import { github, hackerrank, instagram, leetCode, linkedin, myPic, waveHand } from '../assets'
import { socialMediaLink, techStack } from '../constants'

const Home = () => {
  return (
    <div className=' sm:py-52 py-32 flex flex-col'>
        <div className="flex flex-col sm:flex-row-reverse w-full justify-center items-center gap-10">
            <div className="flex">
                <img src={myPic} alt="My Picture" className='flex w-[20rem] h-[25rem] rounded-xl' />
            </div>
            <div className="flex flex-col sm:w-[40rem] w-full gap-10 p-10 ">
                <div className="flex">
                    <p className="flex text-2xl">Hi, I am...</p>
                </div>
                <div className="flex flex-col gap-5">
                    <p className="flex text-6xl">Vignaraj D</p>
                    <p className="flex text-3xl font-semibold text-slate-500">Software Developer</p>
                    <p className="flex text-x text-slate-400">Building dynamic web experiences through full-stack development, a love for problem-solving, and a growth mindset, from Coimbatore, Tamil Nadu. 📍</p>
                </div>
                <div className="flex">
                    <div className="flex border-2 text-secondary border-secondary p-3 rounded-xl hover:scale-110 cursor-pointer select-none">
                        Get in touch
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="flex flex-col justify-center items-center gap-5 p-10">
            <p className="flex text-xl font-bold underline-offset-4 underline">Tech Stack</p>
            <div className="flex flex-row flex-wrap gap-5 justify-center">
                {techStack.map((item)=>(
                    <img src={item.src} key={item.name} alt={item.name} title={item.name} className='flex h-10 w-10 cursor-default' />
                ))}
            </div>
        </div> */}
    </div>
  )
}

export default Home
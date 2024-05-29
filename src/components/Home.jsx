import React from 'react'
import { github, hackerrank, instagram, leetCode, linkedin, myPic, waveHand } from '../assets'
import { socialMediaLink, techStack } from '../constants'

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row-reverse w-full justify-center items-center gap-10">
        <div className="flex">
            <img src={myPic} alt="My Picture" className='flex w-[15rem] h-[15rem] rounded-full hover:scale-150 transition' />
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
                <div className="flex border-2 text-secondary border-secondary hover:text-white hover:bg-secondary p-3 rounded-xl hover:scale-110 cursor-pointer select-none">
                    Get in touch
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
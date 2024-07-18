import React from 'react'
import { github, hackerrank, instagram, leetCode, linkedin, myPic, waveHand } from '../assets'
import { socialMediaLink, techStack } from '../constants'

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row-reverse w-full justify-center items-center gap-10">
        <div className="flex" data-aos="fade-left" data-aos-duration='1000'>
            <img src={myPic} alt="My Picture" className='flex sm:w-[15rem] sm:h-[15rem] w-[13rem] h-[13rem] rounded-full hover:scale-125 transition' />
        </div>
        <div className="flex flex-col sm:w-[60rem] w-full gap-10 p-10 " data-aos="fade-right" data-aos-duration='1000'>
            <div className="flex">
                <p className="flex text-3xl text-secondary">Hi, I am</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="flex sm:text-7xl text-4xl font-bold">Vignaraj D</p>
                <p className="flex sm:text-7xl text-4xl font-semibold text-slate-500">I build things for the web.</p>
                <p className="flex text-lg text-slate-400">I'm a full-stack web developer who gets a real kick out of unraveling complex problems and constantly expanding my skillset.  Building things isn't just a job for me, it's a journey of discovery!
                </p>
            </div>
            <div className="flex gap-5">
                {/* <a href="#contact">
                    <div className="flex border-2 text-secondary border-secondary hover:text-white hover:bg-secondary p-3 rounded-xl cursor-pointer select-none">
                        Get in touch
                    </div>
                </a> */}
                <div className="flex border-2 text-secondary border-secondary hover:text-white hover:bg-secondary p-3 rounded-xl cursor-pointer select-none" data-cal-link="vignaraj-d/30min" data-cal-namespace="30min" data-cal-config='{"layout":"month_view"}'>
                    Let's Innovate Together!
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
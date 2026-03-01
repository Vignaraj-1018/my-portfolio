import React from 'react'
import { myPic } from '../assets'

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row-reverse w-full justify-center items-center sm:gap-10">
        <div className="flex" data-aos="fade-left" data-aos-duration='1000'>
            <img src={myPic} alt="My Picture" className='flex sm:w-[15rem] sm:h-[15rem] w-[10rem] h-[10rem] rounded-full hover:scale-125 transition' />
        </div>
        <div className="flex flex-col sm:w-[60rem] w-full sm:gap-10 gap-5 p-10 " data-aos="fade-right" data-aos-duration='1000'>
            <div className="flex">
                <p className="flex text-3xl text-secondary">Hi, I am</p>
            </div>
            <div className="flex flex-col sm:gap-5 gap-2">
                <p className="flex sm:text-7xl text-lg font-bold">Vignaraj D</p>
                <p className="flex sm:text-7xl text-lg font-semibold text-slate-500">I build scalable systems for the web and cloud.</p>
                <p className="flex sm:text-lg text-sm text-slate-400 text-justify">I'm a Software Engineer with a strong full-stack foundation and hands-on experience in DevOps and cloud-native technologies. I enjoy solving complex problems, automating infrastructure, and building reliable, production-ready systems. For me, engineering is not just about writing code—it's about creating solutions that scale, evolve, and make an impact.
                </p>
            </div>
            <div className="flex gap-5">
                <div className="flex border-2 text-secondary border-secondary hover:text-white hover:bg-secondary p-3 rounded-xl cursor-pointer select-none" data-cal-link="vignaraj-d/30min" data-cal-namespace="30min" data-cal-config='{"layout":"month_view"}'>
                    Let's Innovate Together!
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
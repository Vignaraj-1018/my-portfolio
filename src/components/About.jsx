import React from 'react'
import { techStack, techStackWhite } from '../constants'

import './style.css'

const About = () => {

  return (
    <div className="flex flex-col sm:w-[60vw] w-[75vw]">
      <div className="flex flex-col gap-5">
        <div className="flex flex-row items-center gap-5">
          <p className="flex text-secondary font-bold text-3xl">About me</p>
          <div className="flex bg-secondary sm:w-56 w-36 h-px"></div>
        </div>
        <div className="flex flex-col gap-10 ">
          <div className="flex flex-col gap-3">
            <p className="flex text-slate-400 sm:text-xl text-sm text-justify">
              I'm a Software Engineer with a strong full-stack background and a growing focus on DevOps and cloud-native technologies. I enjoy breaking down complex problems, building scalable systems, and continuously expanding my skill set across both application development and infrastructure.
            </p>
            <p className="flex text-slate-400 sm:text-xl text-sm text-justify">
              My experience spans front-end and back-end development along with hands-on work in containerization, cloud platforms, and automation. I’ve validated my problem-solving skills through multiple certifications and by solving 200+ problems on LeetCode, consistently pushing myself to write better, more efficient solutions.
            </p>
            <p className="flex text-slate-400 sm:text-xl text-sm text-justify">
              I thrive in collaborative environments, enjoy tackling challenging systems, and am always eager to learn, improve, and contribute to impactful engineering work.
            </p>
          </div>
          <div className="sm:flex hidden flex-wrap flex-row gap-3 justify-start select-none">
            {techStackWhite.map((item, key)=>(
              <div className="flex gap-3 flex-auto border-slate-600 border-[1px] p-3 rounded-xl min-w-16 items-center justify-center" key={key} data-aos="fade-up" data-aos-duration='1000'>
                <img src={item.src} alt={item.name} className="flex w-8 h-8" />
                <p className="flex text-slate-200 text-lg">{item.name}</p>
              </div>
            ))}
          </div>
          <div className="flex sm:hidden flex-wrap flex-col gap-5 justify-start select-none">
            <p className="flex font-bold text-xl underline underline-offset-2 text-secondary">Tech Stack</p>
            <div className="flex flex-wrap gap-3">
              {techStack.map((item, key)=>(
                <div className="flex gap-3 flex-auto border-slate-600 border-[1px] p-3 rounded-xl items-center justify-center" key={key} data-aos="fade-up" data-aos-duration='1000'>
                  <p className="flex text-slate-200 text-xs">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
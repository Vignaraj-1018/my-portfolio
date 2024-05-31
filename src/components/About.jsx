import React, { useEffect, useState } from 'react'
import { aboutPic, internImg } from '../assets'
import axios from 'axios'
import { leetCodeProblemsSolvedQuery, leetCodeProfileDataQuery, leetCodeLanguagesSolvedQuery, leetCodeCalendarDataQuery, techStack, education } from '../constants'

import './style.css'

const About = () => {

  return (
    <div className="flex flex-col sm:w-[60vw] w-[75vw]">
      <div className="flex flex-col gap-5">
        <div className="flex flex-row items-center gap-5">
          <p className="flex text-secondary font-bold text-3xl">About me</p>
          <div className="flex border-secondary border-2 bg-secondary sm:w-56 w-36 h-1"></div>
        </div>
        <div className="flex flex-col gap-10">
          <p className="flex text-slate-400">
            Full stack web developer with a strong passion for problem-solving and continuous learning. Experienced in front-end and back-end technologies, with a knack for building robust and user-friendly applications. Dedicated to sharing knowledge and staying updated with the latest industry trends.
          </p>
          <div className="flex flex-wrap flex-row gap-3 justify-start select-none">
            {techStack.map((item, key)=>(
              <div className="flex gap-3 border-slate-600 border-[1px] p-3 rounded-xl min-w-16 items-center justify-center" key={key}>
                {/* <img src={item.src} alt={item.name} className="flex w-8 h-8" /> */}
                <p className="flex text-slate-200 text-lg">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
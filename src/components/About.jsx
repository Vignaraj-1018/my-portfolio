import React, { useEffect, useState } from 'react'
import { aboutPic, internImg } from '../assets'
import axios from 'axios'
import { leetCodeProblemsSolvedQuery, leetCodeProfileDataQuery, leetCodeLanguagesSolvedQuery, leetCodeCalendarDataQuery, techStack, education, techStackWhite } from '../constants'

import './style.css'

const About = () => {

  return (
    <div className="flex flex-col sm:w-[60vw] w-[75vw]">
      <div className="flex flex-col gap-5">
        <div className="flex flex-row items-center gap-5">
          <p className="flex text-secondary font-bold text-3xl">About me</p>
          <div className="flex border-secondary border-2 bg-secondary sm:w-56 w-36 h-1"></div>
        </div>
        <div className="flex flex-col gap-10 ">
          <div className="flex flex-col gap-3">
            <p className="flex text-slate-400">
              I'm a full-stack web developer with a knack for cracking problems and a love for learning new things.  I've honed my skills in both front-end and back-end development, and I'm certified in areas like problem-solving, JavaScript, React, NodeJS, and Python.  I even aced the HackerRank Frontend Developer certification!  And to show you I don't just talk the talk, I've actively solved over 200 problems on LeetCode (including earning the 50 Days Badge this year!) to put my skills to the test.
            </p>
            {/* <p className="flex text-slate-400">
              My passion for learning keeps me constantly expanding my knowledge.  I've taken courses on freeCodeCamp and Coursera, diving deep into back-end development, APIs, Git, and more.  This hunger for knowledge extends beyond myself - I've even hosted sessions for the FOSS Club of CIT to share my expertise on Git and GitHub.
            </p> */}
            <p className="flex text-slate-400">
              I'm a team player who thrives on tackling complex challenges and delivering effective solutions.  I'm always on the lookout for new opportunities to collaborate within the tech community and keep growing as a developer.
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
                  <p className="flex text-slate-200 text-lg">{item.name}</p>
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
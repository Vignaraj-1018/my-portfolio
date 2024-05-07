import React, { useEffect, useState } from 'react'
import { aboutPic, internImg } from '../assets'
import axios from 'axios'
import { leetCodeProblemsSolvedQuery, leetCodeProfileDataQuery, leetCodeLanguagesSolvedQuery, leetCodeCalendarDataQuery } from '../constants'

import './style.css'

const About = () => {

  return (
    <div className="flex flex-col w-full items-center gap-16 justify-center sm:p-20 p-10">
      <div className="flex flex-col sm:flex-row gap-10 justify-center">  
        <div className="flex">
          <img src={aboutPic} alt="About Me" className="flex h-[20rem] w-[25rem] rounded-xl" />
        </div>
        <div className="flex flex-col gap-7 items-center sm:items-start text-center sm:text-start sm:w-[30rem]">
          <p className="flex text-xl text-blue-500 font-bold">ABOUT ME</p>
          <p className="flex font-bold text-2xl">Software Developer <br/> based in Coimbatore, Tamil Nadu. 📍</p>
          <div className="flex gap-5 text-lg flex-col text-gray-500">
            <p className="flex">Hey there! I'm Vignaraj, a passionate software developer with a knack for turning ideas into reality through code.</p>
            <p className="flex">My journey into the world of software development began with a curiosity-driven exploration of programming languages and technologies.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col-reverse sm:flex-row gap-10 justify-center">
          <div className="flex flex-col gap-7 items-center sm:items-start text-center sm:text-start sm:w-[30rem]">
            <p className="flex text-xl text-blue-500 font-bold">Work / Intern Experience</p>
            <div className="flex font-bold flex-col items-center sm:items-start text-center sm:text-start">
              <p className="flex text-2xl"> Software Developer Intern <br/> Smartail Pvt. Ltd., Chennai📍</p>
              <p className="flex text-sx text-gray-500">Jun 2023 - Nov 2023</p>
            </div>
            <div className="flex gap-5 text-lg flex-col text-gray-500">
              <p >Developed Analytics page, Teacher Configuration, Teacher and Student Dashboard for the Student Assessment Mobile Application using <span className='font-bold'>Angular, Spring Boot, MongoDB Aggregation</span> which improved the visualization of insight analytics.</p>
              <p >Resolved various bugs in frontend and backend of the system.</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={internImg} alt="About Me" className="flex h-[20rem] w-[25rem] rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
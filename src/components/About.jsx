import React from 'react'
import { aboutPic } from '../assets'

const About = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full items-center gap-10 justify-center sm:p-20 p-10">
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
  )
}

export default About
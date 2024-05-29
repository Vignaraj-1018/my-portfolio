import React from 'react'
import { projects } from '../constants'
import { rightArrow } from '../assets'

const Projects = () => {
  return (
    <div className="flex flex-col sm:p-20 sm:px-72 gap-10">
      <div className="flex justify-center">
        <p className="flex text-3xl font-bold text-blue-500">My Projects</p>
      </div>
      <div className='flex flex-row flex-wrap gap-10 justify-center items-center'>
        {projects.map((item)=>(
          <div className="flex flex-col items-center w-[25rem] p-10 rounded-lg bg-white gap-5" key={item.id}>
            <img src={item.dp} alt={item.title} className="flex round-lg w-[15rem] h-[10rem]" />
            <p className="flex text-xl font-bold text-center">{item.title}</p>
            <div className="flex flex-row flex-wrap gap-5">
              {item.techStack.map((techStack,key)=>(
                <p key={key} className="flex text-sm font-bold border-2 border-[#535353] py-1 px-2 rounded-xl">{techStack}</p>
              ))}
            </div>
            <div className="flex justify-between items-center w-full font-bold">
              <a href={item.demo} target='_blank'>
                <div className="flex gap-2 cursor-pointer text-white justify-center flex-row bg-[#535353] py-1 px-2 rounded-xl">
                  <p className="flex">Demo</p>
                  <img src={rightArrow} alt='arrow' className="flex" />
                </div>
              </a>
              <a href={item.code} target='_blank'>
                <div className="flex gap-2 cursor-pointer text-white justify-center flex-row bg-[#535353] py-1 px-2 rounded-xl">
                  <p className="flex">Code</p>
                  <img src={rightArrow} alt='arrow' className="flex" />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
import React from 'react'
import { projects } from '../constants'
import { rightArrow } from '../assets'

const Projects = () => {
  return (
    <div className='flex flex-row flex-wrap p-10 sm:p-20 sm:px-72 bg-slate-50 gap-10 justify-center items-center'>
      {projects.map((item)=>(
        <div className="flex flex-col items-center w-[25rem] p-10 rounded-lg bg-white gap-5" key={item.id}>
          <img src={item.dp} alt={item.title} className="flex round-lg w-[15rem] h-[10rem]" />
          <p className="flex text-xl font-bold text-center">{item.title}</p>
          <div className="flex justify-between items-center w-full font-bold">
            <div className="flex gap-2 cursor-pointer" onClick={()=>(window.open(item.demo,'_blank'))}>
              <p className="flex">Demo</p>
              <img src={rightArrow} alt='arrow' className="flex" />
            </div>
            <div className="flex gap-2 cursor-pointer" onClick={()=>(window.open(item.code,'_blank'))}>
              <p className="flex">Code</p>
              <img src={rightArrow} alt='arrow' className="flex" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects
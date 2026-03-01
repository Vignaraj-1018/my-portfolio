import React from 'react'
import { education, workExp } from '../constants'

const WorkExperience = () => {
  return (
    <div className='flex flex-col gap-16 sm:w-[60vw] w-[75vw]'>
        <div className="flex flex-col gap-8" data-aos="fade-up" data-aos-duration='1000'>
            <div className="flex flex-row items-center gap-5">
                <p className="flex text-secondary font-bold text-3xl">Work Experience</p>
                <div className="flex bg-secondary sm:w-56 w-36 h-px"></div>
            </div>
            <div className="flex flex-row flex-wrap gap-5 justify-center items-center">
                {workExp.map((item, key)=>(
                    <div className="flex justify-center items-center select-none" key={key}>
                        <div className="sm:w-[30rem] flex border-slate-600 border-[1px] p-5 rounded-xl">
                            <div className="flex flex-col text-sm gap-1 font-bold text-justify">
                                {/* <div className="aspect-square w-6 bg-gray-900 rounded-full absolute -left-2 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" /> */}
                                <p className="flex sm:text-xl text-base font-extrabold">{item.name}</p>
                                <p className="font-extrabold">{item.duration}</p>
                                <p className="flex text-gray-500 dark:text-gray-400">{item.organisation}</p>
                                <p className="text-gray-500 dark:text-gray-400"><span className="underline underline-offset-2">Tech Stack and Tools:</span> {item.techStack}</p>
                            </div>
                        </div>
                    </div>    
                ))}
            </div>
        </div>
    </div>
  )
}

export default WorkExperience
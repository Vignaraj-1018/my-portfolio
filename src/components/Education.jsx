import React from 'react'
import { education, workExp } from '../constants'

const Education = () => {
  return (
    <div className='flex flex-col gap-10 sm:w-[60vw] w-[75vw]'>
        <div className="flex flex-col gap-5">
            <div className="flex flex-row items-center gap-5">
                <p className="flex text-secondary font-bold text-3xl">Work Experience</p>
                <div className="flex border-secondary border-2 bg-secondary sm:w-56 w-36 h-1"></div>
            </div>
            <div className="flex flex-col items-center gap-5">
                {workExp.map((item, key)=>(
                    <div className="flex flex-row flex-wrap gap-10 items-center" key={key}>
                        <div className="sm:flex hidden justify-start items-center thin-border">{item.duration}</div>
                        <div className="sm:flex hidden h-10 w-1 bg-secondary"></div>
                        <div className="flex flex-col gap-3 thin-border sm:w-[30rem] w-[20rem]">
                            <div className="flex flex-row justify-between">
                                <p className="flex">{item.name}</p>
                                <p className="flex text-slate-400">{item.location}</p>
                            </div>
                            <p className="flex text-slate-300 italic">{item.organisation}</p>
                            <p className="flex text-slate-500 sm:hidden">{item.duration}</p>
                            <p className="flex text-slate-500">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="flex flex-col gap-5">
            <div className="flex flex-row items-center gap-5">
                <p className="flex text-secondary font-bold text-3xl">Education</p>
                <div className="flex border-secondary border-2 bg-secondary sm:w-56 w-36 h-1"></div>
            </div>
            <div className="flex flex-col items-center gap-5">
                {education.map((item, key)=>(
                    <div className="flex flex-col gap-3 thin-border sm:w-[30rem] w-[20rem]" key={key}>
                        <div className="flex flex-row justify-between">
                            <p className="flex">{item.name}</p>
                            <p className="flex text-slate-400">{item.year}</p>
                        </div>
                        <p className="flex text-slate-300">Grade: {item.grade}</p>
                        <p className="flex text-slate-500 sm:hidden">{item.year}</p>
                        <p className="flex text-slate-500">{item.institute}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Education
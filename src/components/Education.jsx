import React from 'react'
import { education, workExp } from '../constants'

const Education = () => {
  return (
    <div className='flex flex-col gap-16 sm:w-[60vw] w-[75vw]'>
        <div className="flex flex-col gap-8" data-aos="fade-up" data-aos-duration='1000'>
            <div className="flex flex-row items-center gap-5">
                <p className="flex text-secondary font-bold text-3xl">Education</p>
                <div className="flex bg-secondary sm:w-56 w-36 h-px"></div>
            </div>
            <div className="flex justify-center items-center select-none">
                <div className="flex flex-row flex-wrap gap-10 justify-center items-center">
                    {education.map((item, key)=>(
                        <div className="flex flex-col justify-center sm:w-[30rem] sm:h-[12rem] w-[15rem] border-slate-600 border-[1px] sm:p-5 p-3 rounded-xl" key={key}>
                            <div className="sm:text-2xl text-base font-extrabold">{item.duration}</div>
                            <div className="flex flex-col gap-2 sm:text-xl text-xs font-bold">
                                <p className="flex sm:text-xl text-base">{item.name}</p>
                                <p className="flex text-gray-500 dark:text-gray-400">{item.grade}</p>
                                <p className="flex text-gray-500 dark:text-gray-400">{item.institute}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education
import React from 'react'
import { volunteeringList } from '../constants'

const Volunteer = () => {
  return (
    <div className='flex flex-col gap-16 sm:w-[60vw] w-[75vw]'>
        <div className="flex flex-col gap-8" data-aos="fade-up" data-aos-duration='1000'>
            <div className="flex flex-row items-center gap-5">
                <p className="flex text-secondary font-bold text-3xl">Volunteering Experience</p>
                <div className="flex bg-secondary sm:w-56 w-36 h-px"></div>
            </div>
            <p className="flex text-xl text-slate-400">Engaging in various volunteer activities has allowed me to share my knowledge, support community growth, and enhance my skills. Here are some of my notable contributions</p>
        </div>
        <div className="flex flex-wrap gap-5 justify-center items-center" data-aos="fade-up" data-aos-duration='1000'>
          {volunteeringList.map((item, key)=>(
            <div className="flex thin-border flex-col gap-3 !p-0 h-[30rem] w-[25rem]" key={key}>
              <img src={item.photo} alt={item.title} className="flex rounded-t-[10px] object-contain w-[25rem]" />
              <div className="flex flex-col gap-1 p-3">
                <p className="flex text-2xl font-bold">{item.title}</p>
                <p className="flex text-sm text-slate-400">{item.venue}</p>
                <p className="flex text-lg text-slate-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Volunteer
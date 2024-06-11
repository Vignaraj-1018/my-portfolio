import React from 'react'
import { education, workExp } from '../constants'

const Education = () => {
  return (
    <div className='flex flex-col gap-16 sm:w-[60vw] w-[75vw]'>
        <div className="flex flex-col gap-8">
            <div className="flex flex-row items-center gap-5">
                <p className="flex text-secondary font-bold text-3xl">Work Experience</p>
                <div className="flex border-secondary border-2 bg-secondary sm:w-56 w-36 h-1"></div>
            </div>
            <div className="flex w-full justify-center items-center select-none" data-aos="fade-up" data-aos-duration='1000'>
                <div className="relative w-[35rem] pl-10 after:absolute after:inset-y-0 after:left-3 after:top-1 after:w-2 after:bg-black dark:after:bg-gray-600 flex flex-col gap-10">
                    <div className="flex flex-col text-sm relative">
                        <div className="aspect-square w-8 bg-gray-900 rounded-full absolute -left-3 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
                        <div className="text-2xl font-extrabold">Jun 2023 - Nov 2023</div>
                        <div className="flex flex-col gap-2 text-xl font-bold">
                            <p className="flex">Software Engineer Intern</p>
                            <p className="flex text-gray-500 dark:text-gray-400">Smartail Pvt. Ltd., Chennai</p>
                            <p className="flex text-lg text-gray-500 dark:text-gray-400">6-month internship at Smartail as a Software Engineer, developing full stack applications with Angular, Spring Boot, MongoDB, and Python.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-8">
            <div className="flex flex-row items-center gap-5">
                <p className="flex text-secondary font-bold text-3xl">Education</p>
                <div className="flex border-secondary border-2 bg-secondary sm:w-56 w-36 h-1"></div>
            </div>
            <div className="flex w-full justify-center items-center select-none" data-aos="fade-up" data-aos-duration='1000'>
                <div className="relative w-[35rem] pl-10 after:absolute after:inset-y-0 after:left-3 after:top-1 after:w-2 after:bg-black dark:after:bg-gray-600 flex flex-col gap-10">
                    <div className="flex flex-col text-sm relative">
                        <div className="aspect-square w-8 bg-gray-900 rounded-full absolute -left-3 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
                        <div className="text-2xl font-extrabold">2020 - Present</div>
                        <div className="flex flex-col gap-2 text-xl font-bold">
                            <p className="flex">M.Sc. Software Systems</p>
                            <p className="flex text-gray-500 dark:text-gray-400">CGPA: 8.55 (upto 8th sem)</p>
                            <p className="flex text-gray-500 dark:text-gray-400">Coimbatore Institute of Technology, Coimbatore</p>
                        </div>
                    </div>
                    <div className="flex flex-col text-sm relative">
                        <div className="aspect-square w-8 bg-gray-900 rounded-full absolute -left-3 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
                        <div className="text-2xl font-extrabold">2018 - 2020</div>
                        <div className="flex flex-col gap-2 text-xl font-bold">
                            <p className="flex">Higher Secondary</p>
                            <p className="flex text-gray-500 dark:text-gray-400">Percentage: 84%</p>
                            <p className="flex text-gray-500 dark:text-gray-400">Bharatiya Vidya Bhavan, Coimbatore</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education
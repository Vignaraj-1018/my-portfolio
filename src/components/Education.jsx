import React from 'react'

const Education = () => {
  return (
    <div className='flex flex-col gap-16 sm:w-[60vw] w-[75vw]'>
        <div className="flex flex-col gap-8" data-aos="fade-up" data-aos-duration='1000'>
            <div className="flex flex-row items-center gap-5">
                <p className="flex text-secondary font-bold text-3xl">Work Experience</p>
                <div className="flex bg-secondary sm:w-56 w-36 h-px"></div>
            </div>
            <div className="flex w-full justify-center items-center select-none">
                <div className="relative w-[35rem] pl-10 after:absolute after:inset-y-0 after:left-3 after:top-1 after:w-1 after:bg-black dark:after:bg-gray-600 flex flex-col gap-10">
                    <div className="flex flex-col text-sm relative">
                        <div className="aspect-square w-6 bg-gray-900 rounded-full absolute -left-2 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
                        <div className="text-2xl font-extrabold">Jun 2023 - Nov 2023</div>
                        <div className="flex flex-col gap-2 text-xl font-bold">
                            <p className="flex">Software Engineer Intern</p>
                            <p className="flex text-gray-500 dark:text-gray-400">Smartail Pvt. Ltd., Chennai</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold underline underline-offset-2">Tech Stack and Tools:</span> Angular, Spring Boot, Python, MongoDB, VS Code, IntelliJ, GitLab, Docker</p>
                            <li className="text-sm text-gray-500 dark:text-gray-400">Developed Analytics page, Teacher Configuration, Teacher and Student Dashboard for the Student Assessment  Mobile Application using Angular, Spring Boot, MongoDB Aggregation which improved the visualization of insight analytics</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-8" data-aos="fade-up" data-aos-duration='1000'>
            <div className="flex flex-row items-center gap-5">
                <p className="flex text-secondary font-bold text-3xl">Education</p>
                <div className="flex bg-secondary sm:w-56 w-36 h-px"></div>
            </div>
            <div className="flex w-full justify-center items-center select-none">
                <div className="relative w-[35rem] pl-10 after:absolute after:inset-y-0 after:left-2 after:top-1 after:w-1 after:bg-black dark:after:bg-gray-600 flex flex-col gap-10">
                    <div className="flex flex-col text-sm relative">
                        <div className="aspect-square w-6 bg-gray-900 rounded-full absolute -left-3 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
                        <div className="text-2xl font-extrabold">2020 - Present</div>
                        <div className="flex flex-col gap-2 text-xl font-bold">
                            <p className="flex">M.Sc. Software Systems</p>
                            <p className="flex text-gray-500 dark:text-gray-400">CGPA: 8.65 (upto 8th sem)</p>
                            <p className="flex text-gray-500 dark:text-gray-400">Coimbatore Institute of Technology, Coimbatore</p>
                        </div>
                    </div>
                    <div className="flex flex-col text-sm relative">
                        <div className="aspect-square w-6 bg-gray-900 rounded-full absolute -left-3 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
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
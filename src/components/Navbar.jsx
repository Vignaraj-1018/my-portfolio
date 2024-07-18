import React, {useState} from 'react'
import { menuClose, menuCloseWhite, menuOpen, menuOpenWhite, myLogo } from '../assets';
import axios from 'axios';

const Navbar = () => {
    const [navToggle,setNavToggle] = useState();

    const resumeClick = () =>{
        const url = "https://helper-api-vignu.el.r.appspot.com/my_website_analytics/website_view";
        const data ={
            "name":"My Resume from Portfolio",
            "url":"https://vignaraj.netlify.app/VIGNARAJ_D.pdf"
        }
        axios.post(url,data)
        .then((resp)=>{
            // console.log(resp);
        })
        .catch((err)=>{
            console.log(err);
        });
    }
  return (
    <>
        <div className={`sm:flex hidden flex-row justify-between items-center shadow-lg p-5 px-10 top-0 left-0 w-full select-none`}>
            <a href="/#" className='flex flex-row justify-center items-center gap-5'>
                <img src={myLogo} alt="My Logo" className="flex h-10 w-10 rounded-full" data-aos="fade-down-right" data-aos-duration='800'/>
                <p className="flex text-xl font-bold cursor-pointer" data-aos="fade-down-right" data-aos-duration='600'>Vignaraj.dev</p>
            </a>
            <div className="flex flex-row items-center text-xl font-semibold gap-10">
                <a href="#about" className='relative group' data-aos="fade-down-left" data-aos-duration='600'>
                    <p className="flex cursor-pointer p-1 rounded-lg">About</p>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transition-transform transform origin-left scale-x-0 group-hover:scale-x-100"></span>
                </a>
                <a href="#leetcode" className='relative group' data-aos="fade-down-left" data-aos-duration='800'>
                    <p className="flex cursor-pointer p-1 rounded-lg">Stats</p>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transition-transform transform origin-left scale-x-0 group-hover:scale-x-100"></span>
                </a>
                <a href="#projects" className='relative group' data-aos="fade-down-left" data-aos-duration='1000'>
                    <p className="flex cursor-pointer p-1 rounded-lg">Projects</p>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transition-transform transform origin-left scale-x-0 group-hover:scale-x-100"></span>
                </a>
                <a href="#contact" className='relative group' data-aos="fade-down-left" data-aos-duration='1200'>
                    <p className="flex cursor-pointer p-1 rounded-lg">Contact</p>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transition-transform transform origin-left scale-x-0 group-hover:scale-x-100"></span>
                </a>
                <a href="/VIGNARAJ_D.pdf" target='_blank'><div className="flex justify-center items-center px-10 border-secondary border rounded-xl text-secondary hover:text-white hover:bg-secondary" data-aos="fade-down-left" data-aos-duration='1400'>Resume</div></a>
            </div>
        </div>
        <div className={`flex sm:hidden flex-row justify-between items-center shadow-lg p-5 top-0 left-0 w-full`}>
            <a href="#home" className='flex flex-row justify-center items-center gap-5'>
                <img src={myLogo} alt="My Logo" className="flex h-10 w-10 rounded-full" data-aos="fade-down-right" data-aos-duration='800'/>
                <p className="flex text-xl font-bold cursor-pointer" data-aos="fade-down-right" data-aos-duration='600'>Vignaraj.dev</p>
            </a>
            <span className="text-xl" onClick={()=>{setNavToggle(!navToggle)}}>
                <img className='flex w-10 h-10' src={menuOpenWhite} data-aos="fade-down-left" data-aos-duration='600'/>
            </span>

            {navToggle &&
            <div className="flex absolute top-0 right-0 w-[100vh] h-[100vh] z-[100] bg-[#433d3d9c]" onClick={()=>{setNavToggle(!navToggle)}}>
                <div className={`flex flex-col absolute h-[100vh] w-[10rem] top-0 right-0 bg-[#010409]`} >
                    <div className="flex justify-end text-xl mr-5 mt-5" onClick={()=>{setNavToggle(!navToggle)}}>
                        <img className='flex w-10 h-10' src={menuCloseWhite}/>
                    </div>
                    <div className="flex flex-col text-xl font-semibold gap-10 p-10">
                        <a href="#about"><p className="flex cursor-pointer hover:text-blue-700">About</p></a>
                        <a href="#projects"><p className="flex cursor-pointer hover:text-blue-700">Projects</p></a>
                        <a href="#contact"><p className="flex cursor-pointer hover:text-blue-700">Contact</p></a>
                        <a href="/VIGNARAJ_D.pdf" target='_blank' onClick={resumeClick()}><div className="flex">Resume</div></a>
                    </div>
                </div>
            </div>
            }
        
        </div>
    </>
  )
}

export default Navbar
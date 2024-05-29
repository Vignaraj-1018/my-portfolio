import React, {useState} from 'react'
import { menuClose, menuCloseWhite, menuOpen, menuOpenWhite, myLogo } from '../assets';

const Navbar = () => {
    const [navToggle,setNavToggle] = useState();
  return (
    <>
        <div className={`sm:flex hidden flex-row justify-between items-center shadow-lg p-5 px-10 top-0 left-0 w-full`}>
            <a href="#home" className='flex flex-row justify-center items-center gap-5'>
                <img src={myLogo} alt="My Logo" className="flex h-10 w-10 rounded-full"/>
                <p className="flex text-xl font-bold cursor-pointer">Vignaraj.dev</p>
            </a>
            <div className="flex flex-row items-center text-xl font-semibold gap-10">
                <a href="#about"><p className="flex cursor-pointer hover:bg-[#b1bac41f] p-1 rounded-lg">About</p></a>
                <a href="#projects"><p className="flex cursor-pointer hover:bg-[#b1bac41f] p-1 rounded-lg">Projects</p></a>
                <a href="#contact"><p className="flex cursor-pointer hover:bg-[#b1bac41f] p-1 rounded-lg">Contact</p></a>
                <a href="https://helper-api-vignu.el.r.appspot.com/redirect_links/redirect/6654d6c6accac1d31a06fe00" target='_blank'><div className="flex justify-center items-center px-10 border-secondary border rounded-xl text-secondary hover:text-white hover:bg-secondary">Resume</div></a>
            </div>
        </div>
        <div className={`flex sm:hidden flex-row justify-between items-center shadow-lg p-5 backdrop-blur-xl top-0 left-0 w-full`}>
            <a href="#home" className='flex flex-row justify-center items-center gap-5'>
                <img src={myLogo} alt="My Logo" className="flex h-10 w-10 rounded-full"/>
                <p className="flex text-xl font-bold cursor-pointer">Vignaraj.dev</p>
            </a>
            <span className="text-xl" onClick={()=>{setNavToggle(!navToggle)}}>
                <img className='flex w-10 h-10' src={menuOpenWhite}/>
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
                        <a href="https://helper-api-vignu.el.r.appspot.com/redirect_links/redirect/6654d6c6accac1d31a06fe00" target='_blank'><div className="flex">Resume</div></a>
                    </div>
                </div>
            </div>
            }
        
        </div>
    </>
  )
}

export default Navbar
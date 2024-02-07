import React, {useState} from 'react'
import { menuClose, menuOpen } from '../assets';

const Navbar = () => {
    const [navToggle,setNavToggle] = useState();
  return (
    <>
        <div className="sm:flex hidden flex-row justify-between align-center shadow-lg p-5 px-10 fixed top-0 left-0 w-full bg-white">
            <a href="#home"><p className="flex text-xl font-bold cursor-pointer">Vignaraj.dev</p></a>
            <div className="flex flex-row text-xl font-semibold gap-10">
                <a href="#home"><p className="flex cursor-pointer hover:text-blue-700">Home</p></a>
                <a href="#about"><p className="flex cursor-pointer hover:text-blue-700">About</p></a>
                <a href="#projects"><p className="flex cursor-pointer hover:text-blue-700">Projects</p></a>
                <a href="#contact"><p className="flex cursor-pointer hover:text-blue-700">Contact</p></a>
            </div>
        </div>
        <div className='flex sm:hidden flex-row justify-between align-center shadow-lg p-5 fixed top-0 left-0 w-full bg-white'>
            <a href="#home"><p className="flex text-xl font-bold cursor-pointer">Vignaraj.dev</p></a>
            <span className="text-xl" onClick={()=>{setNavToggle(!navToggle)}}>
                <img className='flex w-10 h-10' src={menuOpen}/>
            </span>

            {navToggle &&
            <div className="flex absolute top-0 right-0 w-[100vh] h-[100vh] z-[100] bg-[#433d3d9c]" onClick={()=>{setNavToggle(!navToggle)}}>
                <div className="flex flex-col absolute h-[100vh] w-[10rem] top-0 right-0 bg-white z-[200] gap-5 p-5 ">
                    <div className="flex justify-end text-xl" onClick={()=>{setNavToggle(!navToggle)}}>
                        <img className='flex w-10 h-10' src={menuClose}/>
                    </div>
                    <div className="flex flex-col text-xl font-semibold gap-10">
                        <a href="#home"><p className="flex cursor-pointer hover:text-blue-700">Home</p></a>
                        <a href="#about"><p className="flex cursor-pointer hover:text-blue-700">About</p></a>
                        <a href="#projects"><p className="flex cursor-pointer hover:text-blue-700">Projects</p></a>
                        <a href="#contact"><p className="flex cursor-pointer hover:text-blue-700">Contact</p></a>
                    </div>
                </div>
            </div>
            }
        
        </div>
    </>
  )
}

export default Navbar
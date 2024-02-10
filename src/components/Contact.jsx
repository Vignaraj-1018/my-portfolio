import React from 'react'
import { locationIcon, mailIcon } from '../assets'

const Contact = () => {
  return (
    <div className="flex flex-col p-10 sm:p-20 sm:px-72 gap-5">
      <p className="flex font-bold text-lg text-blue-500">CONTACT</p>
      <p className="flex text-2xl font-bold">Don't be shy! Hit me up! 👇</p>
      <div className="flex flex-row flex-wrap gap-10 pt-10 text-xl">
        <div className="flex gap-5 items-center">
          <img src={locationIcon} alt="location" className="flex rounded-full shadow-xl w-10 h-10 p-1" />
          <div className="flex flex-col">
            <p className="flex font-bold">Location</p>
            <p className="flex cursor-pointer text-slate-500 hover:text-blue-500">Coimbatore, Tamil Nadu</p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <img src={mailIcon} alt="mail" className="flex rounded-full shadow-xl w-10 h-10 p-1" />
          <div className="flex flex-col">
            <p className="flex font-bold">Mail</p>
            <p className="flex cursor-pointer text-slate-500 hover:text-blue-500" onClick={()=>(window.open('mailto:vignaraj03@gmail.com','_blank'))}>vignaraj03@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
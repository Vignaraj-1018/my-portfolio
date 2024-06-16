import React, { useState } from 'react'
import { certificates } from '../constants'
import { Tooltip } from "react-tooltip";

const Certificates = () => {

    const [selectedCertificate, setSelectedCertificate] = useState();

    const onClickCertificate = (item) =>{
        setSelectedCertificate(item);
    }
  return (
    <div className="flex flex-col sm:w-[60vw] w-[75vw] gap-10 relative">
        <div className="flex flex-row items-center gap-5 w-full">
            <p className="flex text-secondary font-bold text-3xl">Certificates</p>
            <div className="flex border-secondary border-2 bg-secondary sm:w-56 w-36 h-1"></div>
        </div>
        <div className="flex flex-wrap gap-10 justify-center items-center">
            {certificates.map((item, key)=>(
                <div className="flex flex-col gap-3 w-[20rem] rounded-lg thin-border cursor-pointer" key={key} data-tooltip-id={'moreInfo'} data-aos="fade-up" data-aos-duration='1000' onClick={()=>{onClickCertificate(item)}}>
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                        <img src={item.logo} alt={item.name} className="h-10 w-10 object-contain"/>
                    </div>
                    <div className="mt-4 space-y-1">
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.organisation}</p>
                    </div>
                </div>
            ))}
        </div>
        {selectedCertificate && 
            <div className="flex w-[50rem] h-[30rem] bg-primary thin-border absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-full">
                    MORE INFO
                    <span className="flex text-xl cursor-pointer" onClick={() => { setSelectedCertificate(null) }}>X</span>
                </div>
            </div>

        }
        <Tooltip id={'moreInfo'} place="top" content={'Click for More Info'} variant='info'/>
    </div>
  )
}

export default Certificates
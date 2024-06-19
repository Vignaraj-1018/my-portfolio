import React, { useState } from 'react'
import { certificates } from '../constants'
import { Tooltip } from "react-tooltip";
import { closeBtn, externalLinkWhite } from '../assets';

const Certificates = () => {

    const [selectedCertificate, setSelectedCertificate] = useState();

    const onClickCertificate = (item) =>{
        setSelectedCertificate(item);
    }

    const handleBackdropClick = (e) => {
        // Check if the clicked element is the backdrop
        if (e.target === e.currentTarget) {
          setSelectedCertificate(null);
        }
      };
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
                    <p className="flex text-xs text-slate-500 justify-center w-full">Click for More Info!</p>
                </div>
            ))}
        </div>
        {selectedCertificate &&
            <>
                <div className="flex fixed inset-0 bg-black opacity-75 z-30" onClick={(e)=>{handleBackdropClick(e)}}></div>
                <div className="flex w-full absolute z-50 justify-center">
                    <div className="w-[30rem] bg-zinc-700 rounded-[10px] !p-0" data-aos="fade-up" data-aos-duration='1000' >
                        <div className="relative w-full">
                            <div className="flex cursor-pointer absolute right-4 top-4 h-10" onClick={() => { setSelectedCertificate(null) }}>
                                <img src={closeBtn} alt="Close"/>
                            </div>
                            <div className="flex flex-col">
                                <img src={selectedCertificate.picture} className='flex rounded-t-[10px] object-contain w-[30rem]' alt="Certificate Image" />
                                <div className="flex flex-col p-4 gap-3">
                                    <p className="flex sm:text-lg text-sm">Issued on: {selectedCertificate.issueDate}</p>
                                    <p className="flex sm:text-lg text-sm">Skills: {selectedCertificate.skills}</p>
                                    <p className="flex sm:text-lg text-sm">{selectedCertificate.description}</p>
                                </div>
                                <div className="flex flex-row justify-between items-center p-2">
                                    <div className="flex flex-row sm:gap-4 bg-secondary items-center cursor-pointer p-3 rounded-3xl" onClick={()=>{window.open(selectedCertificate.credentialLink,"_blank")}}>
                                        <p className="flex sm:text-sm text-xs">Show Credential</p>
                                        <img className='flex' src={externalLinkWhite} alt="External Link"/>
                                    </div>
                                    <div className="flex text-xs flex-col sm:flex-row gap-1">
                                        <p className="flex">Credential ID:</p>
                                        <p className="flex">{selectedCertificate.credentialId}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        }
        <Tooltip id={'moreInfo'} place="top" content={'Click for More Info'} variant='info'/>
    </div>
  )
}

export default Certificates
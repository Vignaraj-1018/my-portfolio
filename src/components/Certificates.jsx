import React, { useState, useEffect, useRef } from 'react'
import { certificates } from '../constants'
import { Tooltip } from "react-tooltip";
import { closeBtn, externalLinkWhite } from '../assets';

const Certificates = () => {

    const [selectedCertificate, setSelectedCertificate] = useState();

    const onClickCertificate = (item) =>{
        setSelectedCertificate(item);
    }

    const handleBackdropClick = (e) => {
        if (e.target.classList.contains("modal-container")) {
            setSelectedCertificate(null);
        }
    };

    const initialSliceSize = 5;
    const [sliceSize, setSliceSize] = useState(initialSliceSize);
    const componentRef = useRef(null);

    const loadMore = () => {
    setSliceSize(prevSize => prevSize + initialSliceSize);
    };

    const displayedItems = certificates.slice(0, sliceSize);

    // useEffect(() => {
    // const observer = new IntersectionObserver(
    //     (entries) => {
    //     entries.forEach(entry => {
    //         if (!entry.isIntersecting) {
    //         setSliceSize(initialSliceSize);
    //         }
    //     });
    //     },
    //     { threshold: 0.1 }
    // );

    // if (componentRef.current) {
    //     observer.observe(componentRef.current);
    // }

    // return () => {
    //     if (componentRef.current) {
    //     observer.unobserve(componentRef.current);
    //     }
    // };
    // }, [componentRef]);

  return (
    <div ref={componentRef} className="flex flex-col sm:w-[60vw] w-[75vw] gap-10">
        <div className="flex flex-row items-center gap-5 w-full" data-aos="zoom-in" data-aos-duration='200'>
            <p className="flex text-secondary font-bold text-3xl">Certificates</p>
                <div className="flex bg-secondary sm:w-56 w-36 h-px"></div>
        </div>
        <div className="flex flex-wrap gap-10 justify-center items-center">
            {displayedItems.map((item, key)=>(
                <div className="flex flex-col justify-center h-[10rem] gap-5 w-[20rem] rounded-lg thin-border cursor-pointer" key={key} data-tooltip-id={'moreInfo'} data-aos="fade-up" data-aos-duration='1000' onClick={()=>{onClickCertificate(item)}}>
                    <div className="flex flex-row gap-5">
                        <div className="flex h-16 w-20 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                            <img src={item.logo} alt={item.name} className="h-10 w-10 object-contain"/>
                        </div>
                        <div className="flex flex-col gap-2 w-[15rem]">
                            <h3 className="text-lg font-semibold">{item.name}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{item.organisation}</p>
                        </div>
                    </div>
                    <p className="flex sm:hidden text-xs text-slate-500 justify-center w-full">Click for More Info!</p>
                </div>
            ))}
        </div>
        {sliceSize < certificates.length && (
            <div className="flex w-full justify-center" data-aos="fade-up" data-aos-duration='1000'>
                <div className="flex h-10 w-32 thin-border !border-secondary text-secondary cursor-pointer justify-center items-center" onClick={loadMore}>
                    Load More
                </div>
            </div>
        )}
        {selectedCertificate &&
            <div className="modal-container flex fixed left-0 justify-center items-center top-0 w-full h-full bg-[#0000008f] z-30" onClick={handleBackdropClick}>
                <div className="flex z-50 sm:w-[30em] w-[20rem] bg-zinc-700 rounded-[10px] !p-0" data-aos="zoom-in" data-aos-duration='250'>
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
        }
        <Tooltip className='sm:flex hidden' id={'moreInfo'} place="top" content={'Click for More Info'} variant='info'/>
    </div>
  )
}

export default Certificates
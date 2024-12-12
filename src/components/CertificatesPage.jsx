import React, { useEffect } from 'react'
import Certificates from './Certificates'

const CertificatesPage = () => {
    
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
    }, []);

    const goBack = () => {
        window.history.back();
    }

    return (
        <div className="flex flex-col bg-primary text-white">
            <div className="flex w-full bg-black p-5">
                <p className="flex text-xl font-bold cursor-pointer border p-2 rounded-lg hover:scale-105" onClick={goBack}>Go Back</p>
            </div>
            <div className='flex w-full justify-center items-center py-20'>
                <Certificates initialSliceSize={10000}/>
            </div>
        </div>
  )
}

export default CertificatesPage
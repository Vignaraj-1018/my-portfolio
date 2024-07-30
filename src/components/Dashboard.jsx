import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { allWebsiteViewAnalytics } from '../constants';
import Chart from './Chart';

const Dashboard = () => {
  const [viewData, setViewData] = useState();

  const getWebsiteViewAnalytics = ()=>{
    axios.get(allWebsiteViewAnalytics).then(
      (res)=>{
        setViewData(res.data);
        console.log(res.data);
      }
    )
  }
  
  useEffect(()=>{
    getWebsiteViewAnalytics();
  },[]);
  return (
    <div className="flex flex-col bg-primary text-white h-[100dvh] w-[100dvw] overflow-auto">
      <div className="flex text-4xl font-semibold justify-center bg-black p-5 underline underline-offset-3">Dashboard</div>
      <div className="flex flex-col items-center p-5">
        <div className="flex text-2xl font-semibold underline underline-offset-3">
          Website View Analytics
        </div>
        <div className="flex flex-wrap gap-10 p-10 justify-center">
          {viewData?.map((item, key)=>(
            <Chart data={item} key={key}/>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Dashboard
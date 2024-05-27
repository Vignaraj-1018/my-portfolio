import axios from 'axios';
import React, { useEffect, useState } from 'react'
import GitHubCalendar from 'react-github-calendar'


const GitHub = () => {
    const [contributions, setContributions] = useState();
    useEffect(()=>{
        axios.get('https://github-contributions-api.jogruber.de/v4/vignaraj-1018?y=last')
            .then((resp)=>{
                // console.log(resp.data);
                setContributions(resp?.data?.total?.lastYear);
            })
            .catch((err)=>{
                console.log(err);
            })
    },[]);
  return (
    <div className='flex flex-col w-full items-center gap-10 justify-center sm:p-20 p-10'>
        <div className="flex justify-center">
            <p className="flex text-3xl font-bold text-blue-500">GitHub Profile</p>
        </div>
        <div className="flex flex-row flex-wrap gap-10">
            <img src="https://github-readme-streak-stats.herokuapp.com/?user=vignaraj-1018&background=535353&theme=dark&border_radius=13&date_format=M%20j%5B%2C%20Y%5D" alt="GitHubStreakStats" onClick={() => { window.open("https://helper-api-vignu.el.r.appspot.com/redirect_links/redirect/66549f1e9631d5480b281d09", "_blank") }} />
            <img src="https://github-readme-stats.vercel.app/api?username=vignaraj-1018&show_icons=true&theme=dark&bg_color=535353&icon_color=FFF&text_color=FFF&border_radius=13" alt="GitHubStats" onClick={() => { window.open("https://helper-api-vignu.el.r.appspot.com/redirect_links/redirect/66549f1e9631d5480b281d09", "_blank") }} />
        </div>
        <p className="flex justify-center text-xl gap-3">
            <span className="flex font-bold">{contributions}</span> <span className='flex'>contributions in the last year</span>
        </p>
        <GitHubCalendar username="vignaraj-1018" blockSize={10} colorScheme='light' hideTotalCount hideColorLegend style={{backgroundColor:"#535353", padding:"20px", borderRadius:"10px", color:"white"}} fontSize={10} showWeekdayLabels={true}/>
    </div>
  )
}

export default GitHub
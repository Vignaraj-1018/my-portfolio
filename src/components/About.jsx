import React, { useEffect, useState } from 'react'
import { aboutPic, internImg } from '../assets'
import axios from 'axios'
import { leetCodeProblemsSolvedQuery, leetCodeProfileDataQuery, leetCodeLanguagesSolvedQuery, leetCodeCalendarDataQuery } from '../constants'

const About = () => {

  const [leetCodeProfileData,setLeetCodeProfileData] = useState()
  const [leetCodeSolved,setLeetCodeSolved] = useState()
  const [leetCodeLanguagesSolved,setLeetCodeLanguagesSolved] = useState()
  const [displaySolvedPercentage,setDisplaySolvedPercentage] = useState(false)
  const [leetCodeCalendarData,setLeetCodeCalendarData] = useState()

  let solvedProblemsColors = [
    {"type":"Easy","bg_color":"bg-emerald-700","bar_color":"bg-emerald-500"},
    {"type":"Medium","bg_color":"bg-yellow-700","bar_color":"bg-yellow-500"},
    {"type":"Hard","bg_color":"bg-red-700","bar_color":"bg-red-500"}
  ]

  const getLeetCodeProfileData = async () => {
    await axios.get(leetCodeProfileDataQuery)
    .then((resp)=>{
      // console.log(resp);
      setLeetCodeProfileData(resp.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  const getLeetCodeSolved = async () => {
    await axios.get(leetCodeProblemsSolvedQuery)
    .then((resp)=>{
      // console.log(resp);
      setLeetCodeSolved(resp.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  const getLeetCodeLanguagesSolved = async () => {
    await axios.get(leetCodeLanguagesSolvedQuery)
    .then((resp)=>{
      // console.log(resp);
      setLeetCodeLanguagesSolved(resp.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  const getCalendarData = async () =>{
    await axios.get(leetCodeCalendarDataQuery)
    .then((resp)=>{
      // console.log(resp);
      setLeetCodeCalendarData(resp.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    getLeetCodeProfileData();
    getLeetCodeSolved();
    getLeetCodeLanguagesSolved();
    getCalendarData();
  },[]);

  const handleMouseOver = () => {
    setDisplaySolvedPercentage(true);
  };

  const handleMouseOut = () => {
    setDisplaySolvedPercentage(false);
  };

  const getSolvedProblemsBgColor = (item)=>{
    console.log(item);
    let bgColor = solvedProblemsColors.filter((i)=>i.type === item.type);
    console.log(bgColor)
    return bgColor[0].bg_color;
  }

  const getSolvedProblemsBarColor = (item)=>{
    console.log(item);
    let bgColor = solvedProblemsColors.filter((i)=>i.type === item.type);
    console.log(bgColor)
    return bgColor[0].bar_color;
  }

  const getBarWidth = (percentage) => {
    return `w-[${percentage.toFixed(1)}%]`;
  }

  console.log(leetCodeProfileData, leetCodeSolved, leetCodeLanguagesSolved, leetCodeCalendarData);

  return (
    <div className="flex flex-col w-full items-center gap-16 justify-center sm:p-20 p-10">
      <div className="flex flex-col sm:flex-row gap-10 justify-center">  
        <div className="flex">
          <img src={aboutPic} alt="About Me" className="flex h-[20rem] w-[25rem] rounded-xl" />
        </div>
        <div className="flex flex-col gap-7 items-center sm:items-start text-center sm:text-start sm:w-[30rem]">
          <p className="flex text-xl text-blue-500 font-bold">ABOUT ME</p>
          <p className="flex font-bold text-2xl">Software Developer <br/> based in Coimbatore, Tamil Nadu. 📍</p>
          <div className="flex gap-5 text-lg flex-col text-gray-500">
            <p className="flex">Hey there! I'm Vignaraj, a passionate software developer with a knack for turning ideas into reality through code.</p>
            <p className="flex">My journey into the world of software development began with a curiosity-driven exploration of programming languages and technologies.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col-reverse sm:flex-row gap-10 justify-center">
          <div className="flex flex-col gap-7 items-center sm:items-start text-center sm:text-start sm:w-[30rem]">
            <p className="flex text-xl text-blue-500 font-bold">Work / Intern Experience</p>
            <div className="flex font-bold flex-col items-center sm:items-start text-center sm:text-start">
              <p className="flex text-2xl"> Software Developer Intern <br/> Smartail Pvt. Ltd., Chennai📍</p>
              <p className="flex text-sx text-gray-500">Jun 2023 - Nov 2023</p>
            </div>
            <div className="flex gap-5 text-lg flex-col text-gray-500">
              <p >Developed Analytics page, Teacher Configuration, Teacher and Student Dashboard for the Student Assessment Mobile Application using <span className='font-bold'>Angular, Spring Boot, MongoDB Aggregation</span> which improved the visualization of insight analytics.</p>
              <p >Resolved various bugs in frontend and backend of the system.</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={internImg} alt="About Me" className="flex h-[20rem] w-[25rem] rounded-xl" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex justify-center">
          <p className="flex text-3xl font-bold text-blue-500">LeetCode Profile</p>
        </div>
        <div className="flex flex-row flex-wrap gap-10 justify-center">
          <div className="flex flex-row gap-5 bg-[#535353] p-5 rounded-xl text-white items-center w-[20rem]">
            <img src={leetCodeProfileData?.profile.userAvatar} alt="LeetCode Profile" className='flex rounded-xl h-28' />
            <div className="flex flex-col gap-5">
              <div className="flex flex-col">
                <p className='flex text-xl font-bold'>{leetCodeProfileData?.profile.realName}</p>
                <p className='flex'>{leetCodeProfileData?.username}</p>
              </div>
              <div className="flex flex-row justify-center items-center gap-2">
                <p className='flex'>Rank</p>
                <p className='flex text-xl font-bold'>{leetCodeProfileData?.profile.ranking}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-[#535353] gap-3 p-5 rounded-xl text-white w-[20rem]">
            <div className="flex flex-row justify-between">
              <p className="flex text-xl text-bold">Languages</p>
            </div>
            {leetCodeLanguagesSolved && leetCodeLanguagesSolved.languageProblemCount.map((item)=>(
              <div className="flex flex-row justify-between items-center gap-10" key={item.languageName}>
                <p className="flex text-sm p-1 bg-[#818181] rounded-lg">{item.languageName}</p>
                <p className="flex items-center gap-1"> <span className="flex text-lg font-bold">{item.problemsSolved}</span> <span className="flex text-xs">Problems Solved</span></p>
              </div>
            ))}
          </div>

          <div className="flex flex-col bg-[#535353] gap-3 p-5 rounded-xl text-white w-[25rem]">
            <div className="flex flex-row justify-between">
              <p className="flex text-xl text-bold">Solved Problems</p>
            </div>
            <div className="flex flex-row gap-10 items-center">
              <div className="flex justify-center items-center cursor-default">
                <div className="flex border-2 border-[#312E2E] w-28 h-28 rounded-full justify-center items-center" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                  {!displaySolvedPercentage && <p className="flex text-lg font-bold" >{leetCodeSolved?.totalQuestionSolved}</p>}
                  {displaySolvedPercentage && <p className="flex text-lg font-bold" >{leetCodeSolved?.percentageSolved.toFixed(1)}%</p>}
                </div>
              </div>
              <div className="flex flex-col gap-5 w-full">
                {leetCodeSolved?.difficultyWise.map((item,key)=>(
                  <div className="flex flex-col" key={key}>
                    <div className="flex flex-row justify-between">
                      <div className="flex items-center">
                        <p className="flex text-xs">{item.type}</p>
                      </div>
                      <div className="flex items-center">
                        <p className="flex text-lg font-semibold">{item.solved}</p>
                        <p className="flex text-xs">/{item.total}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="flex text-xs">Beats</p>
                        <p className="flex text-sm">{item.beats.toFixed(1)}%</p>
                      </div>
                    </div>
                    <div className={`flex h-2 w-full rounded-xl ${getSolvedProblemsBgColor(item)}`}>
                      <div className={`flex h-2 rounded-xl ${getSolvedProblemsBarColor(item)}`} style={{width:`${item.percentage}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-10 text-xl ">
          <div className="flex gap-3 items-center justify-center">
            <p className="flex">Total Active Days: </p>
            <p className="flex text-2xl font-bold">{leetCodeCalendarData?.totalActiveDays}</p>
          </div>
          <div className="flex gap-3 items-center justify-center">
            <p className="flex">Max Streak: </p>
            <p className="flex text-2xl font-bold">{leetCodeCalendarData?.streak}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
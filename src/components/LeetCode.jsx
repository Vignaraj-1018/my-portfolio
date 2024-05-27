import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { leetCodeProfileDataQuery, leetCodeProblemsSolvedQuery, leetCodeLanguagesSolvedQuery, leetCodeCalendarDataQuery } from '../constants'
import moment from 'https://cdn.skypack.dev/moment?min';
import Timeline from './TimeLine';
import "./LeetCode.scss";
const LeetCode = () => {
    const [leetCodeProfileData,setLeetCodeProfileData] = useState()
    const [leetCodeSolved,setLeetCodeSolved] = useState()
    const [leetCodeLanguagesSolved,setLeetCodeLanguagesSolved] = useState()
    const [leetCodeCalendarData,setLeetCodeCalendarData] = useState()

    const [chartDates, setChartDates] = useState()
    const [chartValues, setChartValues] = useState()
    const [showChart, setShowChart] = useState(false);

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
            const { dates, submissionCounts } = parseSubmissionCalendar(resp.data.submissionCalendar);
            // console.log(dates, submissionCounts, submissionCounts.reduce((acc, currentValue) => acc + currentValue, 0));
            prepareCalendarData(dates, submissionCounts);
        })
        .catch((err)=>{
        console.log(err);
        })
    }

    
    
    const getSolvedProblemsBgColor = (item)=>{
        // console.log(item);
        let bgColor = solvedProblemsColors.filter((i)=>i.type === item.type);
        // console.log(bgColor)
        return bgColor[0].bg_color;
    }
    
    const getSolvedProblemsBarColor = (item)=>{
        // console.log(item);
        let bgColor = solvedProblemsColors.filter((i)=>i.type === item.type);
        // console.log(bgColor)
        return bgColor[0].bar_color;
    }

    // console.log(leetCodeProfileData, leetCodeSolved, leetCodeLanguagesSolved, leetCodeCalendarData);
    
    const parseSubmissionCalendar = (submissionCalendar) => {
        const calendarData = JSON.parse(submissionCalendar);
        
        const formattedData = Object.entries(calendarData).reduce((obj, [timestamp, count]) => {
            const date = new Date(parseInt(timestamp) * 1000);
            const formattedDate = new Intl.DateTimeFormat('en', { day: '2-digit', month: '2-digit', year: '2-digit' }).format(date);
            obj[formattedDate] = count;
            return obj;
        }, {});
        
        const dates = Object.keys(formattedData);
        const submissionCounts = Object.values(formattedData);
        setShowChart(true);
        
        return { dates, submissionCounts };
    };

    const prepareCalendarData = (dates, submissionCounts) =>{
        let startDate = moment().add(-365, 'days');
        let dateRange = [startDate, moment()];

        // Map the provided dates and submissions into Moment.js objects
        let calendarData = dates.map((date, index) => ({
        date: moment(date, 'MM/DD/YY'), // Parse the date string using the specified format
        value: submissionCounts[index]
        }));

        // Combine the generated data and the calendar data
        let data = Array.from(new Array(365)).map((_, index) => {
            let currentDate = moment(startDate).add(index, 'day');
            let foundData = calendarData.find(item => item.date.isSame(currentDate, 'day'));
            return {
                date: currentDate,
                value: foundData ? foundData.value : 0 // Use provided submission count if available, otherwise generate random value
            };
        });

        setChartDates(dateRange);
        setChartValues(data);
        // console.log(dateRange, data);
    }
    
    useEffect(()=>{
        getLeetCodeProfileData();
        getLeetCodeSolved();
        getLeetCodeLanguagesSolved();
        getCalendarData();
    },[]);
    
    return (
        <div className='flex flex-col w-full items-center gap-16 justify-center sm:p-20 p-10 bg-slate-50'>
            <div className="flex flex-col gap-10">
                <div className="flex justify-center">
                    <p className="flex text-3xl font-bold text-blue-500">LeetCode Profile</p>
                </div>
                <div className="flex flex-row flex-wrap gap-10 justify-center">
                    <div className="flex flex-row gap-5 bg-[#535353] p-5 rounded-xl text-white items-center cursor-pointer w-[20rem] h-[16rem]" onClick={() => { window.open("https://helper-api-vignu.el.r.appspot.com/redirect_links/redirect/66549f0a1a0309060e2557f7", "_blank") }}>
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

                    <div className="flex flex-col bg-[#535353] gap-3 p-5 rounded-xl text-white cursor-pointer w-[20rem] h-[16rem]" onClick={() => { window.open("https://helper-api-vignu.el.r.appspot.com/redirect_links/redirect/66549f0a1a0309060e2557f7", "_blank") }}>
                        <div className="flex flex-row justify-between">
                            <p className="flex text-xl font-bold">Languages</p>
                        </div>
                        <div className="flex flex-col gap-3 overflow-auto px-1 scroll-bar">
                            {leetCodeLanguagesSolved && leetCodeLanguagesSolved.languageProblemCount.map((item) => (
                                <div className="flex flex-row justify-between items-center gap-10" key={item.languageName}>
                                    <p className="flex text-sm p-1 bg-[#818181] rounded-lg">{item.languageName}</p>
                                    <p className="flex items-center gap-1"> <span className="flex text-lg font-bold">{item.problemsSolved}</span> <span className="flex text-xs">Problems Solved</span></p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col bg-[#535353] gap-3 p-5 rounded-xl text-white cursor-pointer w-[20rem] h-[16rem]" onClick={() => { window.open("https://helper-api-vignu.el.r.appspot.com/redirect_links/redirect/66549f0a1a0309060e2557f7", "_blank") }}>
                        <div className="flex flex-row items-center gap-10 justify-between">
                            <p className="flex text-xl font-bold">Solved Problems</p>
                            <p className="flex items-center gap-2" >
                                <span className="flex text-xl">Total:</span>
                                <span className="flex text-xl font-bold">{leetCodeSolved?.totalQuestionSolved}</span>
                            </p>
                        </div>
                        <div className="flex flex-row gap-10 items-center">
                            <div className="flex flex-col gap-5 w-full">
                                {leetCodeSolved?.difficultyWise.map((item, key) => (
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
                                            <div className={`flex h-2 rounded-xl ${getSolvedProblemsBarColor(item)}`} style={{ width: `${item.percentage}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap justify-center gap-5 text-xl ">
                    <div className="flex gap-3 items-center justify-center">
                        <p className="flex">Total Active Days: </p>
                        <p className="flex text-2xl font-bold">{leetCodeCalendarData?.totalActiveDays}</p>
                    </div>
                    <div className="flex gap-3 items-center justify-center">
                        <p className="flex">Max Streak: </p>
                        <p className="flex text-2xl font-bold">{leetCodeCalendarData?.streak}</p>
                    </div>
                </div>
                <div className="flex sm:justify-center sm:w-full w-[20rem] overflow-auto">
                    {showChart && <Timeline range={chartDates} data={chartValues} colorFunc={({ alpha }) => `rgba(0, 256, 0, ${alpha})`}/>}
                </div>
            </div>
        </div>
    )
}

export default LeetCode
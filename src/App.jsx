import React,{useEffect, useState} from 'react'
import { Contact, Home, Navbar, Projects, About, LeetCode } from './components'
import { githubWhite, instagramWhite, leetCodeWhite, linkedinWhite} from './assets'
import axios from 'axios';

const App = () => {
  const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);

    const sendViewAnalytics=()=>{
      const url = "https://helper-api-vignu.el.r.appspot.com/my_website_analytics/website_view";
      const data ={
        "name":"My Portfolio",
        "url":"https://vignaraj.netlify.app/"
      }
      axios.post(url,data)
      .then((resp)=>{
        console.log(resp);
      })
      .catch((err)=>{
        console.log(err);
      });
    }

    useEffect(()=>{
      const sessionData = window.sessionStorage.getItem("analyticsSent");
      if (sessionData){
        // console.log("old Session");
      }
      else{
        sendViewAnalytics();
        // console.log("new Session");
        window.sessionStorage.setItem("analyticsSent",true);
      }
    },[])

  return (
    <>
      <div className="flex flex-col h-full w-full font-sans ">
        <Navbar colorChange={colorChange}/>
      </div>
      <section id="home">
        <Home/>
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="leetcode">
        <LeetCode/>
      </section>
      <section id="projects">
        <Projects/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
      <div className="flex sm:flex-row flex-col justify-between w-full bg-[#2d2e32] text-white sm:px-72 p-10 gap-5">
        <p className="flex sm:text-xl text-base justify-center font-bold">Copyright © 2024. All rights are reserved</p>
        <div className="flex flex-row gap-5 items-center justify-center sm:justify-normal">
            <a href="https://leetcode.com/vignaraj03/"><img className='flex' src={leetCodeWhite} alt="GitHub"/></a>
            <a href="https://github.com/Vignaraj-1018"><img className='flex' src={githubWhite} alt="GitHub"/></a>
            <a href="https://www.linkedin.com/in/vignaraj-d"><img className='flex' src={linkedinWhite} alt="LinkedIn"/></a>
            <a href="https://www.instagram.com/vignu_1018"><img className='flex' src={instagramWhite} alt="Instagram"/></a>
        </div>
      </div>
    </>
  )
}

export default App
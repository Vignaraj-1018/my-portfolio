import React,{useEffect, useState} from 'react'
import { Contact, Home, Navbar, Projects, About, LeetCode, GitHub, Education, Certificates, Volunteer, Loader } from './components'
import axios from 'axios';
import { socialMediaWhiteLink } from './constants';
import { Tooltip } from "react-tooltip";

const App = () => {
  const sendViewAnalytics=()=>{
    const url = "https://helper-api-vignu.el.r.appspot.com/my_website_analytics/website_view";
    const data ={
      "name":"My Portfolio",
      "url":"https://vignaraj.netlify.app/"
    }
    axios.post(url,data)
    .then((resp)=>{
      // console.log(resp);
    })
    .catch((err)=>{
      console.log(err);
    });
  }
  
   const [loading, setLoading] = useState(true); 

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },2000);
    const sessionData = window.sessionStorage.getItem("analyticsSent");
    if (sessionData){
      // console.log("old Session");
    }
    else{
      sendViewAnalytics();
      // console.log("new Session");
      window.sessionStorage.setItem("analyticsSent",true);
    }
    const handleScroll = () => {
      var prevScrollY = window.scrollY; // Store previous scroll position

      window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const scrollDirection = currentScrollY > prevScrollY ? 'down' : 'up'; // Check direction
        var navbar = document.getElementById('navbar');

        if(scrollDirection === 'up'){
          // console.log('scroll up');
          // console.log(navbar);
          navbar.classList.add('translate-y-0');
          navbar.classList.remove('-translate-y-20');
        }
        else{
          // console.log('scroll down');
          navbar.classList.add('-translate-y-20');
          navbar.classList.remove('translate-y-0');
        }
        prevScrollY = currentScrollY; // Update previous scroll position
      });
    };

    handleScroll(); // Call initially to set starting direction

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[]);

  return (
    <div className='flex flex-col bg-primary text-white gap-40'>

      {loading && <Loader></Loader>}
      {!loading && <>
        <div className="sm:flex flex-col justify-center items-center p-5 hidden bottom-0 fixed left-12 gap-5" data-aos="fade-right" data-aos-duration='1500'>
          <div className="flex flex-col gap-5 select-none">
            {socialMediaWhiteLink.map((item, key)=>(
              <a href={item.link} key={key} data-tooltip-id={item.id}>
                <img src={item.logo} alt={item.name}/>
              </a>
            ))}
          </div>
          <div className="flex w-1 border bg-white h-32"></div>
        </div>
        <div className="sm:flex flex-col justify-center items-center p-5 hidden bottom-0 fixed right-12 gap-5" data-aos="fade-left" data-aos-duration='1500'>
          <span className='flex text-vertical'>vignaraj03@gmail.com</span>
          <div className="flex w-1 border bg-white h-32"></div>
        </div>
        <div className="flex w-full bg-black sm:backdrop-blur-3xl fixed transition duration-200 ease-in-out z-50" id='navbar'>
          <Navbar/>
        </div>
        <section id="home" className='page sm:p-0 pt-24'>
          <Home/>
        </section>
        <section id="about" className='page'>
          <About/>
        </section>
        <section id="education" className='page'>
          <Education/>
        </section>
        <section id="leetcode" className='page'>
          <LeetCode/>
        </section>
        <section id='github' className='page'>
          <GitHub/>
        </section>
        <section id='certificates' className='page'>
          <Certificates initialSliceSize={5}/>
        </section>
        <section id="projects" className='page'>
          <Projects/>
        </section>
        <section id='volunteer' className='page'>
          <Volunteer/>
        </section>
        <section id="contact" className='page'>
          <Contact/>
        </section>
        <div className="flex sm:flex-row flex-col justify-between w-full text-white sm:px-72 p-10 gap-5">
          <p className="flex sm:text-xl text-base justify-center font-bold">Copyright © 2024. Innovating with Passion.</p>
          <div className="flex flex-row gap-5 items-center justify-center sm:justify-normal">
            {socialMediaWhiteLink.map((item)=>(
              <a href={item.link}  key={item.name} target='_blank'><img className='flex' src={item.logo} alt={item.name}/></a>
            ))}
          </div>
        </div>
        {socialMediaWhiteLink.map((item,key)=>(
          <Tooltip id={item.id} key={key} place="right" content={item.name} variant='info'/>
        ))}
      </>}
    </div>
  )
}

export default App
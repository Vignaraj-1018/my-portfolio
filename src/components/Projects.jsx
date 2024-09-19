import React, { useEffect, useState } from 'react'
import { projects } from '../constants'
import { externalLinkWhite, globeWhite } from '../assets'
import axios from 'axios'

const Projects = () => {

  const getViewCount = async (id) => {
    try {
      const resp = await axios.get(`https://helper-api-vignu.el.r.appspot.com/my_website_analytics/get_view_count?id=${id}`);
      return resp.data.view_count;
    } catch (err) {
      console.log(err);
      return '0';
    }
  };
  
  const prepareData = async () => {
    let data = [...projects];
  
    const updatedData = await Promise.all(
      data.map(async (project) => {
        const view_count = await getViewCount(project.dataId);
        return {
          ...project,
          view_count,
        };
      })
    );
  
    return updatedData;
  };

  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const updatedProjects = await prepareData();
      setProjectsData(updatedProjects);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col sm:w-[60vw] w-[75vw] gap-10">
      <div className="flex flex-row items-center gap-5 w-full" data-aos="zoom-in" data-aos-duration='200'>
        <p className="flex text-secondary font-bold text-3xl">Projects</p>
                <div className="flex bg-secondary sm:w-56 w-36 h-px"></div>
      </div>
      <div className="flex flex-row flex-wrap gap-3 items-center justify-center">
        {projectsData.map((project, key)=>(
          <div className="flex flex-col gap-4 thin-border w-[30rem] cursor-pointer select-none" key={key} onClick={()=>window.open(project.code, "_blank")} data-aos="fade-up" data-aos-duration='1000'>
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-row gap-3">
                <img src={globeWhite} alt="Website" />
                <p className="flex text-xl font-bold">{project.title}</p>
              </div>
              <a href={project.demo} target='_blank'><img src={externalLinkWhite} alt="External Link" className='flex hover:scale-110'/></a>
            </div>
            <p className="flex text-slate-400 sm:h-[5rem]">{project.description}</p>
            <div className="flex flex-wrap flex-row gap-2">
              {project.techStack.map((item, key)=>(
                <div className="flex p-1 bg-[#3aabfd1a] text-secondary text-semibold text-lg rounded-xl" key={key}>{item}</div>
              ))}
            </div>
            <div className="flex flex-row gap-2 text-sm">
              <span className="flex">Live View Count: </span>
              <span className="flex">{project.view_count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
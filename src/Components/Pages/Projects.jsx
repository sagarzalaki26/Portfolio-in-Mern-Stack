import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  FaProjectDiagram
} from 'react-icons/fa';



const Projects = () => {
    const [projects,setProjects]=useState([]);
    
    useEffect(()=>{

        const fetchProjects=async()=>{
            try{
            const res=await axios.get('http://localhost:3001/projects');
            setProjects(res.data);
            }
        
        catch(error){
            console.error(error);
        }
    }
    fetchProjects();
    },[])
    return (
        <section id="projects" className=" bg-gray-950" data-aos="fade-up">
            <div className=' max-w-6xl mx-auto p-8 text-center text-white'>
                <h2 className="text-4xl font-bold mb-6 text-purple-400">My Projects</h2>
                <p className="text-lg mb-8 opacity-80">Some of my recent work</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-lg shadow-xl transition-transform hover:scale-105"
                        >
                            <div className="text-4xl mb-4 flex justify-center  "> <FaProjectDiagram size={28} color='green' /></div>
                            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                            <p className="mb-4 opacity-80">{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-white font-semibold inline-block"
                            >
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

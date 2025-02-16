import React from 'react'
import shlokImage from '../assets/images/shlok.png'
import simpleyelpcampImage from '../assets/images/simpleyelpcamp.png'
import taskkittyImage from '../assets/images/taskkitty.png'
import ascentrixImage from '../assets/images/Ascentrix.png'
import fianchettoImage from '../assets/images/Fianchetto.png'
import arrow from '../assets/icons/arrow.svg'

const projects = [
  {
    name: "Shlok",
    description: "Shlok is a full-stack platform built to preserve, explore, and share the spiritual and historical essence of Sanatan Dharma (Hinduism). It is designed for devotees, scholars, and enthusiasts who seek easy access to sacred texts, devotional hymns, and historical knowledge in one interactive and engaging space.",
    image: shlokImage,
    color: "bg-blue-300",
    link: "https://theshlok.onrender.com/"
  },
  {
    name: "Ascentrix",
    description: "Ascentrix is a collaborative platform designed to connect innovators, developers, and creators by enabling them to showcase projects, find contributors, and build powerful teams. It streamlines the process of turning ideas into reality by allowing project owners to list their requirements and connect with skilled individuals.",
    image: ascentrixImage,
    color: "bg-green-300",
    link: ""
  },
  {
    name: "Taskkitty",
    description: "TaskKitty is a productivity-focused platform designed to help individuals and teams efficiently manage projects, break down tasks, and stay on track with AI-driven assistance. Whether you're working solo or collaborating with a team, TaskKitty ensures smooth project execution with structured task management and intelligent reminders.",
    image: taskkittyImage,
    color: "bg-red-300",
    link: ""
  },
  {
    name: "Fianchetto",
    description: "Fianchetto is a full-stack chess platform designed for both beginners and experienced players to learn, play, and master chess. Whether you want to challenge friends, play against random opponents, or study openings and strategies, Fianchetto provides an immersive and interactive chess experience.",
    image: fianchettoImage,
    color: "bg-purple-300",
    link: ""
  },
  {
    name: "SimpleYelpCamp",
    description: "SimpleYelpCamp is a full-stack web application designed for outdoor enthusiasts to explore, review, and share camping experiences. Inspired by the functionality of Yelp, it provides a platform where users can discover campgrounds, leave reviews, and contribute their own listings.",
    image: simpleyelpcampImage,
    color: "bg-stone-300",
    link: "https://simpleyelpcamp.onrender.com/"
  },
]

const Projects = () => {
  return (
    <div className='m-4 sm:m-6 md:m-8 lg:m-10 flex flex-col'>
      <h1 className='text-2xl sm:text-3xl font-semibold'>My Work 🚀</h1>
      <p className='mt-4 text-base sm:text-lg w-full sm:w-[80%]'>
        Welcome To My Mad Scientist Lab, Where I Experiment With Different Technologies And Create Cool Stuff. You Can See Everything I Created Or Working On Here. Explore Till Your Heart's Content.
      </p>
      <div className="showcase flex flex-wrap gap-6 sm:gap-8 lg:gap-10 mt-8">
        {projects.map((project) => (
          <div 
            className={`card p-6 sm:p-10 lg:p-20 flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-10 rounded-lg shadow-md bg-opacity-50 w-full ${project.color}`} 
            key={project.name}
          >
            <img 
              src={project.image} 
              alt="" 
              className='w-full lg:w-96 h-48 sm:h-60 object-contain rounded-md'
            />
            <div className="description flex flex-col gap-4 sm:gap-7">
              <h1 className='text-lg sm:text-xl font-semibold'>{project.name}</h1>
              <p className='w-auto text-base sm:text-lg'>{project.description}</p>
              {project.link && (
                <h2>
                  <a 
                    href={project.link} 
                    target='_blank' 
                    rel="noreferrer" 
                    className='text-black font-semibold text-sm sm:text-md flex items-center gap-2 sm:gap-3'
                  >
                    Check It Out <span><img src={arrow} alt="-->" /></span>
                  </a>
                </h2>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
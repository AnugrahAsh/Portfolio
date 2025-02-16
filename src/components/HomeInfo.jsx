import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../assets/icons/arrow.svg'

const InfoBox = ({ text, link, btnText }) => {
    return (
      <div
        className="sm:text-md sm:leading-snug text-center
        bg-blue-500 border-b-3 border-r-3 mb-20 border-blue-600 shadow-2xs 
        rounded-xl py-4 px-8 pb-7 text-white mx-5 w-100"
      >
        <p className="mb-8 font-medium sm:text-xl text-center">{text}</p>
        <Link
          to={link}
          className="btn text-center bg-white rounded-xl text-blue-500 px-8 w-80 py-2 inline-flex items-center justify-center gap-2"
        >
          {btnText}
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
}

const renderContent = {
    1: (
        <h1 className='sm:text-md sm:leading-snug text-center
        bg-blue-500 border-b-3 border-r-3 mb-20 border-blue-600 shadow-2xs rounded-xl py-4 px-8 text-white mx-5'>
            Hello, I am <span className='font-semibold'>Anugrah</span>👋
            <br />
            An Engineering Student From India 
        </h1>
    ),
    2: (
        <InfoBox 
            text="I Do A Lot Off Stuff When I Am Bored, Like I Love To Code, Play Games, Much More"
            link="/about" 
            btnText="Learn More" 
        />
    ),
    3: (
        <InfoBox 
            text="Welcome To My Mad Scientist Lab, See For Yourself What I Have Created"
            link="/projects" 
            btnText="Explore" 
        />
    ),
    4: (
        <InfoBox 
            text="Need Something Built? I Can Help You With That"
            link="/contact" 
            btnText="Contact Me" 
        />
    )
}

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null
}

export default HomeInfo
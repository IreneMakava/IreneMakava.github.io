import React from 'react'
import aboutUsImage from '../assets/aboutUs.png'

export default function About() {
  return (
    <section id="about" className=" bg-darkgreen py-12 px-4 sm:px-6 " >
      <div className="container max-w-4xl lg:max-w-5xl mx-auto flex lg:flex-row gap-8 lg:items-center">
        <div className='lg:w-2/3  text-white'>
        <h1 className="text-3xl md:text-4xl mb-4 ">
          Who we <span className="text-lightgreen font-bold">Are?</span>
        </h1>
        <div className="h-[0.5px] w-full bg-lightgreen my-4"></div>
        <p className=' mb-4'>
          We're a multidisciplinary network of young passionate proffesionals.
        </p>
        <p className=" mb-4">
          <span className="text-lightgreen font-bold">Mtokoent</span> is a company with a focus on Creative Services,
           Event management, Printing, advertising. 
          We help ou clients design, plan, and deliver immersive experiences to suit their desired audience. We've been 
          working in the industry for over eight (8) years and established our company in 2024
        </p>
        <p className=" mb-4">
          We are the best described as a strategic partner in the planning of intergrated, long-term brand campaigns.
        </p>
        <p className=" mb-4">
          <span className="text-lightgreen font-bold text-lg">Creative, </span> <span className='text-lg font-bold'>Tactical </span> 
            <span className="text-lightgreen font-bold text-lg">Approach</span>
        </p>
        <p className='mb-4'>
          We take ownership in our projects, approaching each one with meticulous attention to detail and setting ambitious 
          targets and objectives to achieve the highest possible standards
        </p>
      </div>
      <div className='lg:w-1/3 hidden lg:block'>
          <img src = {aboutUsImage} alt='' 
          className='w-full h-auto'
           />
      </div>
      </div>
    </section>
  );
}

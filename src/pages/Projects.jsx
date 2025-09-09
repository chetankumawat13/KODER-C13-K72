import React from 'react'
import ProjectCrad from '../components/projects/ProjectCrad'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Projects = () => {

  const projects = [
    { image1: '/img/pi1.jpg', image2: '/img/pi2.jpg' },
    { image1: '/img/pi3.jpg', image2: '/img/pi4.jpg' },
    { image1: '/img/pi5.jpg', image2: '/img/pi6.jpg' },
    { image1: '/img/pi7.jpg', image2: '/img/pi8.jpg' },
    { image1: '/img/pi9.jpg', image2: '/img/pi10.jpg' },
    { image1: '/img/pi11.jpg', image2: '/img/pi12.jpg' },
    { image1: '/img/pi13.jpg', image2: '/img/pi14.jpg' },
    { image1: '/img/pi15.jpg', image2: '/img/pi16.jpg' },
  ];
  
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -220%',
        scrub: true
      }
    })
  })
      
  



  return (
    <div className='text-black p-4'>
      <div className='pt-[40vh] flex'>
        <h2 className='font-[f2] uppercase text-[13.8vw]'>projets</h2>
        <h4 className='text-4xl font-[f2] mt-8'>16</h4>
      </div>
      <div className='-mt-20 lol'>
        {projects.map(function(elem,idx){
            return <div key={idx} className=' hero h-[500px]  w-full  flex gap-4 mb-4'>
                <ProjectCrad image1 ={elem.image1}  image2 ={elem.image2}  />
              </div>
        })}
      </div>
    </div>
  )
}

export default Projects
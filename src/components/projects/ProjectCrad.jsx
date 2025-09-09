import React from 'react'

const ProjectCrad = (props) => {
  return (
    
          <>
          <div className='w-1/2 group relative  hover:rounded-[50px] ease-in-out transition-all duration-150 cursor-pointer overflow-hidden h-full '>
          <img className='h-full  w-full object-cover' src={props.image1} alt="" />
          <div className=' opacity-0 transition-all group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 bg-black/15 h-full w-full'>
            <h2 className='uppercae text-5xl border-3 rounded-full uppercase pt-3 pl-6 pr-6 text-white border-white   font-[f2]'>Vior le project </h2>
          </div>
          </div>
          <div className='w-1/2 group relative  hover:rounded-[50px] ease-in-out transition-all duration-150 cursor-pointer overflow-hidden h-full '>
          <img className='h-full  w-full object-cover' src={props.image2} alt="" />
          <div className=' opacity-0 transition-all group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 bg-black/15 h-full w-full'>
            <h2 className='uppercae text-5xl border-3 rounded-full uppercase pt-3 pl-6 pr-6 text-white border-white   font-[f2]'>Vior le project </h2>
          </div>
          </div>
          </>
  )
}

export default ProjectCrad
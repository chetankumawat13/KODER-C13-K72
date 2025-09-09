import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[f2] uppercase flex items-center justify-center gap-2'>
        <Link className='text-[6vw] leading-none  border-3 rounded-full px-10 pt-3 hover:text-[#D2FD50] hover:border-[#D2FD50]' to='/projects' >Projects</Link>
        <Link className='text-[6vw] leading-none border-3 rounded-full px-10 pt-3 hover:text-[#D2FD50] hover:border-[#D2FD50]' to='agence' >Agence</Link>
    </div>
  )
}

export default HomeBottomText
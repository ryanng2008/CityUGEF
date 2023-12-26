import React from 'react'
import HomeHero from '../assets/test.svg'

function Dashboard() {
  return (
    <div className=''>
      <div className='max-w-[90%] mx-auto flex justify-center '>
        <div className=' my-[48px] w-1/2 mx-6 flex flex-col justify-center '>
          <h1 className='text-7xl font-bold py-4'> Welcome back, user!</h1>
          <p className='text-3xl'>This is filler for now until I make a dashboard.</p>

        </div>
        <div className=' my-[48px] w-1/2 mx-6 flex justify-center items-center'>
          <img 
          className='mx-auto my-auto'
          src={HomeHero} 
          alt="" />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
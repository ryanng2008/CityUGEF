import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Navbar() {
  const buttonStyle = 'px-11 bg-[#22668D] py-2.5 text-white font-bold rounded-xl hover:bg-[#3397D1] ';
  function handleMenuClick() {
    // make a dropdown
  }
  return (
    <div className='bg-[#FFCC70]'>
      <div className='grid grid-cols-12 h-24 items-center max-w-[90%] justify-between mx-auto'>
      <div className='w-full col-span-5'>
      <Link to='/'><div className=' text-3xl font-bold text-[black]'>cool comapny</div></Link>
      </div>
      <ul className='flex justify-left col-span-6'>
          <li className=' w-1/3 my-2.5 mx-4 '><Link className={`${buttonStyle}`} to="/">Dashboard</Link></li> 
          <li className=' w-1/3 my-2.5 mx-4'><Link className={`${buttonStyle}`} to="/library">Library</Link></li>
      </ul>
      <div className='p-4' onClick={handleMenuClick}>
      <AiOutlineMenu size={40} style={{ color: 'white' }}/>
      </div>
    </div>
    </div>
    
    // add on hover color
  )
}

export default Navbar
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
      setNav(!nav);
    };
  
  return (
    <div className='flex justify-between items-center align-middle h-24 max-w-[1240px] mx-auto px-4 text-black bg-red'>
      <h1 className='w-30% text-3xl font-bold text-black'>MCNALLY COACHING</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Work with Scott</li>
        <li className='p-4'>Think Big</li>
        <li className='p-4'>Coaching Options</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-red m-4'>REACT.</h1>
          <li className='p-4 border-b border-black'>Home</li>
          <li className='p-4 border-b border-black'>Work with Scott</li>
          <li className='p-4 border-b border-black'>Think Big</li>
          <li className='p-4 border-b border-black'>Coaching Options</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
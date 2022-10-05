import React from 'react';
import {
  FaPatreon,
  FaFacebookSquare,
  FaItunes,
  FaInstagram,
  FaYoutubeSquare,
} from 'react-icons/fa';

const ThinkBig = () => {
  return (
    <div className='w-full py-16 text-white px-4 bg-black'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            If you're not already subscribed to Think Big...
          </h1>
          <p className='text-[#6D727F]'>You're missing out! Follow Think Big on YouTube, support on Patreon, and listen on iTunes or your preferred platform.</p>
          <div className='flex justify-around md:w-[75%] my-6 mx-auto'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaYoutubeSquare size={30} />
            <FaPatreon size={30} />
            <FaItunes size={30} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThinkBig
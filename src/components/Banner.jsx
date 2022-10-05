import React from 'react';
// import Typed from 'react-typed';

const Banner = () => {
  return (
    <div className='text-black bg-banner bg-no-repeat bg-cover bg-center'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-red font-bold p-2'>
          BECOME THE BEST VERSION OF YOU
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Coached by Scott
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            & reaching your full potential.
          </p>
          {/* <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['BTB', 'BTC', 'SASS']}
            typeSpeed={120}
            backSpeed={140}
            loop
          /> */}
        </div>
        <p className='md:text-2xl text-xl font-bold text-black'>Whether you're a competitor, an experienced lifter, or you're new to fitness, I'll work with you to reach your goals.</p>
        <button className='bg-red w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Started</button>
      </div>
    </div>
  )
}

export default Banner
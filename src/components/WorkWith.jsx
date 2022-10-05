import React from 'react';
import ManWoman from '../images/ManWoman.png';
import Squat from '../images/Squat.png';
import ScottAndBetsy from '../images/ScottAndBetsy.jpg';

const WorkWith = () => {
  return (
    <div className='w-full bg-red py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img src={ScottAndBetsy} alt='/' className='rounded-full max-w-[400px] mx-auto'/>

        <div className='flex flex-col justify-center'>
          <p className='text-white font-bold '>TAKE CONTROL OF YOUR PHYSIQUE</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>By Working with the Best, You'll Achieve the Best Results</h1>
          <p>
            Scott McNally is an experienced bodybuilding and health and fitness coach, a fitness educator, founder and host of the Think Big podcast network, and a definite bodybuilding nerd.
          </p>
          <button className='bg-black text-white w-[200px] rounded-md font-medium mx-auto my-6 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default WorkWith
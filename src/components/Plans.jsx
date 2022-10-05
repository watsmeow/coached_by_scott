import React from 'react';
import MealPlanOutline from '../images/MealPlanOutline.png';
import ManFlexing from '../images/ManFlexing.png';
import WeightInCircle from '../images/WeightInCircle.png';

const Plans = () => {
  return (
    <div className='w-full py-[5rem] px-4 bg-red'>
        <div className='flex flex-col justify-center mb-12 pb-12 w-9/12 mx-auto'>
          <p className='text-white font-bold '>COACHING OPTIONS</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black'>We'll Work Together One Step at a Time</h1>
        </div>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
              <img className='w-20 mx-auto mt-[-3rem]' src={MealPlanOutline} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Nutrition Coaching</h2>
              <p className='text-center text-4xl font-bold'>$9999</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Lorem ipsum dolor.</p>
                  <p className='py-2 border-b mx-8'>Lorem ipsum dolor.</p>
                  <p className='py-2 border-b mx-8'>Lorem ipsum dolor.</p>
              </div>
              <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>New Client Form</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
              <img className='w-20 mx-auto mt-[-3rem]' src={WeightInCircle} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Lifting & Nutrition Coaching</h2>
              <p className='text-center text-4xl font-bold'>$9999</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Lorem ipsum dolor.</p>
                  <p className='py-2 border-b mx-8'>Lorem ipsum dolor.</p>
                  <p className='py-2 border-b mx-8'>Lorem ipsum dolor.</p>
              </div>
              <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>New Client Form</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
              <img className='w-20 mx-auto mt-[-3rem]' src={ManFlexing} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Bodybuilding & Contest Prep Coaching</h2>
              <p className='text-center text-4xl font-bold'>$9999</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Lorem ipsum dolor.</p>
                  <p className='py-2 border-b mx-8'>Lorem ipsum dolor.</p>
                  <p className='py-2 border-b mx-8'>Lorem ipsum dolor.</p>
              </div>
              <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>New Client Form</button>
          </div>
      </div>
    </div>
  )
}

export default Plans
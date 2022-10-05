import React from 'react';

const Transformations = () => {
  return (

    <div className='w-full py-[5rem] px-4 bg-white'>
        <div className='flex flex-col justify-center mb-12 pb-12 w-9/12 mx-auto'>
          <p className='text-black font-bold '>CLIENT RESULTS & TRANSFORMATIONS</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-red'>Results Don't Lie</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 py-12 mt-[50px]'>
          <div className="w-full h-[400px] shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-transform bg-no-repeat bg-cover bg-center">
              <h2 className='text-2xl font-bold text-center mt-[-8rem] text-red'>Transformation 1</h2>
              <p className='center'>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
          </div>

          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-transform2 bg-no-repeat bg-cover bg-center">
              <h2 className='text-2xl font-bold text-center mt-[-8rem] text-red'>Transformation 2</h2>
              <p className='center'>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
          </div>
          
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-transform3 bg-no-repeat bg-cover bg-center">
              <h2 className='text-2xl font-bold text-center mt-[-8rem] text-red'>Transformation 2</h2>
              <p className='center'>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
          </div>
      </div>
      <button className='bg-black text-white w-[200px] rounded-md font-medium mx-auto my-6 py-3'>Get Started</button>
    </div>
  )
}

export default Transformations
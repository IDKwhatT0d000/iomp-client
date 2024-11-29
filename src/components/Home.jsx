import React from 'react'

const Home = () => {
  return (
    <div className='relative h-screen w-screen bg-black'>
      <div className='w-[800px] h-[500px] bg-blue-500 blur-[90px] rounded-[100%] absolute z-1 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
      </div>
      <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white/20 p-4 rounded-xl shadow-2xl'>
        <h2 className='font-bold bg-gradient-to-r from-black via-gray-400 to-white bg-clip-text text-transparent text-[80px]'>
          Fracture detection
        </h2>
        <h3 className='font-bold bg-gradient-to-r from-black via-gray-400 to-white bg-clip-text text-transparent text-[70px]'>
          using YoloV8
        </h3>
      </div>
    </div>
  )
}

export default Home
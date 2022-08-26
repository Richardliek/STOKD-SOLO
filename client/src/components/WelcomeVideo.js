import React from 'react'
//import videobg.mov from video folder
import videobg from './video/videobg.mov'

function WelcomeVideo() {
  return (
    <div className='video gap-20 p-0 m-8 rounded-xl shadow-lg h-50 transform transition duration-500 hover:scale-95 hover:shadow-xl text-gray-700 hover:opacity-80'>
      <video src={videobg} autoPlay loop muted/>
      <div className='content'>
        <h1>Welcome to STOKD.</h1>
        <h2>Check out used gear down below!</h2>
        <h3>Or sell your stuff!</h3>
      </div>
    </div>
  )
}

export default WelcomeVideo
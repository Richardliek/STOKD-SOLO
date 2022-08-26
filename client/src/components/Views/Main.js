import React from 'react'
import WelcomeVideo from '../WelcomeVideo'

function main() {
  return (
    <div className=' grid grid-cols-2 gap-20 p-4 m-8 rounded-xl shadow-lg h-50 transform transition duration-500 hover:scale-95 hover:shadow-xl text-gray-700 hover:opacity-80'>
            <div>
                    <WelcomeVideo/>
            </div>
        </div>
  )
}

export default main
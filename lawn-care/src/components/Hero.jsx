import React from 'react'
import {AiOutlineFileText} from 'react-icons/ai'
// Green #4e9525
// Yellow #e8c204
export default function Hero() {
  const textYellow = 'text-[#e8c204]'
  const textGreen = 'text-[#4e9525]'
  const bgGreen = 'bg-[#4e9525]'
  return (
    // Hero w/ bg
    <section className="bg-[url('https://lawn.thegoodishtechie.com/wp-content/uploads/2023/08/Top-View-Lawn.jpg')] block bg-no-repeat bg-cover h-[100vh] backdrop-brightness-50">
      {/* hero overlay */}
      <div className="backdrop-brightness-50 w-full h-full">
        {/* hero inner */}
        <div className="max-w-[1140px] mx-auto px-6 h-full flex items-center">
          <div className="max-w-[550px]">
            <h3 className={`${textYellow} text-xl font-medium`}>HERE TO SERVE</h3>
            <h1 className="text-7xl font-bold py-4 text-white">Your Local Lawn Care Experts</h1>
            <p className="text-xl mt-2 mb-[40px] text-white">Put us to work on your lawn</p>
            <button className={`${bgGreen} rounded-[4px] py-[15px] px-[30px] flex items-center gap-2 text-white font-[500] hover:scale-105 ease-out duration-300`}>
              <span>FREE ESTIMATES</span><span><AiOutlineFileText /></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import {AiFillRightCircle, AiOutlineArrowRight} from 'react-icons/ai'

function Cards() {
  const textYellow = 'text-[#e8c204]'
  const textGreen = 'text-[#4e9525]'
  const bgGreen = 'bg-[#4e9525]'

  return (
    <section className="p-6">
      <div className="flex gap-6">
        {/* Gardens Card */}
        <div className="p-6 shadow-xl shadow-[rgba(42,42,42,0.5)] w-[25%]">
          <div className="flex justify-center">
            {/* Circle background */}
            <div className="bg-[#f2f2f2] rounded-full p-8">
              <img src="https://lawn.thegoodishtechie.com/wp-content/uploads/2023/08/Fence.png" className="max-w-[50px] max-h-[50px]"/>
            </div>
          </div>
          <div className="text-center py-6">
            <h3 className="font-medium text-xl">Gardens</h3>
            <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
          {/* icon button */}
          <div className="flex justify-center">
            <AiFillRightCircle className={`${textGreen} w-[45px] h-[45px] hover:text-[#e8c204] ease-out duration-300 hover:cursor-pointer`}/>
          </div>
        </div>
        {/* Mowing Card */}
        <div className="p-6 shadow-xl shadow-[rgba(42,42,42,0.5)] w-[25%]">
          <div className="flex justify-center">
            {/* Circle background */}
            <div className="bg-[#f2f2f2] rounded-full p-8">
              <img src="https://lawn.thegoodishtechie.com/wp-content/uploads/2023/08/Lawnmower.png" className="max-w-[50px] max-h-[50px]"/>
            </div>
          </div>
          <div className="text-center py-6">
            <h3 className="font-medium text-xl">Mowing</h3>
            <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
          {/* icon button */}
          <div className="flex justify-center">
            <AiFillRightCircle className={`${textGreen} w-[45px] h-[45px] hover:text-[#e8c204] ease-out duration-300 hover:cursor-pointer`}/>
          </div>
        </div>
        {/* Lawn Card */}
        <div className="p-6 shadow-xl shadow-[rgba(42,42,42,0.5)] w-[25%]">
          <div className="flex justify-center">
            {/* Circle background */}
            <div className="bg-[#f2f2f2] rounded-full p-8">
              <img src="https://lawn.thegoodishtechie.com/wp-content/uploads/2023/08/Yard.png" className="max-w-[50px] max-h-[50px]"/>
            </div>
          </div>
          <div className="text-center py-6">
            <h3 className="font-medium text-xl">Lawn</h3>
            <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
          {/* icon button */}
          <div className="flex justify-center">
            <AiFillRightCircle className={`${textGreen} w-[45px] h-[45px] hover:text-[#e8c204] ease-out duration-300 hover:cursor-pointer`}/>
          </div>
        </div>
        {/* Green bg Card */}
        <div className="p-6 shadow-xl shadow-[rgba(42,42,42,0.5)] w-[25%] bg-[#4e9525]">
          <h4>Our Services</h4>
          <h3>Our Services</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <button className="flex items-center justify-center bg-[#e8c204]">PUT US TO WORK<span><AiOutlineArrowRight /></span></button>
        </div>

      </div>
    </section>
  )
}

export default Cards



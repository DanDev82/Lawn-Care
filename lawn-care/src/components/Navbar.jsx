import React from 'react'
import {AiTwotonePhone, AiOutlineClockCircle, AiOutlineTwitter, AiOutlineInstagram, AiFillYoutube, AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {BiEnvelope} from 'react-icons/bi'
import {FaFacebookF, FaBars, FaTimes} from 'react-icons/fa'
import {useState} from 'react'
// Green #4e9525
// Yellow #e8c204


function Navbar() {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  const newLocal = "md:hidden z-10 cursor-pointer "

  return (
    <header>
      {/* top bar */}
      <div className="bg-[#4e9525] w-full py-3">
        <div className="max-w-[1140px] mx-auto flex justify-center md:justify-between items-center px-6">
          {/* contact info */}
          <ul className="hidden md:flex gap-6 text-white text-[12px]">
            <li className="flex items-center"><span className="mr-3"><AiTwotonePhone className="text-[#e8c204] w-[20px] h-[20px]"/></span> 123 456 7890</li>
            <li className="flex items-center"><span className="mr-3"><BiEnvelope className="text-[#e8c204] w-[20px] h-[20px]"/></span> info@email.com</li>
            <li className="flex items-center"><span className="mr-3"><AiOutlineClockCircle className="text-[#e8c204] w-[20px] h-[20px]"/></span> Mon - Sat: 7:00 - 19:30</li>
          </ul>
          {/* social icons */}
          <ul className="flex gap-3 text-white text-[12px]">
            <li className="flex items-center"><span className="mr-0 bg-white rounded-full p-2"><FaFacebookF className="text-[#4e9525] w-[20px] h-[20px]"/></span></li>
            <li className="flex items-center"><span className="mr-0 bg-white rounded-full p-2"><AiOutlineTwitter className="text-[#4e9525] w-[20px] h-[20px]"/></span></li>
            <li className="flex items-center"><span className="mr-0 bg-white rounded-full p-2"><AiOutlineInstagram className="text-[#4e9525] w-[20px] h-[20px]"/></span></li>
            <li className="flex items-center"><span className="mr-0 bg-white rounded-full p-2"><AiFillYoutube className="text-[#4e9525] w-[20px] h-[20px]"/></span></li>
          </ul>
        </div>        
      </div>
      {/* Navbar */}
      <nav className="w-full py-8">
        <div className="flex max-w-[1140px] mx-auto justify-between px-6">
          {/* Logo */}
          <div>
            <img src="https://lawn.thegoodishtechie.com/wp-content/uploads/2023/08/Lawn_logo.png" className="max-w-[150px]" />
          </div>
          {/* Menu */}
          <ul className="hidden md:flex gap-6">
            <li className="hover:text-[#e3bf08] font-medium border-b-transparent hover:border-b-2 hover:border-b-[#e8c204] ease-out duration-300 hover:cursor-pointer">Home</li>
            <li className="hover:text-[#e3bf08] font-medium border-b-transparent hover:border-b-2 hover:border-b-[#e8c204] ease-out duration-300  hover:cursor-pointer">Services</li>
            <li className="hover:text-[#e3bf08] font-medium border-b-transparent hover:border-b-2 hover:border-b-[#e8c204] ease-out duration-300  hover:cursor-pointer">Reviews</li>
            <li className="hover:text-[#e3bf08] font-medium border-b-transparent hover:border-b-2 hover:border-b-[#e8c204] ease-out duration-300 hover:cursor-pointer">Contact</li>
          </ul>

          {/* hamburger */}
          <div onClick={handleClick} className={newLocal}>
            {!nav ? <AiOutlineMenu className="w-[30px] h-[30px]"/> : <AiOutlineClose className="w-[30px] h-[30px]"/>}
          </div>
          {/* mobile menu */}
          <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#FFF] flex flex-col justify-center items-center'}>
            <li className="py-4 text-4xl font-medium">Home</li>
            <li className="py-4 text-4xl font-medium">Services</li>
            <li className="py-4 text-4xl font-medium">Reviews</li>
            <li className="py-4 text-4xl font-medium">Contact</li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
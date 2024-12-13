import React from 'react'
// import { RiFacebookBoxLine } from "react-icons/ri";
// import { CiLinkedin } from "react-icons/ci";
// import { LiaTwitterSquare } from "react-icons/lia";
// import { LiaPinterestSquare } from "react-icons/lia";
// import { CiYoutube } from "react-icons/ci";






const Navbar = () => {
  return (
    <div className='w-full h-[100px] bg-[#FE9DBB] flex justify-center items-center'>

        <div className='flex justify-center items-center gap-7 font-semibold text-normal'>
            <a href='#/'>Home</a>
            <a href='#about'>About</a>
            <a>Skills</a>
            <a>Portfolio</a>
            <a>Contact Us</a>

            
        </div>

        {/* <div className='flex justify-center items-center pl-11'>
        <RiFacebookBoxLine  className='w-[30px] h-[30px]'/>
        <CiLinkedin className='w-[30px] h-[30px]'/>
        <LiaTwitterSquare className='w-[30px] h-[30px]'/>
        <LiaPinterestSquare className='w-[30px] h-[30px]'/>
        <CiYoutube className='w-[30px] h-[30px]'/> */}





        </div>
      
   
  )
}

export default Navbar

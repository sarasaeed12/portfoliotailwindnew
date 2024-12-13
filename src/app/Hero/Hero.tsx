import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>

{/* / navbar/ */}
<div className='w-full h-[100px] bg-[#FE9DBB] flex justify-center items-center'>

<div className='flex justify-center items-center gap-7 font-semibold text-normal'>
    <a href='#/'>Home</a>
    <a href='#about'>About</a>
    <a href='#skills'>Skills</a>
    <a href='#portfolio'>Portfolio</a>
    <a href='#contact'>Contact Us</a>

    
</div>

{/* <div className='flex justify-center items-center pl-11'>
<RiFacebookBoxLine  className='w-[30px] h-[30px]'/>
<CiLinkedin className='w-[30px] h-[30px]'/>
<LiaTwitterSquare className='w-[30px] h-[30px]'/>
<LiaPinterestSquare className='w-[30px] h-[30px]'/>
<CiYoutube className='w-[30px] h-[30px]'/> */}





</div>


{/* / Home / */}



    <div className='w-full flex justify-center items-center gap-[100px]'>
    {/* Left side    */}
      
      <div className='font-black text-5xl ml-3 '>
        <h1>I'M </h1>
        <br />
        <h1>SARA SAEED</h1>
        <br />
        <h1>A PROFESSIONAL <span>GRAPHIC ARTIST</span> </h1>
        <br />
        <h1>A WEB DEVELOPER</h1>
        <br />
        <h1>DIGITAL MARKETER</h1>
      </div>


      {/*right side  */}

      <div>
        <Image src={"/images/2-02.png"}
        alt='image'
        width={650}
        height={750}
        />



      </div>

      

    </div>

{/* / ABOUT/ */}
    <div className="relative w-full h-screen bg-cover bg-center mt-[150px]" style={{ backgroundImage: "url('/images/3.jpg')" }}>
            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-10">
                <h1 className="text-5xl font-black text-black mb-4" id='about'>ABOUT ME</h1>
                <p className="text-lg text-black mb-6">Follow our store on Instagram</p>
      </div>
      
    </div>


    {/* / skills/ */}

    <div className="relative w-full h-screen bg-cover bg-center mt-[150px] bg-white5+" style={{ backgroundImage: "url('/images/2-02.jpg')" }}>
            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-opacity-10">
                <h1 className="text-5xl font-black text-black mb-4" id='skills'>SKILLS</h1>
                <p className="text-lg text-black mb-6">Follow our store on Instagram</p>
      </div>
      

      
    </div>


        {/* / portfolio/ */}


    <div className="relative w-full h-screen bg-cover bg-center mt-[150px]" style={{ backgroundImage: "url('/images/5-05.jpg')" }}>
            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-10">
                <h1 className="text-5xl font-black text-black mb-4" id='portfolio'>PORTFOLIO</h1>
                <p className="text-lg text-black mb-6">Follow our store on Instagram</p>
      </div>
      

      
    </div>

     {/* / contact me/ */}


    <div className="relative w-full h-screen bg-cover bg-center mt-[150px]" style={{ backgroundImage: "url('/images/3-03.jpg')" }}>
            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                <h1 className="text-5xl font-black text-black mb-4" id='contact'>CONTACT ME</h1>
                <p className="text-lg text-black mb-6">Follow our store on Instagram</p>
      </div>
      

      
    </div>

    {/* / footer / */}



    
    <div/>
    </div>
  )
}

export default Hero

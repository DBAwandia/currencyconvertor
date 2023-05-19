import React from 'react'
export { React };

function Navbar() {
  return (
    <div className='w-full h-[6rem] nh:h-[7rem] lg:h-[12rem] bg shadow-md text-[white]'>
       <div className='flex items-center justify-between py-[1.2rem] nh:py-[1.5rem] px-[1rem] nh:px-[2rem] md:px-[2rem] lg:py-[2.2rem] lg:px-[4rem]'>
        <div className='font-bold text-[1.2rem] nh:text-[1.6rem] lg:text-[3rem] '>
            Currency convertor 
        </div>
        <div className='flex font-[600] text-[0.95rem] nh:text-[1.1rem] gap-[1rem] md:gap-[3rem] lg:text-[2rem] lg:gap-[4rem] items-center justify-between'>
            <a href="https://kryptoscoin.netlify.app/">
                <button className='w-auto gradient text-white h-auto py-[0.8rem] md:py-[1rem] px-[1.3rem] nh:py-[1rem] nh:px-[1.3rem] lg:py-[1.5rem] lg:px-[3rem] rounded-lg nh:rounded-xl lg:rounded-2xl bg-blue-300 border-[2px]'>
                    Back
                </button>
            </a>
            <a href='https://wandiakennedy.netlify.app/'>
                <button className='w-auto text-[white] h-auto py-[0.8rem] md:py-[1rem] px-[1.3rem] nh:py-[1rem] nh:px-[1.3rem] lg:py-[1.5rem] lg:px-[3rem] rounded-lg nh:rounded-xl lg:rounded-2xl border-2 border-solid  border-[#f05b5b]'>
                    My portfolio
                </button>
            </a>

        </div>
       </div>
    </div>
  )
}

export default Navbar
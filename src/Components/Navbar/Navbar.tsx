import React from 'react'
export { React };

function Navbar() {
  return (
    <div className='w-full h-[12rem] bg shadow-md text-[white]'>
       <div className='flex items-center justify-between py-[2.2rem] px-[4rem]'>
        <div className='font-bold text-[3rem] '>
            Instasend
        </div>
        <div className='flex font-[600] text-[2rem] gap-[4rem] items-center justify-between'>
            <button className='w-auto text-[white] h-auto py-[1.5rem] px-[3rem] rounded-2xl border-2 border-solid  border-[#f05b5b]'>
                Log In
            </button>
            <button className='w-auto gradient text-white h-auto py-[1.5rem] px-[3rem] rounded-2xl bg-blue-300 border-[2px]'>
                Sign Up
            </button>
        </div>
       </div>
    </div>
  )
}

export default Navbar
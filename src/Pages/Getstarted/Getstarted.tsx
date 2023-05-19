import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Moneyconvert from './Moneyconvert';
export { React };
import { AiOutlineCheck } from "react-icons/ai"

function Getstarted() {

    type DESCRIBE_REASONS = {
        name: string,
    }

    let describe_reasons: Array<DESCRIBE_REASONS> = [
        {
            name: "Fast, secure money converter up to 100x cheaper than the banks.",
        },
        {
            name: "Withdraw like Bitcoin network ,lightning speed",
        },
        {
            name:"Feel free to contact me for work"
        }
]

  return (
    <div className='w-full min-h-screen'>
        <div className='w-full h-[2.5rem] lg:h-[3rem] grid justify-center items-center lg:text-[1.5rem] text-[0.88rem] bg-[#523857] text-white'>
            Its a free plan api , if no response quota is exceeded
        </div>
        <div>
            <Navbar/>
        </div>

        <div className='lg:flex-1 lg:flex grid grid-cols-1 items-center '>

            <div className='w-full md:px-[2rem] lg:hidden px-[1rem] py-[2rem] text-[2.3rem] lg:text-[5rem] text-[#DA22FF] font-[sans-serif] font-[900]'>
                <h1>Fee-Free Transfers for 10 years</h1>
            </div>

            <div className='lg:hidden md:px-[2rem] w-full lg:flex-[0.5]  p-[1rem] lg:p-[3rem] self-center'>
                <Moneyconvert/>
            </div>

            <div className='lg:flex-[0.5] w-full  self-center flex lg:px-[3rem] py-[3rem] px-[1rem] md:px-[2rem] flex-col gap-[3rem]'>
                <div className='hidden lg:block text-[3rem] nh:text-[2rem] lg:text-[5rem] text-[#DA22FF] font-[sans-serif] font-[900]'>
                    <h1>Fee-Free Transfers for 10 years</h1>
                </div>

                {describe_reasons?.map((items , i) =>
                    <div key={i} className='flex text-[#333540] text-[0.95rem] nh:text-[1.2rem] lg:text-[2.2rem] items-center gap-[1rem] lg:gap-[2rem]'>
                        <AiOutlineCheck className="lg:text-[3rem] nh:text-[1.6rem] text-[1.4rem] text-[#a462df]"/>
                        <p>{items.name}</p>
                    </div>
                )}
            </div>

            <div className='hidden lg:block lg:flex-[0.5] nh:p-[1rem] p-[1rem] lg:p-[3rem] self-center'>
                <Moneyconvert/>
            </div>
            

        </div>
    </div>
  )
}

export default Getstarted
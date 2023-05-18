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
            name: "Fast, secure money transfers up to 8x cheaper than the banks.",
        },
        {
            name: "Withdraw to M-pesa instantly",
        },
        {
            name:"Withdraw to any exchange , Binance , Huobi , Bybit"
        }
]

  return (
    <div className='w-full min-h-screen'>
        <div>
            <Navbar/>
        </div>

        <div className='lg:flex-1 lg:flex grid nh:grid grid-cols-1 nh:grid-cols-2 self-center '>

            <div className='w-full md:px-[2rem] lg:hidden px-[1rem] py-[2rem] text-[2.3rem] lg:text-[5rem] text-[#DA22FF] font-[sans-serif] font-[900]'>
                <h1>Fee-Free Transfers for 3 Months</h1>
            </div>

            <div className='lg:hidden md:px-[2rem] w-full lg:flex-[0.5]  p-[1rem] lg:p-[3rem] self-center'>
                <Moneyconvert/>
            </div>

            <div className='lg:flex-[0.5] w-full nh:w-auto self-center flex lg:px-[3rem] py-[3rem] px-[1rem] md:px-[2rem] flex-col gap-[3rem]'>
                <div className='hidden lg:block text-[3rem] nh:text-[3rem] lg:text-[5rem] text-[#DA22FF] font-[sans-serif] font-[900]'>
                    <h1>Fee-Free Transfers for 3 Months</h1>
                </div>

                {describe_reasons?.map((items , i) =>
                    <div key={i} className='flex text-[#333540] text-[0.95rem] nh:text-[1.2rem] lg:text-[2.2rem] items-center gap-[1rem] lg:gap-[2rem]'>
                        <AiOutlineCheck className="lg:text-[3rem] nh:text-[1.6rem] text-[1.4rem] text-[#a462df]"/>
                        <p>{items.name}</p>
                    </div>
                )}
            </div>

            <div className='hidden lg:block w-full lg:flex-[0.5]  nh:w-auto nh:p-[1rem] p-[1rem] lg:p-[3rem] self-center'>
                <Moneyconvert/>
            </div>
            

        </div>
    </div>
  )
}

export default Getstarted
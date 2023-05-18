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

        <div className='flex-1 flex self-center '>

            <div className='flex-[0.5] self-center flex  px-[3rem] py-[3rem] flex-col gap-[3rem]'>
                <div className='text-[5rem] text-[#DA22FF] font-[sans-serif] font-[900]'>
                    <h1>Fee-Free Transfers for 3 Months</h1>
                </div>

                {describe_reasons?.map((items , i) =>
                    <div key={i} className='flex text-[#333540] text-[2.2rem] items-center gap-[2rem]'>
                        <AiOutlineCheck className="text-[3rem] text-[#a462df]"/>
                        <p>{items.name}</p>
                    </div>
                )}
            </div>

            <div className='flex-[0.5] p-[3rem] self-center'>
                <Moneyconvert/>
            </div>

        </div>
    </div>
  )
}

export default Getstarted
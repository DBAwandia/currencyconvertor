import React , {useEffect, useState} from 'react'
export { React };
import { AiOutlineCheck } from "react-icons/ai"

function Moneyconvert() {

    const [ fromAmount , setFromAmount ] = useState <string>("")
    const [ toAmount , setToAmount ] = useState <string>("")
    const [ valueFromOptions , setValueFromOPtions ] = useState <string>("KES")
    const [ valueToOptions , setValueToOPtions ] = useState <string>("KES")
    // console.log(toAmount.result)
    //from currency
    const currencyFromDescription = valueFromOptions.split(" ");
    const firstThreeFromCurrency = currencyFromDescription.slice(0, 3)[0];

    //to currency
    const currencyToDescription = valueToOptions.split(" ");
    const firstThreeToCurrency = currencyToDescription.slice(0, 3)[0];


    //convert coins
    useEffect(() => {
    try{
            let MYAPI_KEY : any = import.meta.env.VITE_REACT_APP_FIXERCONVERTER
            let myHeaders = new Headers();
            myHeaders.append("apikey", MYAPI_KEY);

            let requestOptions: any = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
            };

            fetch(`https://api.apilayer.com/fixer/convert?to=${firstThreeToCurrency.trim()}&from=${firstThreeFromCurrency.trim()}&amount=${fromAmount}`, requestOptions)
            .then(response => response.text())
            .then(result => setToAmount(result))
            .catch(error => console.log('error', error));
        }catch(err){

        }
    }, [valueToOptions , valueFromOptions , fromAmount])


  return (
    <div className='w-full lg:w-auto bg rounded-lg lg:rounded-2xl h-auto'>
        <div className='px-[2rem] py-[2rem] nh:px-[2rem] nh:py-[2rem] lg:px-[5rem] lg:py-[7rem] flex flex-col gap-[2rem] nh:gap-[2rem] lg:gap-[3rem] items-center'>
            <div className='w-full bg-white rounded-lg px-[1rem] py-[1rem] nh:px-[1rem] nh:py-[1rem] lg:px-[4rem] lg:py-[4rem]'>
                <div className='px-[1rem] nh:px-[1rem] lg:px-[2rem] border-b-2 py-[2rem] flex items-center justify-between'>
                    <div className='relative flex flex-col gap-[3.3rem] text-[0.95rem] nh:text-[1.2rem]  lg:gap-[4rem] lg:text-[2.2rem]'>
                        <p className='text-[#DA22FF]'>You send</p>
                        <input
                            className='text-[0.95rem] nh:text-[1rem] lg:text-[2.2rem] text-[#636469] font-bold pl-[3rem] nh:pl-[3rem] lg:pl-[5rem] bg-transparent'
                            type='number'
                            onChange={e=>setFromAmount(e.target.value)}
                            value={fromAmount}
                            placeholder='0'
                        />
                        <span className='absolute font-bold tracking-wider top-[4.6rem] md:top-[4.8rem] lg:top-[7.3rem]'>
                            {firstThreeFromCurrency}
                        </span>
                    </div>
                    <div className='w-auto flex items-center gap-[1rem] nh:gap-[0rem] lg:gap-[2rem] nh:text-[1.2rem] text-[0.95rem] lg:text-[2rem] hover:bg-[#f2f6f8] h-auto py-[0.8rem] px-[1rem] nh:py-[0.8rem] nh:px-[0.3rem] lg:py-[1.5rem] lg:px-[3rem] rounded-lg lg:rounded-2xl border-2 border-solid border-[#DA22FF]'>
                        <AiOutlineCheck className="text-[1.4rem] nh:hidden nh:text-[1.6rem] lg:text-[3rem]"/>
                            <div>
                                <select
                                    onChange={e=>setValueFromOPtions(e.target.value)} 
                                    className='outline-0 bg-transparent'
                                >
                                    <option>KES (Kenya Shilling)</option>
                                    <option>TZS (Tanzania Shilling)</option>
                                    <option>UGX (Uganda Shilling)</option>
                                    <option>CNY (Chinese Yuan)</option>
                                    <option>USD (US Dollar)</option>
                                    <option>EUR (Euro)</option>
                                    <option>GBP (British Pounds)</option>
                                </select>
                            </div>
                    </div>
                   
                </div>

                <div className='px-[1rem] nh:px-[1rem] lg:px-[2rem] py-[2rem] flex items-center justify-between'>
                    <div className='relative flex flex-col gap-[3.3rem] text-[0.95rem] nh:text-[1.2rem] lg:gap-[4rem] lg:text-[2.2rem]'>
                        <p className='text-[#DA22FF]'>Recipient gets</p>
                        <input
                            readOnly
                            className='text-[0.95rem] nh:text-[1.2rem] lg:text-[2.2rem] text-[#636469] font-bold pl-[3rem] lg:pl-[5rem] bg-transparent'
                            type='number'
                            placeholder='0'
                            value={toAmount}
                            onChange={e=>setToAmount(e.target.value)}
                        />
                        <span className='absolute font-bold tracking-wider top-[4.6rem] md:top-[4.8rem] lg:top-[7.3rem]'>
                            {firstThreeToCurrency}
                        </span>
                    </div>
                    <div className='w-auto flex items-center gap-[1rem] lg:gap-[2rem]  text-[0.95rem] nh:text-[1.2rem] lg:text-[2rem] hover:bg-[#f2f6f8] h-auto py-[0.8rem] px-[1rem] nh: py-[0.8rem] nh:px-[1rem] lg:py-[1.5rem] lg:px-[3rem] rounded-lg lg:rounded-2xl border-2 border-solid  border-[#DA22FF]'>
                        <AiOutlineCheck className="text-[1.4rem] nh:text-[1.6rem] lg:text-[3rem]"/>
                            <div>
                                <select
                                    onChange={e=>setValueToOPtions(e.target.value)} 
                                    className='outline-0 bg-transparent'
                                >
                                    <option>KES (Kenya Shilling)</option>
                                    <option>TZS (Tanzania Shilling)</option>
                                    <option>UGX (Uganda Shilling)</option>
                                    <option>CNY (Chinese Yuan)</option>
                                    <option>USD (US Dollar)</option>
                                    <option>EUR (Euro)</option>
                                    <option>GBP (British Pounds)</option>
                                </select>
                            </div>
                    </div>
                </div>
            </div>
           
            <div className='w-full text-[0.95rem] nh:text-[1.2rem] lg:text-[2rem]'>
                <button className='w-full hover:bg-[#b7d8e7] text-white tracking-wider h-auto py-[1.3rem] px-[1rem] nh:py-[1.3rem] nh:px-[1rem] lg:py-[2rem] lg:px-[3rem] rounded-lg lg:rounded-2xl gradient border-[2px]'>
                    Get started now
                </button>
            </div>
        </div>
    </div>
  )
}

export default Moneyconvert
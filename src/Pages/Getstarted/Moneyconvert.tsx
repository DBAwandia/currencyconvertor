import axios from 'axios';
import React , {useEffect, useState} from 'react'
export { React };
import { AiOutlineCheck } from "react-icons/ai"

function Moneyconvert() {

    const [ value , setValue ] = useState <any>("")
    const [ valueFromOptions , setValueFromOPtions ] = useState <any> ("USD")
    const [ valueToOptions , setValueToOPtions ] = useState <any> ("USD")
    const [ convertedCurrency , setConvertedCurrency ] = useState <any>("You get")
    const [ amountToConvert , setAmountToConvert] = useState <any>("Convert amount")


    //math for conversion
    useEffect(() => {
        let convertedCurrencys = (amountToConvert/valueFromOptions)
        let convertedCurrency = convertedCurrencys * valueToOptions
        setConvertedCurrency(convertedCurrency)
        
    }, [ amountToConvert, valueFromOptions , valueToOptions])

    let fromValues = [value]

    //fetch coins and convert
    let MYAPI_KEY : any = import.meta.env.VITE_REACT_APP_FIXERCONVERTER
    useEffect(() => {
    try{
        const fetchData = async () =>{
            const response :any = await axios.get(`https://api.freecurrencyapi.com/v1/latest?apikey=${MYAPI_KEY}`)
            setValue(response.data.data)

        }
        fetchData()

        }catch(err){
        }

    }, [])


  return (
    <div className='w-full bg rounded-lg lg:rounded-2xl h-auto'>
        
       {fromValues?.map((item , i) => 
       <div key={i} className='px-[2rem] py-[2rem] nh:px-[2rem] nh:py-[2rem] lg:px-[5rem] lg:py-[7rem] flex flex-col gap-[2rem] nh:gap-[2rem] lg:gap-[3rem] items-center'>
            <div className='w-full bg-white rounded-lg px-[1rem] py-[1rem] nh:px-[1rem] nh:py-[1rem] lg:px-[4rem] lg:py-[4rem]'>
                <div className='px-[1rem] nh:px-[1rem] lg:px-[2rem] border-b-2 py-[2rem] flex items-center justify-between'>
                    <div className='relative flex flex-col gap-[3.3rem] text-[0.95rem] nh:text-[1.2rem]  lg:gap-[4rem] lg:text-[2.2rem]'>
                        <p className='text-[#DA22FF]'>You send</p>
                        <input
                            onChange={e=> setAmountToConvert(e.target.value)}
                            className='text-[0.95rem] nh:text-[1rem] lg:text-[2.2rem] text-[#636469]   nh bg-transparent'
                            type='number'
                            min={1}
                            placeholder='Convert amount'
                        />
                    </div>
                    <div className='w-auto flex items-center gap-[1rem] nh:gap-[0rem] lg:gap-[2rem] nh:text-[1.2rem] text-[0.95rem] lg:text-[2rem] hover:bg-[#f2f6f8] h-auto py-[0.8rem] px-[1rem] nh:py-[0.8rem] nh:px-[0.3rem] lg:py-[1.5rem] lg:px-[3rem] rounded-lg lg:rounded-2xl border-2 border-solid border-[#DA22FF]'>
                        <AiOutlineCheck className="text-[1.4rem] nh:hidden nh:text-[1.6rem] lg:text-[3rem]"/>
                            <div>
                                <select
                                    onChange={e=>setValueFromOPtions(e.target.value)} 
                                    className='outline-0 bg-transparent'
                                >
                                    <option
                                        value={item.USD} 
                                    >
                                        USD (US Dollar)
                                    </option>
                                    <option 
                                        value={item.INR} 
                                    >
                                        INR (Indian Rupee)
                                    </option>
                                    <option
                                        value={item.NZD} 
                                    >
                                        NZD (NewZealand Dollar)
                                    </option>
                                    <option
                                        value={item.CNY} 
                                    >
                                        CNY (Chinese Yuan)
                                    </option>
                                    <option
                                        value={item.EUR} 
                                    >
                                         EUR (Euro)
                                    </option>
                                    <option
                                        value={item.CAD} 
                                    >
                                        CAD (Canadian Dollar)
                                    </option>
                                    <option
                                        value={item.GBP} 
                                    >
                                        GBP (British Pounds)
                                    </option>
                                    <option
                                        value={item.RUB} 
                                    >
                                        RUB (Russian Rubble)
                                    </option>
                                    <option
                                        value={item.AUD} 
                                    >
                                        AUD (Australian Dollar)
                                    </option>
                                    <option
                                        value={item.PHP} 
                                    >
                                        PHP (Phillipine pesso)
                                    </option>
                                    <option
                                        value={item.ZAR} 
                                    >
                                        ZAR (SA Rand)
                                    </option>
                                </select>
                            </div>
                    </div>
                   
                </div>

                <div className='px-[1rem] nh:px-[1rem] lg:px-[2rem] py-[2rem] flex items-center justify-between'>
                    <div className='relative flex flex-col gap-[3.3rem] text-[0.95rem] nh:text-[1.2rem] lg:gap-[4rem] lg:text-[2.2rem]'>
                        <p className='text-[#DA22FF]'>Recipient gets</p>
                        <input
                            readOnly
                            value={Number(convertedCurrency).toFixed(2)}
                            className='text-[0.95rem] nh:text-[1.2rem] lg:text-[2.2rem] text-[#636469]  bg-transparent'
                            type='number'
                            placeholder='You get'
                        />
                    </div>
                    <div className='w-auto flex items-center gap-[1rem] lg:gap-[2rem]  text-[0.95rem] nh:text-[1.2rem] lg:text-[2rem] hover:bg-[#f2f6f8] h-auto py-[0.8rem] px-[1rem] nh:py-[0.8rem] nh:px-[1rem] lg:py-[1.5rem] lg:px-[3rem] rounded-lg lg:rounded-2xl border-2 border-solid  border-[#DA22FF]'>
                        <AiOutlineCheck className="text-[1.4rem] nh:hidden nh:text-[1.6rem] lg:text-[3rem]"/>
                            <div>
                                <select
                                    onChange={e=>setValueToOPtions(e.target.value)} 
                                    className='outline-0 bg-transparent'
                                >
                                   <option
                                        value={item.USD} 
                                    >
                                        USD (US Dollar)
                                    </option>
                                    <option 
                                        value={item.INR} 
                                    >
                                        INR (Indian Rupee)
                                    </option>
                                    <option
                                        value={item.NZD} 
                                    >
                                        NZD (NewZealand Dollar)
                                    </option>
                                    <option
                                        value={item.CNY} 
                                    >
                                        CNY (Chinese Yuan)
                                    </option>
                                    <option
                                        value={item.EUR} 
                                    >
                                        EUR (Euro)
                                    </option>
                                    <option
                                        value={item.CAD} 
                                    >
                                        CAD (Canadian Dollar)
                                    </option>
                                    <option
                                        value={item.GBP} 
                                    >
                                        GBP (British Pounds)
                                    </option>
                                    <option
                                        value={item.RUB} 
                                    >
                                        RUB (Russian Rubble)
                                    </option>
                                    <option
                                        value={item.AUD} 
                                    >
                                        AUD (Australian Dollar)
                                    </option>
                                    <option
                                        value={item.PHP} 
                                    >
                                        PHP (Phillipine pesso)
                                    </option>
                                    <option
                                        value={item.ZAR} 
                                    >
                                        ZAR (SA Rand)
                                    </option>
                                </select>
                            </div>
                    </div>
                </div>
            </div>
           
            <div className='w-full text-[0.95rem] nh:text-[1.2rem] lg:text-[2rem]'>
               <a href="mailto:fluidbrakes@gmail.com">
                    <button className='w-full hover:bg-[#b7d8e7] text-white tracking-wider h-auto py-[1.3rem] px-[1rem] nh:py-[1.3rem] nh:px-[1rem] lg:py-[2rem] lg:px-[3rem] rounded-lg lg:rounded-2xl gradient border-[2px]'>
                        Get in touch
                    </button>
                </a>
            </div>
        </div>
        )}
    </div>
  )
}

export default Moneyconvert
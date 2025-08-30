import {React,useId} from 'react'


function InputBox({
    label,
    selectCurrency = "usd",
    ammount,
    onAmmountChange,
    onCurrencyChange,
    currencyOptions = [],
    amountDisable = false,
    currencyDisable = false,
    className = ""
    
    

}){

    const ammountId = useId();
    return (
        <div className=' bg-white  rounded-lg p-2 g-5 flex text-sm' >
            <div className="w-1/2">
                <label htmlFor={ammountId} className='text-black/40 mb-2 inline-block'>{label} </label>
                
                 <input type='number' 
                 className='border w-full py-1.5 px-2'
                 placeholder='Ammount'
                 value={ammount}
                 onChange={(e)=> onAmmountChange &&
                    onAmmountChange(Number(e.target.value))
                }
                id={ammountId}
                disabled = {amountDisable}
                 />
            </div>
           
            <div className='w-1/2 text-right flex flex-wrap justify-end'>
                <p className='w-full text-black/40 mb-2'>currencyType</p>
                <select 
                
                value={selectCurrency}
                id=""
                className='rounded-lg px-1 py-1 bg-gray-100 
                cursor-pointer outline-none'
                onChange={(e)=> onCurrencyChange && 
                    onCurrencyChange(e.target.value)} 
                disabled={currencyDisable} 
                >
                {currencyOptions.map((currency)=>(
                    <option  key={currency}>{currency}</option>
                ))}

                </select>
            </div>
            
        </div>
    )
}

export default InputBox;
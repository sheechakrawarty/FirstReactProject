import { useState } from 'react'
import InputBox from './Components/InputBox';
import useCurrencyInfo from './Hooks/useCorrencyInfo'

function App() {
  const [ammount,setAmmount] = useState()
  const [to, setTo] = useState('inr')
  const [from, setFrom] = useState('usd')
  const [converted, setConverted] = useState() 

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  //console.log(options)
  

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConverted(ammount)
    setAmmount(converted)
  }
  const convert = () =>{setConverted(ammount* 
    currencyInfo[to])
  
            console.log({ammount} )
            console.log({converted})
            console.log(to)
            console.log(from)
  }
  return (
    
    <div className='w-full h-screen flex justify-center items-center
      bg-[url("./assets/bg.jpg")] bg-cover bg-center'>
      <div className='w-[400px] h-[400px] bg-white/30 
        backdrop-blur-md rounded-lg p-8 flex flex-col 
        justify-center items-center gap-6'>
        <h1 className='text-3xl font-bold text-white mb-4'>
          Currency Converter</h1>
        <form 
          onSubmit={(e)=>{e.preventDefault();
            convert()
            
          }}>
            <div className='p-2'>
              <InputBox 
                label="From"
                ammount={ammount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmmount(ammount)}
                selectCurrency={from}
                onAmmountChange = {(ammount) => setAmmount(ammount)}
                
              />
            </div>
            <div className='w-full h-2 relative  '>
              <button type='button'
                className='absolute border-2 right-0 bottom-0 border-white rounded-md 
                bg-blue-600 text-white px-2 py-0.5 hover:bg-blue-700'
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div>
              <InputBox
                label="To"
                ammount={converted}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
                onAmmountChange={(ammount)=>setAmmount({converted})}
              />
            </div>
            
          <button 
            type='submit' 
            className='w-[300px] h-[30px] bg-blue-500 my-3 
            hover:bg-blue-800  text-center rounded-lg '
            >Change {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
        
      </div>
    </div>
  
  )
}

export default App

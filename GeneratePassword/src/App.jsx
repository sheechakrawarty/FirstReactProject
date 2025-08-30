import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length,setLength] = useState(10)
  const [includeNumber,setIncludeNumber] = useState(false)
  const [includeChar,setIncludeChar] = useState(false)  
  const [password,setPassword] = useState('')


  const generatePassword = useCallback(() =>{
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(includeChar){
      chars += "!@#$%^&*()"
    }
    if(includeNumber){
      chars += "0123456789"
    }
    let password = ""
    for(let i=0;i<length;i++){
      const randomIndex = Math.floor(Math.random()*chars.length)
      password += chars[randomIndex]
    }
    console.log(password)
    setPassword(password)
  },[length,includeNumber,includeChar,setPassword])


  useEffect(()=>{
    generatePassword()
  },[generatePassword,length,includeNumber,includeChar])

  const copyRef = useRef(null)
  const copyToClipboard = useCallback(() =>{
    window.navigator.clipboard.writeText(password)
    console.log("copied")
    copyRef.current.innerText = "copied"
    
  } ,[password])

  return (
   <div className='top-0 h-max w-max  items-center  bg-gray-600 text-white mx-10 '>
    <h1 className='text-xl my-2 px-10  rounded-4xl bg-gray-400 top-1'>Password Generator</h1>
    <div>
      <input type="text" className='bg-gray-400 text-black rounded-lg mx-1 my-1 p-2 w-xs'
       placeholder='Your Password'
       readOnly
       value={password}

       />
       <button className='w-s bg-amber-800 rounded-lg mx-2 my-2 p-2'
       onClick={copyToClipboard}
       ref = {copyRef}>copy</button>
      
    </div>
    <div className='flex flex-row p-2 m-2'>
      <input type="range" 
      id='setRange' 
      min={1}
      max={100}
      value={length}
      onChange={(e)=>setLength(e.target.value)}
      className='m-2 p-2'
      />
      <label htmlFor="setRange" className='m-2 p-2'>length : {length}</label>
      <input type="checkbox"  
          id='number'
          className='m-2 p-2'
          onChange = {()=>setIncludeNumber(!includeNumber)}
          
      />
      <label htmlFor="number"className='m-2 p-2'>Numbers</label>

      <input type="checkbox"  id='char'className='m-2 p-2'
        onChange={()=>setIncludeChar(!includeChar)}/>
      <label htmlFor="char" className='m-2 p-2'>Characters</label>
    </div>
   </div>
  )
}

export default App

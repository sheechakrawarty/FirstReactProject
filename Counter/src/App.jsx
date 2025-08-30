import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  

  let [count, setCounter] = useState(1);
  const addValue = () =>{
    if(count == 20)return 20;
    count  = count+1;
    setCounter(count);
    console.log(count);

}

const reduceValue = ()=>{
  if(count==0)return 0
  count = count -1;
  setCounter(count)
  console.log(count);
}

  return (
    <>
      <h1>Learn React With Us</h1>
      <button onClick={addValue}>+</button>
      <button>{count}</button>
      <button onClick={reduceValue}>-</button>
      <button>{count}</button>

    </>
  )
}

export default App

import { useState } from 'react'


function App() {
  
  const [currColor,setColor] = useState("green")

  
  return (
    
    <div className=" h-screen w-full"style={{backgroundColor:currColor}}>
      <button style={{backgroundColor: "red"}} onClick={()=>setColor("red")}> red </button>
      <button style={{backgroundColor: "Black"}} onClick={()=>setColor("black")}> Black </button>
      <button style={{backgroundColor: "whitesmoke"}} onClick={()=>setColor("whitesmoke")}> whitesmoke </button>
      <button style={{backgroundColor: "pink"}} onClick={()=>setColor("pink")}> pink </button>
      <button style={{backgroundColor: "yellow"}} onClick={()=>setColor("yellow")}> yellow </button>
      <button style={{backgroundColor: "brown"}} onClick={()=>setColor("brown")}> brown </button>
      <button style={{backgroundColor: "grey"}} onClick={()=>setColor("grey")}> grey </button>
    </div>
    
  )
}

export default App

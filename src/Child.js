import React from 'react'
import { useState } from 'react'
function Child({func}) {
    const[name,setName]=useState("")
    const submitName = () => {
        func(name);
      };
    
  return (
    <div>
      <h1>Child </h1>
      <input type="text"
      placeholder="enter your name" 
      onChange={(e)=>setName(e.target.value)}
      value={name}
      />
      <button onClick={submitName}>Click</button>
    </div>
  )
}

export default Child

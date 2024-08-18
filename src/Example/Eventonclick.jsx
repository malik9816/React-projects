import React from 'react'

import { useState } from 'react'

const Eventonclick = () => {
    const[number, setNumber] = useState (0)

    const Increment= ()=>{
        setNumber(number +1)
    }

    const Decrement = ()=>{
        if(number > 0){
            setNumber(number -1)
        }   
    }

    const Reset = ()=>{
        setNumber(0)
    }


  return (
    <div>
      <h1>Enter a number</h1> 
      {number} <br />

      <div className="">
        <button onClick={Increment} >Increment</button>
        <button onClick={Decrement }>Decrement</button>
        <button onClick={Reset}>Reset</button>
      </div>
    </div>
  )
}

export default Eventonclick

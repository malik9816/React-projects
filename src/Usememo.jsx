import React from 'react'

import { useState, useEffect } from 'react'

function Usememo  () {

    const [Time, setTime] = useState((new Date).toLocaleTimeString());

    useEffect(
        () => {
            setInterval(
                () =>{
                    setTime(new Date().toLocaleTimeString())
                }
            )
        }
    )
  return (
    <div>
      {Time}
    </div>
  )
}

export default Usememo


// useEffect(
//     ()=>{
//         setInterval(
//             ()=>{
//                 setTime(new Data().toLocaleTimeString())
//             }, 1000
//         )
//     },[]
// )

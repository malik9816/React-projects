import React, { useState } from 'react'

const Formhandle = () => {
    const [inputnum, setInputNum] = useState("");
    const [nexteven, setNextEven] = useState("null");

    const inputchange = (e)=>{
        const number = parseInt(e.target.value);
        setInputNum(e.target.value);

        if (!isNaN(number)) {
          setNextEven("Please Enter a number");
        }else if (number < 0) {
          setNextEven("Please number postive number")
        }else if (number % 2 === 0){
          setNextEven(
            `next 3 even number are: ${number + 2}, ${number + 4}, ${number + 6}`
          );
        } else if (number % 2 === 1) {
          setNextEven(
          `next 3 even number are: ${number + 2}, ${number + 4}, ${number + 6}`
          );
        }
    };
  return (
    <>
    <div>
      <div className="text-center bg-white p-8 shadow-1g">
        <input 
        placeholder='Enter a number'
        className="border border-gray-400 rounded-md p-1 w-64 mb-4"
        type="text"
        name="inputnum"
        value={inputnum}
        onChange={inputnum}
         />
      </div>
    </div>
    </>
  )
}

export default Formhandle

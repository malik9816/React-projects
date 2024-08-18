import React from 'react'

import { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
    
    // const [email, setEmail]= useState("");
    // const [Password, setPassword]= useState("");

    const [input, setInput]= useState({
        email:"",
        password:"",
    });

    const handleChange = (e) =>{
        setInput({...input, [e.target.name] : e.target.value});
    };

    const [showpassword, setShowpassword]= useState (false);

    const tooglepassword = () =>{
        setShowpassword(!showpassword);
    };
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(input);
    };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-slate-300">
        <div className="w-full max-w-lg bg-white shadow-lg p-5 rounded-lg space-y-5">
            <h2 className="text-2xl font-bold text-gray-900 text-center" >Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
                    <input className="w-full px-3 mt-1 text-gray-800 bg-gray-200 border border-gray-300 rounded-md" 
                    id="email"
                    type="email" 
                    placeholder="Enter Email Id"
                    onChange={handleChange}
                    value={input.email}
                    name='email'
                    />
                    
                </div>
                <div className='relative'>
                    <label htmlFor="password" className=" block text-sm font-medium">Password</label>
                    <input className="w-full px-3 mt-1 text-gray-800 bg-gray-200 border border-gray-300 rounded-md" 
                    id="password"
                    type={showpassword? "text" : "password"}
                    placeholder="Enter Password" 
                    onChange={handleChange}
                    value={input.password}
                    name='password'
                    />
                    <button className="absolute right-0 flex item-center px-3 -mt-5" onClick={tooglepassword}>{showpassword? < FaEye /> : <FaEyeSlash /> }</button>
                    
                </div>
                <button type="login" className="px-4 py-1 font-semibold text-white mt-2  bg-blue-500 rounded-md">Login</button>
                 
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
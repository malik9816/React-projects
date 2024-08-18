import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { IoLogInOutline } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-1">
        <nav className="flex bg-slate-800 justify-between mt-2 p-3 rounded-md">
        <div>
           <img src="\web-logo.jpg" alt="Logo" className='h-14 mr-8 rounded-lg' />
        </div>
        <div className="relative">
            <input className="rounded-xl mt-3 px-14 border border-gray-200" type="text" placeholder='Search'  />
            <button type='submit' className="absolute flex items- px-3 -mt-5" ><FaSearch /></button>
        </div>
        
        <div>
        <ul className="flex space-x-5 ">
            <div className="text-yellow-50 text-lg hover:text-red-600">
                <h2><FaHome />Home</h2>
            </div>
            <div className="text-yellow-50 text-lg hover:text-red-600">
                <h2><IoMdCart />Cart</h2>
            </div>
            <div className="text-yellow-50 text-lg hover:text-red-600">
                <h2><FcAbout />About</h2>
            </div>
            <div className="text-yellow-50 text-lg hover:text-red-600">
                <h2><IoLogInOutline />Login</h2>
            </div>
        </ul>
        </div>
    </nav>
    </div>
  )
}

export default Navbar


// {/* <div className="flex justify-between bg-slate-900 ">
//         {/* <nav className="navbar w-full bg-slate-400 shadow-lg p-3 rounded-lg  "> */}
//             <div className="navbar-logo mt">
//                 <img className="" src="" alt="Logo"  />
//             <div>
//                 <div>
//                     <input  type="search" placeholder='Search'  />
//                 </div>
//                 <div>
//                     <ul className="option flex space-x-5 ">
//                         <div className="text-white text-lg hover:text-gray-300">
//                             <h2>Home</h2>
//                         </div>
//                         <div className="text-white text-lg hover:text-gray-300">
//                             <h2>Cart</h2>
//                         </div>
//                         <div className="text-white text-lg hover:text-gray-300">
//                             <h2>About</h2>
//                         </div>
//                         <div className="text-white text-lg hover:text-gray-300">
//                             <h2>Login</h2>
// //                         </div>
// //                     </ul>
//                 </div>
                    
//                 </div>
//             </div>
//         {/* </nav> */}
//     </div> */}

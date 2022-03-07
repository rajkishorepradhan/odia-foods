import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function Header (){
    return (
        <>
        <div className="w-full bg-green-600 h-12	">
           <div className="flex w-11/12  m-auto justify-between ">
               <div className="text-white mt-2">Odisha Foods</div>
               <div className="flex bg-white rounded mt-2 w-96 p-px	 border border-white  ">
                   <input type="text" className="w-full outline-0	" placeholder="Search product" />
                   <SearchIcon/>
               </div>
               <div className="mt-2">
                   <button className="text-white">Login</button>
               </div>
               <div className="mt-2"><ShoppingCartIcon/></div>
           </div>
           </div>
        </>
    )
}
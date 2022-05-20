import {React, useState }from "react";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from '../../assets/odiafoods.gif';

import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';
import Login from "./login";
import { Link } from "react-router-dom";
export default function Header ({ history }){

    //Popo up Login 
    const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/all-product/${keyword}`);
    } else {
      history.push("/all-product");
    }
  };
    return (
        <>
        <div className="w-full  h-12	">
           <div className="flex w-11/12  m-auto justify-between ">
               <div className="text-white "> <img className="w-32 h-12" src={Logo} alt="logo" /></div>
               <div className="flex bg-white rounded w-96 h-8 p-px mt-2	 border border-blue-500  ">
               <form className="w-full" onSubmit={searchSubmitHandler}>
                   <input type="text" className="w-full outline-0	"  onChange={(e) => setKeyword(e.target.value)} placeholder="Search product" />
                   <input type="submit" value="Search" />
                   <SearchIcon/>
                   </form>
               </div>
               <div className="mt-2">
                   <button className="text-blue-500" onClick={handleClickOpen}>Login</button>
                   <Dialog open={open} onClose={handleClose}>
                   <DialogContent>
                       <Login/>
                   </DialogContent>
                   </Dialog>
               </div>
           <Link to="/cart"><div className="mt-2"><ShoppingCartIcon/></div></Link>
               
              
           </div>
           </div>
        </>
    )
}
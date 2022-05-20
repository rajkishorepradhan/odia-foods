import React from "react";
import Header from "../Header/header";
import Catagory from "../Header/catagory";
import Body from "./body";

export default function Home (){
    return(
        <>
            <div className="grid">
            <Header/>
            <Catagory/>
          
            <Body/>
            </div>
        </>
    )
}
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import ReactStars from "react-rating-stars-component";
import Rating from '@mui/material/Rating';

import { getProduct } from '../../actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
export default function Body() {


    const dispatch = useDispatch();
    const { loading, error, products, productCount } = useSelector(
        (state) => state.products
    );
    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch])

    const options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        value: 2.5,
        isHalf: true,
    }

    return (
        <>
        {loading ? (
            "loading"
        ) :(
            <div className=' w-11/12  m-auto flex grid gap-4 grid-cols-3 grid-rows-3 border border-black'>
          
                {products && products.map((product) =>
                    <Link className="productCard" to={`/product/${product._id}`}>
                    <div>
                      {/* <div> <img src={product.images[0].url}/></div> */}
                        
                        <p>{product.name}</p>
                        <p>{product.category}</p>
                        <p>{product.description}</p>
                        <span>{`₹${product.price}`}</span>
                        
                    </div>
                    </Link>
                )}
               
            </div>
            )};
        </>
    )
}
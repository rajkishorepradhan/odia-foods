import React, { useEffect } from 'react';
import data from '../../Array/data';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../actions/productAction';
export default function Product({match}) {

    const {id} = useParams();
    const dispatch= useDispatch();
    const {product,loading,error} = useSelector(
        (state) =>state.productDetails        
    );
    console.log(id);
    useEffect(()=>{
        dispatch(getProductDetails(id));
    },[dispatch,id,error,loading]);

    console.log("product Is here",product);
    return (
        <>
        <div >
            {/* <div className='w-24 h-16 border border-black'> <img src={product.images[0].url} alt={product.name} /></div> */}
            <div>{product.name}</div>
            
            <h2>{product.category}</h2>
            <h2>{product.countInStock}</h2>
            <h2>{product.brand}</h2>
            <h2>{product.price}</h2>

            <h2>{product.description}</h2>
            </div>
        </>
    )
}
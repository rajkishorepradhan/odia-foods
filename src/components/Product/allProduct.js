import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from '../../actions/productAction';
import Body from '../HomePage/body';
export default function Allproduct() {
    const dispatch = useDispatch();
    const {
        products,
        loading,
        error,
        productsCount,
        resultPerPage,
        filteredProductsCount,
      } = useSelector((state) => state.products);
      useEffect(()=>{
          dispatch(getProduct());
      },[dispatch]);
      
    return (
        <>
            <div>
                <h2 className="productsHeading">Products</h2>

                <div className="products">
                    {products &&
                        products.map((product) => (
                            <Body key={product._id} product={product} />
                        ))}
                </div>
            </div>
        </>
    )
}
import React from "react";

/**
 * 
 * @param {*} pPrice 
 * @param {*} pImage 
 * @param {*} pName 
 * @param {*} pURL 
 * @returns 
 */
export default function SingleProductSmall(props){
    return(
        <div className="product-image-wrapper">
            <div className="single-products">
                <div className="productinfo text-center">
                    <img src={process.env.PUBLIC_URL+"/assets/images/home/" + props.pImage} alt="" />
                    <h2>${props.pPrice}</h2>
                    <p>{props.pName}</p>
                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                </div>
            </div>
        </div>
    );
}
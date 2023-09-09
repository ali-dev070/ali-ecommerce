import React from "react";

/**
 * 
 * @param {*} pImage 
 * @param {*} pPrice 
 * @param {*} pName 
 * @param {*} pURL 
 * @returns 
 */
export default function SingleProductLarge(props){
    return(
        <div className="product-image-wrapper">
            <div className="single-products">
                    <div className="productinfo text-center">
                        <img src={process.env.PUBLIC_URL+"/assets/images/home/" + props.pImage} alt="" />
                        <h2>${props.pPrice}</h2>
                        <p>{props.pName}</p>
                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                    </div>
                    <div className="product-overlay">
                        <div className="overlay-content">
                            <h2>${props.pPrice}</h2>
                            <p>{props.pName}</p>
                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                        </div>
                    </div>
            </div>
            <div className="choose">
                <ul className="nav nav-pills nav-justified">
                    <li><a href="#"><i className="fa fa-plus-square"></i>Add to wishlist</a></li>
                    <li><a href="#"><i className="fa fa-plus-square"></i>Add to compare</a></li>
                </ul>
            </div>
        </div>
    );
}
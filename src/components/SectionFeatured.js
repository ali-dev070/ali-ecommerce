import React from "react";

import SingleProductLarge from "./SingleProductLarge";

export default function SectionFeatured(props){
    const products = props.data.map(prod => {
        return <div className="col-sm-4" key={prod.id}>
                <SingleProductLarge pPrice={prod.price} pName={prod.name} pImage={prod.image_name} />
            </div>
    });

    return (
        <div className="features_items">
            <h2 className="title text-center">Features Items</h2>
            {products}
        </div>
    );
}
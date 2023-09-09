import React from "react";

import SingleProductSmall from "./SingleProductSmall";

export default function SectionRecommended(props){
    const products = props.data.map(prod => {
        return <div className="col-sm-4" key={prod.id}>
                <SingleProductSmall pPrice={prod.price} pName={prod.name} pImage={prod.image_name} />
            </div>
    });

    return(
		<div className="recommended_items">
			<h2 className="title text-center">recommended items</h2>
			
			<div id="recommended-item-carousel" className="carousel slide" data-ride="carousel">
				<div className="carousel-inner">
					<div className="item active">	
						{products.slice(0,3)}
					</div>
					<div className="item">
						{products.slice(3,6)}
					</div>
				</div>
					<a className="left recommended-item-control" href="#recommended-item-carousel" data-slide="prev">
					<i className="fa fa-angle-left"></i>
					</a>
					<a className="right recommended-item-control" href="#recommended-item-carousel" data-slide="next">
					<i className="fa fa-angle-right"></i>
					</a>			
			</div>
		</div>
    );
}
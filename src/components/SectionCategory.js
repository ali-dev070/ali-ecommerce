import React from "react";

import SingleProductSmall from "./SingleProductSmall";

export default function SectionCategory(){
    return (
		<div className="category-tab">
			<div className="col-sm-12">
				<ul className="nav nav-tabs">
					<li className="active"><a href="#tshirt" data-toggle="tab">T-Shirt</a></li>
					<li><a href="#blazers" data-toggle="tab">Blazers</a></li>
					<li><a href="#sunglass" data-toggle="tab">Sunglass</a></li>
					<li><a href="#kids" data-toggle="tab">Kids</a></li>
					<li><a href="#poloshirt" data-toggle="tab">Polo shirt</a></li>
				</ul>
			</div>
			<div className="tab-content">
				<div className="tab-pane fade active in" id="tshirt" >
					<div className="col-sm-3">
						<SingleProductSmall pPrice="35" pName="Easy Polo Black Edition" pImage="gallery1.jpg" />
					</div>
					<div className="col-sm-3">
						<SingleProductSmall pPrice="35" pName="Easy Polo Black Edition" pImage="gallery2.jpg" />
					</div>
					<div className="col-sm-3">
						<SingleProductSmall pPrice="35" pName="Easy Polo Black Edition" pImage="gallery3.jpg" />
					</div>
					<div className="col-sm-3">
						<SingleProductSmall pPrice="35" pName="Easy Polo Black Edition" pImage="gallery4.jpg" />
					</div>
				</div>
				
				<div className="tab-pane fade" id="blazers" >
					<div className="col-sm-3">
						<SingleProductSmall pPrice="56" pName="Easy Polo Black Edition" pImage="gallery4.jpg" />
					</div>
					<div className="col-sm-3">
						<SingleProductSmall pPrice="56" pName="Easy Polo Black Edition" pImage="gallery3.jpg" />
					</div>
					<div className="col-sm-3">
						<SingleProductSmall pPrice="56" pName="Easy Polo Black Edition" pImage="gallery2.jpg" />
					</div>
					<div className="col-sm-3">
						<SingleProductSmall pPrice="56" pName="Easy Polo Black Edition" pImage="gallery1.jpg" />
					</div>
				</div>
				
				<div className="tab-pane fade" id="sunglass" >
					<div className="col-sm-3">
						<SingleProductSmall pPrice="56" pName="Easy Polo Black Edition" pImage="gallery3.jpg" />
					</div>
					<div className="col-sm-3">
						<SingleProductSmall pPrice="56" pName="Easy Polo Black Edition" pImage="gallery4.jpg" />
					</div>
					<div className="col-sm-3">
						<SingleProductSmall pPrice="56" pName="Easy Polo Black Edition" pImage="gallery1.jpg" />
					</div>
					<div className="col-sm-3">
						<SingleProductSmall pPrice="56" pName="Easy Polo Black Edition" pImage="gallery2.jpg" />
					</div>
				</div>
				
				<div className="tab-pane fade" id="kids" >
					<div className="col-sm-3">
						<SingleProductSmall pPrice="56" pName="Easy Polo Black Edition" pImage="gallery1.jpg" />
					</div>
					<div className="col-sm-3">
						<SingleProductSmall pPrice="56" pName="Easy Polo Black Edition" pImage="gallery2.jpg" />
					</div>
					<div className="col-sm-3">
						<SingleProductSmall pPrice="56" pName="Easy Polo Black Edition" pImage="gallery3.jpg" />
					</div>
					<div className="col-sm-3">
						<SingleProductSmall pPrice="56" pName="Easy Polo Black Edition" pImage="gallery4.jpg" />
					</div>
				</div>
				
				<div className="tab-pane fade" id="poloshirt" >
					<div className="col-sm-3">
						<SingleProductSmall pPrice="56" pName="Easy Polo Black Edition" pImage="gallery2.jpg" />
					</div>
					<div className="col-sm-3">
						<SingleProductSmall pPrice="56" pName="Easy Polo Black Edition" pImage="gallery4.jpg" />
					</div>
					<div className="col-sm-3">
						<SingleProductSmall pPrice="56" pName="Easy Polo Black Edition" pImage="gallery3.jpg" />
					</div>
					<div className="col-sm-3">
						<SingleProductSmall pPrice="56" pName="Easy Polo Black Edition" pImage="gallery1.jpg" />
					</div>
				</div>
			</div>
		</div>
    );
}
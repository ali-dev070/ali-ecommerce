import {React, useState, useEffect} from "react";
import {csv} from 'd3';
import RangeSlider from "react-range-slider-input";

import PromotionBanner from "../components/PromotionBanner";
import SectionFeatured from "../components/SectionFeatured";

export default function Products(){

    const [shopData, setShopData] = useState([]);
	const [priceRange, setPriceRange] = useState([0, 600]);
	const [prodCategory, setProdCategory] = useState([]);
	const [prodBrands, setProdBrands] = useState([]);

	let featuredProducts = shopData;//.filter( prod => prod.tag == 'featured');

	useEffect(() => {
		const fetchProducts = async () => {
			const data = await csv(process.env.PUBLIC_URL + './data.csv');
			setShopData( data.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1] ));

			if(prodCategory.length > 0){
				setShopData(data.filter(pc => prodCategory.some(c => c === pc.category) ));
			}

			if(prodBrands.length > 0){
				setShopData(data.filter(pc => prodBrands.some(c => c === pc.brand) ));
			}
		};

		fetchProducts()
		.catch(console.error);

	},[priceRange, prodCategory, prodBrands]);

	const addToCategories = (e, cat) => {
		e.preventDefault();
		if(cat === ""){
			setProdCategory([]);
		} else {
			setProdCategory([...prodCategory, cat]);
		}
	};

	const addToBrands = (e, brand) => {
		e.preventDefault();
		if(brand === ""){
			setProdBrands([]);
		} else {
			setProdBrands([...prodBrands, brand]);
		}
	};

    return(
        <>
        <PromotionBanner />
        <section>
		<div className="container">
			<div className="row">
				<div className="col-sm-3">
					<div className="left-sidebar">
						<h2>Category</h2>
						<div className="panel-group category-products" id="accordian">
							<div className="panel panel-default disp-cats">
								{prodCategory.map(p=> <span className="selectedCatsBrands"> {p} </span>)}
							</div>
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title">
										<a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
											<span className="badge pull-right"><i className="fa fa-plus"></i></span>
											Sportswear
										</a>
									</h4>
								</div>
								<div id="sportswear" className="panel-collapse collapse">
									<div className="panel-body">
										<ul>
											<li><a onClick={e => addToCategories(e, "nike")}>Nike </a></li>
											<li><a onClick={e => addToCategories(e, "under armour")}>Under Armour </a></li>
											<li><a onClick={e => addToCategories(e, "adidas")}>Adidas </a></li>
											<li><a onClick={e => addToCategories(e, "puma")}>Puma</a></li>
											<li><a onClick={e => addToCategories(e, "asics")}>ASICS </a></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title">
										<a data-toggle="collapse" data-parent="#accordian" href="#mens">
											<span className="badge pull-right"><i className="fa fa-plus"></i></span>
											Mens
										</a>
									</h4>
								</div>
								<div id="mens" className="panel-collapse collapse">
									<div className="panel-body">
										<ul>
											<li><a onClick={e => addToCategories(e, "fendi")}>Fendi</a></li>
											<li><a onClick={e => addToCategories(e, "guess")}>Guess</a></li>
											<li><a onClick={e => addToCategories(e, "valentino")}>Valentino</a></li>
											<li><a onClick={e => addToCategories(e, "dior")}>Dior</a></li>
											<li><a onClick={e => addToCategories(e, "versace")}>Versace</a></li>
											<li><a onClick={e => addToCategories(e, "armani")}>Armani</a></li>
											<li><a onClick={e => addToCategories(e, "prada")}>Prada</a></li>
											<li><a onClick={e => addToCategories(e, "dolce and gabbana")}>Dolce and Gabbana</a></li>
											<li><a onClick={e => addToCategories(e, "chanel")}>Chanel</a></li>
											<li><a onClick={e => addToCategories(e, "gucci")}>Gucci</a></li>
										</ul>
									</div>
								</div>
							</div>
							
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title">
										<a data-toggle="collapse" data-parent="#accordian" href="#womens">
											<span className="badge pull-right"><i className="fa fa-plus"></i></span>
											Womens
										</a>
									</h4>
								</div>
								<div id="womens" className="panel-collapse collapse">
									<div className="panel-body">
										<ul>
											<li><a onClick={e => addToCategories(e, "find")}>Fendi</a></li>
											<li><a onClick={e => addToCategories(e, "guess")}>Guess</a></li>
											<li><a onClick={e => addToCategories(e, "valentino")}>Valentino</a></li>
											<li><a onClick={e => addToCategories(e, "dior")}>Dior</a></li>
											<li><a onClick={e => addToCategories(e, "versace")}>Versace</a></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><a href="#">Kids</a></h4>
								</div>
							</div>
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><a href="#">Fashion</a></h4>
								</div>
							</div>
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><a href="#">Households</a></h4>
								</div>
							</div>
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><a href="#">Interiors</a></h4>
								</div>
							</div>
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><a href="#">Clothing</a></h4>
								</div>
							</div>
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><a href="#">Bags</a></h4>
								</div>
							</div>
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><a href="#">Shoes</a></h4>
								</div>
							</div>
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><a onClick={e => addToCategories(e, "")} style={{color:'red', cursor:'pointer'}}>Clear All</a></h4>
								</div>
							</div>
						</div>
					
						<div className="brands_products">
							<h2>Brands</h2>
							<div className="brands-name ">
								<ul className="nav nav-pills nav-stacked">
									<li><a onClick={e => addToBrands(e, "acne")}> <span className="pull-right">(50)</span>Acne</a></li>
									<li><a onClick={e => addToBrands(e, "grune erde")}> <span className="pull-right">(56)</span>Grüne Erde</a></li>
									<li><a onClick={e => addToBrands(e, "albiro")}> <span className="pull-right">(27)</span>Albiro</a></li>
									<li><a onClick={e => addToBrands(e, "ronhill")}> <span className="pull-right">(32)</span>Ronhill</a></li>
									<li><a onClick={e => addToBrands(e, "oddmolly")}> <span className="pull-right">(5)</span>Oddmolly</a></li>
									<li><a onClick={e => addToBrands(e, "boudestijn")}> <span className="pull-right">(9)</span>Boudestijn</a></li>
									<li><a onClick={e => addToBrands(e, "rosch creative culture")}> <span className="pull-right">(4)</span>Rösch creative culture</a></li>
									<li><a onClick={e => addToBrands(e, "")} style={{color:'red', cursor:'pointer'}}> <span className="pull-right"></span>Clear All</a></li>
								</ul>
							</div>
						</div>
						
						<div className="price-range">
							<h2>Price Range</h2>
							<div className="well text-center">
								<RangeSlider name="priceRangeInput" min={0} max={600} step={5} value={priceRange} onInput={setPriceRange} />
								<b className="pull-left">$0</b> <b className="pull-right">$600</b>
							</div>
						</div>
						
						<div className="shipping text-center">
							<img src={process.env.PUBLIC_URL+"/assets/images/home/shipping.jpg"} alt="" />
						</div>
					
					</div>
				</div>
				
				<div className="col-sm-9 padding-right">

					<SectionFeatured data={featuredProducts} />
					
				</div>
			</div>
		</div>
	</section>
        </>
    );
}
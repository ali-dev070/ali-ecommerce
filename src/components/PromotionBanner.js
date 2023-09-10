import React from "react";

export default function PromotionBanner(){
    return(
    <section id="advertisement">
		<div class="container">
			<img src={process.env.PUBLIC_URL+"/assets/images/shop/advertisement.jpg"} alt="" />
		</div>
	</section>
    );
}
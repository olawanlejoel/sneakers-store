import React from 'react';

import nike3 from './../assets/images/nike-3.jpg';

const About = () => {
	return (
		<div className="container">
			<button className="back-btn btn">Back</button>
			<div className="single-product-container">
				<div className="page-title">
					<h2>
						About us<span>.</span>
					</h2>
					<div className="product-container">
						<div className="product-img">
							<img src={nike3} alt="" />
						</div>
						<div className="product-info">
							<h3 className="product-title">Nike Air Max</h3>
							<p className="product-price">$500</p>
							<p className="product-description">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
								eget ex euismod, consectetur nisi eu, consectetur nisi eu, ceu,
								consectetur nisi eu, consectetur nisi eu,
							</p>
							<button className="btn">Add to Cart</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;

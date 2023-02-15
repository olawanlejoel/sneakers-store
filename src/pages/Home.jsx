import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Hero from './../components/Hero';
import Categories from './../components/Categories';

import { request } from 'graphql-request';

const API_KEY = process.env.REACT_APP_HYGRAPH_API_KEY;
const API_URL = `https://api-us-east-1.graphcms.com/v2/${API_KEY}/master`;

const Home = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchSneakers = async () => {
			const { shoes } = await request(
				API_URL,
				`
         { 
            shoes(last: 3) {
					id
					name
					price
					slug
					image {
					  url
					}
					category {
						slug
					 }
				 }
         }
       `
			);

			setProducts(shoes);
		};
		fetchSneakers();
	}, []);

	return (
		<div>
			<div className="container">
				<Hero />
			</div>
			<div className="container new-arrivals-container">
				<h2 className="title">New Arrivals</h2>
				<div className="products">
					{products.map((product) => (
						<div key={product.id} className="product">
							<img src={product.image.url} className="product-img" alt="" />
							<div className="product-content">
								<div className="flex-row">
									<Link to={`shop/${product.category.slug}/${product.slug}`}>
										<h3>{product.name})</h3>
									</Link>
									<p className="price">${product.price}</p>
								</div>
								<button
									className="snipcart-add-item btn"
									data-item-id={product.id}
									data-item-price={product.price}
									data-item-image={product.image.url}
									data-item-name={product.name}
								>
									Add to Cart
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="container">
				<Categories />
			</div>
			<div className="contact-card-section">
				<h2>Contact Us</h2>
				<p>
					Having any difficulties? <br /> Send us a mail Now.
				</p>
				<div className="btn">Send Mail</div>
			</div>
		</div>
	);
};

export default Home;

import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { request } from 'graphql-request';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://api-us-east-1.graphcms.com/v2/${API_KEY}/master`;


const Shop = () => {
	const [products, setProducts] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		const fetchSneakers = async () => {
			const { shoes } = await request(
				API_URL,
				`
         { 
            shoes(first: 50) {
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
		<div className="container">
			<button className="back-btn btn" onClick={() => navigate(-1)}>
				Back
			</button>
			<div className="page-title">
				<h2>
					Shop<span>.</span>
				</h2>
			</div>
			<div className="products">
				{products.map((product) => (
					<div key={product.id} className="product">
						<img src={product.image.url} className="product-img" alt="" />
						<div className="product-content">
							<div className="flex-row">
								<Link to={`${product.category.slug}/${product.slug}`}>
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
	);
};

export default Shop;

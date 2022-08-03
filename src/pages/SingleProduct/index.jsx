import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { request } from 'graphql-request';

import './index.css';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://api-us-east-1.graphcms.com/v2/${API_KEY}/master`;

const SingleProduct = () => {
	const [product, setProduct] = useState(null);
	const navigate = useNavigate();

	const { slug, category } = useParams();

	useEffect(() => {
		const fetchProduct = async () => {
			const { shoe } = await request(
				API_URL,
				`
		{ 
			shoe(where: {slug: "${slug}"}) {
				id
				name
				price
				description
				image {
				  url
				}
			 }
		}
	 `
			);
			setProduct(shoe);
		};
		fetchProduct();
	}, [slug]);

	return (
		<div className="container">
			<button className="back-btn btn" onClick={() => navigate(-1)}>
				Back
			</button>
			<div className="single-product-container">
				<div className="page-title">
					<Link to={`./..`}>
						<h2>
							{category}
							<span>.</span>
						</h2>
					</Link>
					{product && (
						<div className="product-container">
							<div className="product-img">
								<img src={product.image.url} alt="" />
							</div>
							<div className="product-info">
								<h3 className="product-title">{product.name}</h3>
								<p className="product-price">${product.price}</p>
								<p className="product-description">{product.description}</p>
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
					)}
				</div>
			</div>
		</div>
	);
};

export default SingleProduct;

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { request } from 'graphql-request';

import './index.css';

const Categories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const fetchCategories = async () => {
			const { categories } = await request(
				'https://api-us-east-1.graphcms.com/v2/cl4peqmpb1lqu01xnbuy06dan/master',
				`
	      {
	         categories {
					id
					slug
					image {
					  url
					}
				 }
	      }
	    `
			);

			setCategories(categories);
		};
		fetchCategories();
	}, []);

	return (
		<div className="categories-container">
			<h2 className="title">Categories</h2>
			<div className="categories">
				{categories.map((category) => (
					<Link to={`/shop/${category.slug}`} key={category.id}>
						<div className="category">
							<img src={category.image.url} className="category-img" alt="" />
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Categories;

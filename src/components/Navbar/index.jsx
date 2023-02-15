import { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

import Logo from './../../assets/images/logo.png';
import './index.css';

const Navbar = () => {
	const [showLinks, setShowLinks] = useState(false);

	const linksRef = useRef(null);

	const toggleLinks = () => {
		setShowLinks(!showLinks);
	};

	useEffect(() => {
		if (window.innerWidth < 1000) {
			if (showLinks) {
				linksRef.current.style.display = 'block';
			} else {
				linksRef.current.style.display = 'none';
			}
		}
	}, [showLinks]);

	return (
		<nav className="navbar">
			<div className="navbar-container">
				<div className="navbar-header">
					<div className="navbar-logo">
						<Link to="/">
							<img src={Logo} className="logo" alt="Sneaker's Store Logo" />
						</Link>
					</div>
					<div className="flex-icons">
						<i className="fa-solid fa-cart-shopping cart-mobile snipcart-checkout"></i>
						<div className="hamburger-menu" onClick={toggleLinks}>
							<i className="fa-solid fa-bars"></i>
						</div>
					</div>
				</div>
				<div>
					<span class="snipcart-items-count">0</span> |
					<span class="snipcart-total-price">$0.00</span>
				</div>
				<div className="navbar-links-container" ref={linksRef}>
					<ul className="navbar-links">
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/shop">Shop</NavLink>
						</li>
						<li className="cart-desktop snipcart-checkout">
							<i className="fa-solid fa-cart-shopping"></i>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

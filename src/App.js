import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import SingleProduct from './pages/SingleProduct';
import CategoryPage from './pages/CategoryPage';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/shop/:category" element={<CategoryPage />} />
					<Route path="/shop/:category/:slug" element={<SingleProduct />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;

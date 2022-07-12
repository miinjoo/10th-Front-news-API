import React from 'react';
import './App.css';
import NewsPage from './components/NewsPage';
import { Route, Routes } from 'react-router-dom';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<NewsPage />} />
			<Route path="/:category" element={<NewsPage />} />
		</Routes>
	);
};

export default App;

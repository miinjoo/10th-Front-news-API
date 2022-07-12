import React from 'react';
import NewsItem from './NewsItem';
import styled from 'styled-components';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
	box-sizing: border-box;
	padding-bottom: 3rem;
	width: 768px;
	margin: 0 auto;
	margin-top: 2rem;
	@media screen and (max-width: 768px) {
		width: 100%;
		padding-left: 1rem;
		padding-right: 1rem;
	}
`;

// function NewsList({ category }) {
// 	const [articles, setArticles] = useState(null);
// 	const [loading, setLoading] = useState(false);
// 	const query = category === 'all' ? '' : `&category=${category}`;
// 	useEffect(() => {
// 		const fetchData = async () => {
// 			setLoading(true);
// 			try {
// 				const response = await axios.get(
// 					`https://newsapi.org/v2/top-headlines?country=kr$%7Bquery%7D&apiKey=04e0694b02d445e69634283a0d942699`
// 				);
// 				setArticles(response.data.articles);
// 			} catch (err) {
// 				console.log(err);
// 			}
// 			setLoading(false);
// 		};
// 		fetchData();
// 	}, [category]);

// 	if (loading) {
// 		return <NewsListBlock>ㄷㅐㄱㅣㅈㅜㅇ</NewsListBlock>;
// 	}
// 	if (!articles) {
// 		return null;
// 	}
// 	return (
// 		<NewsListBlock>
// 			{articles.map((article) => (
// 				<NewsItem key={article.url} article={article} />
// 			))}
// 		</NewsListBlock>
// 	);
// }

const NewsList = ({ category }) => {
	const [loading, response, error] = usePromise(() => {
		const query = category === 'all' ? '' : `&category=${category}`;
		return axios.get(
			`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=04e0694b02d445e69634283a0d942699`
		);
	}, [category]);
	if (loading) {
		return <NewsListBlock>loading...</NewsListBlock>;
	}
	if (!response) {
		return null;
	}
	if (error) {
		return <NewsListBlock>error!</NewsListBlock>;
	}
	const { articles } = response.data;
	return (
		<NewsListBlock>
			{articles.map((article) => (
				<NewsItem key={article.url} article={article} />
			))}
		</NewsListBlock>
	);
};

export default NewsList;

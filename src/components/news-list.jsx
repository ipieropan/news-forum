import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './news-item';

const NewList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(
                'https://newsapi.org/v2/top-headlines?country=se&apiKey=3e620089b1914b6f96a33ba1ad1f0535'
            );
            console.log(response);
            setArticles(response.data.articles);
        };
        getArticles();
    }, []);

    return (
        <div>
            <h1>Igor news forum</h1>
            {articles.map((article) => {
                return (
                    <NewsItem
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage}
                    />
                );
            })}
        </div>
    );
};

export default NewList;

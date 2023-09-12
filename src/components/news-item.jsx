import React from 'react';
import './news-item-styled.css';

const NewsItem = ({ title, description, url, urlToImage }) => {
    return (
        <div className="news-app">
            <div className="news-item">
                <img className="news-img" src={urlToImage} alt={urlToImage} />
                <h3>
                    <a href={url} target='_blank' rel='noreferrer'>{title}</a>
                </h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default NewsItem;

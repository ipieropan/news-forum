import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './news-item';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NewList = () => {
    const [articles, setArticles] = useState([]);
    const [showNews, setShowNews] = useState(
        'https://newsapi.org/v2/top-headlines?country=br&apiKey=3e620089b1914b6f96a33ba1ad1f0535'
    );

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(showNews);
            console.log(response);
            setArticles(response.data.articles);
        };
        getArticles();
    }, [showNews]);

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">News</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Categories"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item
                                    onClick={() =>
                                        setShowNews(
                                            'https://newsapi.org/v2/top-headlines?language=en&category=business&apiKey=3e620089b1914b6f96a33ba1ad1f0535'
                                        )
                                    }
                                >
                                    Business
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    onClick={() =>
                                        setShowNews(
                                            'https://newsapi.org/v2/top-headlines?language=en&category=health&apiKey=3e620089b1914b6f96a33ba1ad1f0535'
                                        )
                                    }
                                >
                                    Health
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    onClick={() =>
                                        setShowNews(
                                            'https://newsapi.org/v2/top-headlines?language=en&category=sports&apiKey=3e620089b1914b6f96a33ba1ad1f0535'
                                        )
                                    }
                                >
                                    Sports
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Change to other country"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item
                                    onClick={() =>
                                        setShowNews(
                                            'https://newsapi.org/v2/top-headlines?country=se&apiKey=3e620089b1914b6f96a33ba1ad1f0535'
                                        )
                                    }
                                >
                                    Sweden
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    onClick={() =>
                                        setShowNews(
                                            'https://newsapi.org/v2/top-headlines?country=us&apiKey=3e620089b1914b6f96a33ba1ad1f0535'
                                        )
                                    }
                                >
                                    USA
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    onClick={() =>
                                        setShowNews(
                                            'https://newsapi.org/v2/top-headlines?country=gb&apiKey=3e620089b1914b6f96a33ba1ad1f0535'
                                        )
                                    }
                                >
                                    UK
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
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

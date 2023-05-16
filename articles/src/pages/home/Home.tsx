import React, { useEffect, useState } from 'react';
import { ArticleDescription, ArticleListItem } from '../../components';
import styles from "./styles.module.css";
import { v4 as uuid } from 'uuid';
import { Article } from '../../utils/types';

const { articles_container, bar, left_list, parent_list, article_list, article_details } = styles;

const Home = () => {
  const uniqueId: string = uuid();
  const [articles, setArticles] = useState<Article[] | null | any>(null);
  const [articleDetails, setArticleDetails] = useState<Article | null | any>(null);

  const fetchArticles = async () => {
    try {
      const response = await fetch('http://localhost:8000/v1/news?q=');
      const jsonData = await response.json();
      const modifiedArticles = jsonData.articles.map((article: Article, index: number) => {
        return {
          ...article,
          id: `${index}${uniqueId}`,
          viewText: "Unread"
        };
      })
      setArticles(modifiedArticles);
    } catch (error) {
      return error
    }
  };

  useEffect(() => {
    fetchArticles();
    // eslint-disable-next-line
  }, []);

  const handleClickOnArticle = (id: string) => {
    const foundArticle = articles && articles.find((article: any) => article.id === id);
    const modifiedArticles = articles && articles.map((article: Article, index: number) => {
      if (article === foundArticle) {
        return {...article, viewText: "Read"};
      }
      return article;
    })

    setArticleDetails(foundArticle);
    setArticles(modifiedArticles)
  }

  return (
    <div className={articles_container}>
      <div className={parent_list} data-testid="left_side">
        <ul className={article_list}>
          {articles && articles?.map((article: Article) => {
            return <ArticleListItem
              key={article.id}
              article={article}
              handleClickOnArticle={() => handleClickOnArticle(article.id)}
            />
          })}
        </ul>
      </div>
      <div className={bar} data-testid="bar"></div>
      <div className={article_details} data-testid="right_side">
        <ArticleDescription article={articleDetails} />
      </div>
    </div>
  );
}

export default Home;

import React, { FC } from 'react';
import styles from "./styles.module.css";
import { Article } from '../../utils/types';

const {
  item_container,
  image_wrapper,
  image_style,
  source,
  writer,
  heading,
  publishedAt,
  author
} = styles;

interface ListItemType {
  article: Article;
  handleClickOnArticle: (value: any) => void;
}

const ArticleListItem : FC<ListItemType>= ({ article, handleClickOnArticle }) => {
  return (
    <li className={item_container} onClick={() => handleClickOnArticle(article.id)} data-testid="article">
      <div className={image_wrapper}>
        <img className={image_style} src={article.urlToImage} alt="Newspaper image" />
      </div>
      <div className={source}>
        <h2 className={heading}>{article.title}</h2>
        <div className={writer}>
          <div className={publishedAt}>Published in: {article.publishedAt}</div>
          <div className={author}>{article.source.name}</div>
          <div data-testid="viewText"><b><i>{article.viewText} article</i></b></div>
        </div>
      </div>
    </li>
  )
}

export default ArticleListItem
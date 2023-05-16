import React from 'react'
import styles from "./styles.module.css";

const { detail_container, wrapper, heading, image, title, description, content, author, url, no_read_article } = styles;

const ArticleDescription = ({ article }: any) => {
  return (
    <div className={detail_container}>
      {article       
        ? <div className={wrapper}>
            <div className={heading}>
              <img className={image} src={article?.urlToImage} alt={article?.title} data-testid="image" />
              <div>
                <h2 className={title} data-testid="title">{article?.title}</h2>
                <div data-testid="source">{article?.source?.name}</div>    
              </div>
            </div>
            <div>
              <p className={description} data-testid="description">{article?.description}</p>
              <p className={content} data-testid="content">{article?.content}</p>
              <div className={author} data-testid="author">Writter by {article?.author}</div>
            </div>
            <div className={url}><a href={article?.url} data-testid="article_url">{article?.url}</a></div>
          </div>
        : <div className={no_read_article} data-testid="text_no_data">You haven't open an article yet. Please select one if you want to read!</div>
      }
    </div>
  )
}

export default ArticleDescription
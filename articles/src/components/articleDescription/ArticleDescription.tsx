import React from 'react'
import styles from "./styles.module.css";

const { wrapper, heading, image, title, description, content, author, url, no_read_article } = styles;

const ArticleDescription = ({ article }: any) => {
  return (
    <div>
      {article 
      
        ? <div className={wrapper}>
            <div className={heading}>
              <img className={image} src={article?.urlToImage} alt={article?.title} />
              <div>
                <h2 className={title}>{article?.title}</h2>
                <div>{article?.source?.name}</div>    
              </div>
            </div>
            <div>
              <p className={description}>{article?.description}</p>
              <p className={content}>{article?.content}</p>
              <div className={author}>Writter by {article?.author}</div>
            </div>
            <div className={url}><a href={article?.url}>{article?.url}</a></div>
          </div>
        : <div className={no_read_article}>You haven't open an article yet. Please select one if you want to read!</div>
      }
    </div>
  )
}

export default ArticleDescription
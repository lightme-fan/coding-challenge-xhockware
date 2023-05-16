import React, { FC } from 'react';
import styles from "./Search.module.css";
import { Article } from '../../utils/types';

const { form, input_search } = styles;

interface SearchPropType {
  searchValue: string;
  articles: any
  setSearchValue: (value: string) => void;
  setArticles: (value: Article[]) => void
}

const Search: FC<SearchPropType> = ({ searchValue, articles, setSearchValue, setArticles }) => {
  
  const handleSearchOnChange = (event: any) => {
    const trimmedValue = event.target.value.trim();
    setSearchValue(trimmedValue);
    const filteredArticles = articles && [...articles].filter((article: Article) => {
      return article.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
    });

    setArticles(filteredArticles);
  }

  return (
    <form className={form}>
      <input
        className={input_search}
        value={searchValue}
        placeholder="Search article by title"
        onChange={handleSearchOnChange}
      />
    </form>
  )
}

export default Search
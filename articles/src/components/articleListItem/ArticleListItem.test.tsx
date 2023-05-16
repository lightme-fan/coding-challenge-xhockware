import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import ArticleListItem from './ArticleListItem'
import { article } from '../../utils/mockData'

describe("Tests an article ", () => {
  const handleClickOnArticle = jest.fn();

  test('tests list items', async () => {
    const component = render(
    <ArticleListItem
      key={article.id}
      article={article}
      handleClickOnArticle={() => handleClickOnArticle(article.id)}
    />
  )
    const { getByTestId } = component;
    const listItem = getByTestId("article");
    const viewText = getByTestId("viewText");
    expect(listItem).toContainHTML("div");

    await userEvent.click(listItem);
    await expect(handleClickOnArticle).toHaveBeenCalled();
    await expect(viewText).toHaveTextContent(`${article.viewText} article`);

    expect(component).toMatchSnapshot();
  })
})
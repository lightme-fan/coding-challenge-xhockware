import '@testing-library/jest-dom'
import ArticleDescription from './ArticleDescription'
import { render } from '@testing-library/react'
import { article } from '../../utils/mockData'

describe("tests the details of an article ", () => {
  test('tests if a text is displayed when there is no article details', async () => {
    const { getByText } = render(<ArticleDescription article={null} />)
    expect(getByText("You haven't open an article yet. Please select one if you want to read!")).toBeInTheDocument()
  })

  test('tests if article details is not null', async () => {
    const component = render(<ArticleDescription article={article} />)
    const { getByTestId } = component;
    expect(getByTestId("title")).toHaveTextContent(article.title);
    expect(getByTestId("author")).toHaveTextContent(article.author);
    expect(getByTestId("description")).toHaveTextContent(article.description);
    expect(getByTestId("content")).toHaveTextContent(article.content);

    expect(component).toMatchSnapshot();
  })
})
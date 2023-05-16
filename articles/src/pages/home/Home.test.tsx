import '@testing-library/jest-dom'
import { render, waitFor } from '@testing-library/react'
import { article } from '../../utils/mockData'
import Home from './Home'

describe("Tests Home page ", () => {
  const mockArticle = [article];
  
  test("tests fetch articles function", async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: jest.fn().mockResolvedValue(mockArticle),
      })
    );
    await waitFor(() => {
      expect(mockArticle).toHaveLength(mockArticle.length);
    });
  })

  test('tests if a list of article is display on the letf side, bar and right side', async () => {
    const component = render(<Home />);
    const { getByTestId } = component;
    expect(getByTestId("left_side")).toHaveClass("parent_list");
    expect(getByTestId("bar")).toHaveClass("bar");
    expect(getByTestId("right_side")).toHaveClass("article_details");
  })
})
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Article from "./Article";
import "@testing-library/jest-dom";

// const testArticle = {
//   id: "aMqwd", //unique article id
//   headline: "test headline", //title of article
//   createdOn: "2021-08-09T18:02:38-04:00", //timestamp of when article was added
//   summary: "test summary", //short summary statement of article
//   body: "test body", //paragraph of article text
// };

const testArticle = {
  headline: "Test headline",
  author: "Test Author",
  summary: "Test Summary",
  body: "Test Body",
};

const autoAPTest = {
  headline: "",
  author: null,
  summary: "",
  body: "",
};

test("renders component without errors", () => {
  render(<Article article={testArticle} />);
});

test("renders headline, author from the article when passed in through props", () => {
  render(<Article article={testArticle} />);
  const headline = screen.queryByText(/test headline/i);
  const author = screen.queryByText(/test author/i);
  const summary = screen.queryByText(/test summary/i);
  const body = screen.queryByText(/test body/i);
  expect(headline).toBeInTheDocument();
  expect(author).toBeInTheDocument();
  expect(summary).toBeInTheDocument();
  expect(body).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', () => {
  render(<Article article={autoAPTest} />);
  const autoAuthor = screen.queryByText(/associated press/i);
  expect(autoAuthor).toBeInTheDocument();
});

test("executes handleDelete when the delete button is pressed", () => {
  const handleDelete = jest.fn();
  render(<Article article={testArticle} handleDelete={handleDelete} />);
  const button = screen.getByTestId("deleteButton");
  userEvent.click(button);
  expect(handleDelete).toBeCalled();
});

//Task List:
//1. Complete all above tests. Create test article data when needed.

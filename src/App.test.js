/* eslint-disable testing-library/render-result-naming-convention */
import { render, screen } from "@testing-library/react";
import App from "./App";
import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";

// test('renders as expected', () => {
//   const app = render(<App />);
//   expect(app).toMatchSnapshot();

// });

describe("App", () => {
  test("Renders as expected", () => {
    const application = render(
      <Fragment>
        <Router>
          <App />
        </Router>
        ,
      </Fragment>
    );
    expect(application).toMatchSnapshot();
  });
});

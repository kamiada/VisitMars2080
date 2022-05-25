/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import { render } from "@testing-library/react";
import App from "./App";
import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  test("Renders as expected", () => {
    const application = render(
      <Fragment>
        <Router>
          <App />
        </Router>
      </Fragment>
    );
    expect(application).toMatchSnapshot();
  });
  test("Exptect default language to be English", () => {
    const application = render(
      <Fragment>
        <Router>
          <App />
        </Router>
      </Fragment>
    );
    expect(application.getByText("ENG")).toBeTruthy();
  });
  test("When language button is clicked, language changes to Polish", () => {
    const application = render(
      <Fragment>
        <Router>
          <App />
        </Router>
      </Fragment>
    );
    userEvent.click(application.getByText("ENG"));
    expect(application.getByText("PL")).toBeTruthy();
  });
  test("When language button is clicked third time, language changes to French", () => {
    const application = render(
      <Fragment>
        <Router>
          <App />
        </Router>
      </Fragment>
    );
    userEvent.click(application.getByText("ENG"));
    userEvent.click(application.getByText("PL"));
    expect(application.getByText("FR")).toBeTruthy();
  });
});

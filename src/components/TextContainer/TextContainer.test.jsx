/* eslint-disable testing-library/render-result-naming-convention */
import { render } from "@testing-library/react";
import * as React from "react";
import { TextContainer } from "./TextContainer";
import { LanguageContext } from "../Switcher/language-context";

const language = {
  language: "ENG",
  toggleLanguage: jest.fn(),
};

describe("TextContainer", () => {
  test("Matches snapshot - default", () => {
    const renderTextContainer = render(
      <LanguageContext.Provider value={language}>
        <TextContainer id="welcomeText" />
      </LanguageContext.Provider>
    );
    expect(renderTextContainer).toMatchSnapshot();
  });
  test("Matches snapshot - French", () => {
    const language = {
      language: "FR",
      toggleLanguage: jest.fn(),
    };
    const renderTextContainer = render(
      <LanguageContext.Provider value={language}>
        <TextContainer id="welcomeText" />
      </LanguageContext.Provider>
    );
    expect(renderTextContainer).toMatchSnapshot();
  });
  test("Matches snapshot - Polish", () => {
    const language = {
      language: "PL",
      toggleLanguage: jest.fn(),
    };
    const renderTextContainer = render(
      <LanguageContext.Provider value={language}>
        <TextContainer id="welcomeText" />
      </LanguageContext.Provider>
    );
    expect(renderTextContainer).toMatchSnapshot();
  });
});

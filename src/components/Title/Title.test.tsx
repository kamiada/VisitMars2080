/* eslint-disable testing-library/render-result-naming-convention */
import { render } from "@testing-library/react";
import * as React from "react";
import { Title } from './Title';
import { BrowserRouter as Router } from "react-router-dom";

const mockFunction = jest.fn();

describe("Title", () => {
    test("Renders as expected", () => {
        const application = render(
            <Router>
                <Title onClick={mockFunction} path={'/'} title={'MARS'} />
            </Router>
        );
        expect(application).toMatchSnapshot();
    });
});
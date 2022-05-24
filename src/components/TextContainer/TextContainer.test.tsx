/* eslint-disable testing-library/render-result-naming-convention */
import { render } from "@testing-library/react";
import * as React from "react";
import { TextContainer } from './TextContainer';

describe('TextContainer', () => {
    test('Matches snapshot - default', () => {
        const text = "Example of text";
        const renderTextContainer = render(<TextContainer  text={text} />);
        expect(renderTextContainer).toMatchSnapshot();
    })
})
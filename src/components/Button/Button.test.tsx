import * as React from "react";
import { shallow } from 'enzyme';
import { Button } from './Button';

describe("Button functionality", () => {
    it("work on click", () => {
        const mockCallBack = jest.fn();
        const button = shallow((<Button onClick={mockCallBack} path={'/example'} buttonTitle={'Test'} />));
        button.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });
    it("renders as expected", () => {

    })
});
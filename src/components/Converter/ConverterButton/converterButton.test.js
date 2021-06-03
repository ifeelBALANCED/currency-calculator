import React from "react";
import ConverterButton from "./converterButton";
// set up component
const setUp = () => shallow(<ConverterButton/>)
// describe wrapper
describe('should render ConverterButton component', () => {
    let component
    // In the case when you need to do the same work for several tests, you can use the beforeEach functions
    beforeEach(() => {
        component = setUp()
    })
    // test for that check button render correctly
    it('should render button component', () => {
        expect(component).toMatchSnapshot()
    });
    describe('it should render ConvertButton component', () => {
        describe('ConvertButton handlers', () => {
            // test onChange func in component
            it('should call onClick method', () => {
                const mockClick = jest.fn()
                // mount return the wrapper instance around the rendered output
                const component = mount(<ConverterButton convertHandler={mockClick}/>)
                const btn = component.find('button')
                btn.simulate('click')
                expect(mockClick.mock.calls.length).toEqual(1)
            });
        });
    })
});

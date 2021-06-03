import React from "react";
import ConverterInput from "./converterInput";

const setUpInput = (props) => shallow(<ConverterInput {...props}/>)
describe('should render ConverterInput component', () => {
    let component
    // initializing a component setup with setUpInput function
    beforeEach(() => {
        component = setUpInput()
    })
    describe('should test ConverterInput inner elements', () => {
        // expects that it would be 1 input in ConverterInput component
        it('should contain input', () => {
            const wrapper = component.find('input')
            expect(wrapper).toMatchSnapshot()
        });
        // expects render ConverterInput component with props
        it('should render ConverterInput component with props', () => {
            component = shallow(<ConverterInput amount={9} changeHandler={() => {
            }}/>)
            expect(component).toMatchSnapshot()
        });
        // expects render ConverterInput component without props
        it('should render ConverterInput component without props', () => {
            component = shallow(<ConverterInput/>)
            expect(component).toMatchSnapshot()
        });
    });
    // check ConverterInput handlers (onChange)
    describe('should test ConverterInput handlers', () => {
        it('should call onChange prop with input value', () => {
            const onChangeMock = jest.fn();
            component = mount(<ConverterInput onChange={onChangeMock} value="1"/>);
            const input = component.find('input');
            input.simulate('change');
            expect(onChangeMock.mock.calls.length).toEqual(0)
        });
    });
})

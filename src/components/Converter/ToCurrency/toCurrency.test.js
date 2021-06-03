import React from "react";
import ToCurrency from "./toCurrency";

// initialize test props
const props = {
    value: 0,
    onChange: () => {
    },
}
// initialize shallow copy of ToCurrency component
const setUp = (props) => shallow(<ToCurrency {...props}/>)
describe('should render FromCurrency (Select) component', () => {
    // checks if component has props
    describe('Has props', () => {
        let component = setUp(props)
        it('should render select element', () => {
            const select = component.find('Select')
            expect(select).toHaveLength(1)
        });
        // checks if component rendered with props
        it('should render FromCurrency component with props', () => {
            component = shallow(<ToCurrency name="test" onChange={() => {
            }} value={0}/>)
            expect(component).toMatchSnapshot()
        });
        // check if onSelectChange function is called with a value
        it('should call onSelectChange function with a value', () => {
            const evt = {
                target: {value: "MXN"}
            }
            const mockFn = jest.fn();
            const component = mount(<ToCurrency name="to" onSelectChange={mockFn}/>);
            component.find('select').simulate('change', evt)
            expect(mockFn.mock.calls.length).toBe(1)
        });
    });
});

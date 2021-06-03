import React from "react";
import FromCurrency from "./fromCurrency";

// initialize test props
const props = {
    value: 0,
    onChange: () => {
    },
}
// initialize shallow copy of FromCurrency component
const setUp = (props) => shallow(<FromCurrency {...props}/>)
describe('should render FromCurrency (Select) component', () => {
    // checks if component has props
    describe('Has props', () => {
        let component = setUp(props)
        // checks render of component
        it('should render select element', () => {
            const select = component.find('Select')
            expect(select).toHaveLength(1)
        });

        it('should render FromCurrency component with props', () => {
            component = shallow(<FromCurrency name="name" onChange={() => {
            }} value={0}/>)
            expect(component).toMatchSnapshot()
        });
        // check if onSelectChange function is called with a value
        it('should call onSelectChange function with a value', () => {
            const evt = {
                target: {value: 'USD'}
            }
            const mockFn = jest.fn();
            const component = mount(<FromCurrency name="from" onSelectChange={mockFn}/>);
            component.find('select').simulate('change', evt)
            expect(mockFn.mock.calls.length).toBe(1)
        });
    });
});

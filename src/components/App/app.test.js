import React from "react";
import Converter from '../Converter/converter'
import App from './app'

const setUp = (props) => shallow(<App {...props}/>)

describe('should render App component', () => {
    let component
    beforeEach(() => {
        component = setUp()
    })
    describe('should have wrapper and Converter component', () => {
        it('should have Converter component without props', () => {
            component = shallow(<Converter/>)
            expect(component).toMatchSnapshot()
        });
    });
    describe('Have no props', () => {
        it('should render App component without props', () => {
            component = shallow(<App/>)
            expect(component).toMatchSnapshot()
        });
    });
});

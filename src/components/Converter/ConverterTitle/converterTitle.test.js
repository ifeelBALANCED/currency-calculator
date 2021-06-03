import React from "react";
import ConverterTitle from "./converterTitle";

const setUpTitle = (props) => shallow(<ConverterTitle {...props}/>)

describe('should render ConverterTitle component', () => {
    let title
    beforeEach(() => {
        title = setUpTitle()
    })
    // expects that title is wrapped by h2 tag
    it('should contain Heading', () => {
        const wrapper = title.find('Heading')
        expect(wrapper).toHaveLength(1)
    });
    // expects render ConverterTitle component with props
    it('should render ConverterTitle component with props', () => {
        title = shallow(<ConverterTitle title="Some title"/>)
        expect(title).toMatchSnapshot()
    });
    // expects render ConverterTitle component without props
    it('should render ConverterTitle component without props', () => {
        title = shallow(<ConverterTitle/>)
        expect(title).toMatchSnapshot()
    });
})

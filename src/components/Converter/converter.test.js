import React from "react";
import Converter from "./converter";
import {fetchData} from './api.js'
import axios from "axios";

jest.mock("axios");
const setUp = () => shallow(<Converter/>)
const componentDidMountSpy = jest.spyOn(Converter.prototype, 'componentDidMount')
describe('Converter component', () => {
    let component, instance
    beforeEach(() => {
        component = setUp()
        instance = component.instance()
    })
    it('should render Converter component ', () => {
        expect(component).toMatchSnapshot()
    });
    describe('Converter handlers', () => {
        it('should handle change select value ', () => {
            instance.selectHandler({target: {name: 'Test1', value: 'USD'}})
            expect(component.state().fromCurrency).toBe('USD')
        });
        it('should call the convertHandler method', () => {
            expect(component.state().amount).toBe(1)
        });
        it('should check selectHandler method for FromCurrency component', () => {
            instance.selectHandler({target: {name: 'test1', value: 'USD'}})
            expect(component.state().fromCurrency).toBe('USD')
        });
        it('should check selectHandler method for ToCurrency component', () => {
            instance.selectHandler({target: {name: 'test2', value: 'MXN'}})
            expect(component.state().toCurrency).toBe('MXN')
        });
    });
    describe('Lifecycle methods', () => {
        it('should call componentDidMount once', () => {
            expect(componentDidMountSpy).toHaveBeenCalledTimes(6)
        });
    });
    describe('component axios.get data', () => {
        it('gets successfully data from an API', async () => {
            const API_KEY = '2a59af432712c2f09cd75c8861ba9e26'
            const data = {
                rates: {"AED": 4.48527, "AFN": 96.243126, "ALL": 123.019702, "AMD": 635.710394, "ANG": 2.192325,}
            };
            axios.get.mockImplementationOnce(() => Promise.resolve(data));
            await expect(fetchData('react')).resolves.toEqual(data);
            expect(axios.get).toHaveBeenCalledWith(
                `http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}`,
            );
        })
        it('fetches erroneously data from an API', async () => {
            const errorMessage = 'Network Error';
            axios.get.mockImplementationOnce(() =>
                Promise.reject(new Error(errorMessage)),
            );
            await expect(fetchData('react')).rejects.toThrow(errorMessage);
        });
    });
});

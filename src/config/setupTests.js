// importing dependencies from packages
import {configure, shallow, render, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import 'regenerator-runtime/runtime'

// React 16 Enzyme adapter
// configure new adapter for tests
configure({adapter: new Adapter()});

// set up global parameters, so we don't need to import them on each file
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.toJson = toJson;

// Fail tests on any warning
console.error = message => {
    throw new Error(message);
};

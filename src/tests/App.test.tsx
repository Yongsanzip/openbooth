
import React from "react";
import Adapter from 'enzyme-adapter-react-16';
//REDUX
import { Provider } from 'react-redux';
import configureStore from '../store';

import { shallow, configure } from 'enzyme';
import App from "../App";

configure({ adapter: new Adapter() });

const store = configureStore();

describe('Main', () => {
  it('App rendered', () => {
    const wrapper = shallow(<Provider store={store}><App /></Provider>);
    expect(wrapper.length).toBe(1);
  });
});




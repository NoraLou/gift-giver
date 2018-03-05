import React from 'react';
//create mock component.. only render outer component
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

it ('renders correctly', () => {
  expect(app).toMatchSnapshot();
});



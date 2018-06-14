/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

jest.mock('../containers/PrivateRoute', () => () => 'PrivateRoute');
jest.mock('../containers/LoginPageContainer', () => () => 'LoginPage');
jest.mock('../containers/ChatPageContainer', () => () => 'ChatPage');

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

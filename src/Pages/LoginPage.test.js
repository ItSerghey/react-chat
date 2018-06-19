/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import renderer from 'react-test-renderer';
import LoginPage from './LoginPage';

jest.mock('../components/forms/LoginForm', () => () => 'LoginForm');
jest.mock('../components/forms/SignupForm', () => () => 'SignupForm');
jest.mock('../components/ErrorMessage', () => () => 'ErrorMessage');

const mockProps = {
  signup: jest.fn(),
  login: jest.fn(),
  recieveAuth: jest.fn(),
  isAuthenticated: false,
  error: null,
};

describe('<LoginPage />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter initialEntries={['/']}>
        <Route path="/(welcome)?" render={props => <LoginPage {...mockProps} {...props} />} />
      </MemoryRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer // eslint-disable-next-line
      .create(
        <MemoryRouter initialEntries={['/']}>
          <Route path="/(welcome)?" render={props => <LoginPage {...mockProps} {...props} />} />
        </MemoryRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

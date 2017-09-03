import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders the form', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

  expect(div.getElementsByTagName("input").length).toEqual(3);
});

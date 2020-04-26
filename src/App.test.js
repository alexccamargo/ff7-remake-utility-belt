import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByTag } = render(<App />);
  const headerElement = getByTag("header");
  expect(headerElement).toBeInTheDocument();
});

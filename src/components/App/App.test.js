import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


test('renders component', () => {
  const component = render(<App/>);
  const navbar = component.container.querySelector('.navbar')

  expect(navbar).toBeDefined()
  expect(navbar).toHaveTextContent('mixer logic')
});

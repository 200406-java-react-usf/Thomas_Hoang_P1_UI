import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

/*
  Enzyme is being used to render a componenet in a testable state
  This can be accomplished in a few ways:
  shallow - which shallowly renders a component for testing. A shallow render
    does not include any child components.
  mount - Mount more deeply renders a component for testing, rendering
    child components defined in the component structure. We will use this
    primarily, due to the heavy usage of higher componenets in this app.
*/

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

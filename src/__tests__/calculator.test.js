import React from 'react';
import { render } from '@testing-library/react';
import Calculator from '../components/calculator';

it('render correctly', () => {
  const { container } = render(<Calculator />);
  expect(container).toMatchSnapshot();
});

import '../../pages/ProductDetail/node_modules/@testing-library/jest-dom';
import * as React from 'react';
import { render } from '@testing-library/react';
import Loading from './Loading';

describe('Testing the loading screen', () => {
  test('It should render when shouldShow is true', () => {
    const { container } = render(<Loading shouldShow={true} />);

    expect(container.firstChild).toHaveClass('show-loading');
  });

  test('It should not display when shouldShow is false', () => {
    const { container } = render(<Loading shouldShow={false} />);

    expect(container.firstChild).toHaveClass('hide-loading');
  });
});

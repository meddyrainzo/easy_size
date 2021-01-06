import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductDetail from './ProductDetail';

describe('Test the product detail page', () => {
  test('it displays properly', () => {
    render(
      <ProductDetail
        imageSrc='src'
        productName='product'
        productPrice='$100'
        attributeType='colors'
        productAttributes={['red', 'green', 'blue']}
      />
    );

    expect(screen.getByText(/product/)).toBeInTheDocument();
    expect(screen.getByText(/\$100/)).toBeInTheDocument();
    expect(screen.getByText(/COLORS/)).toBeInTheDocument();
  });

  test('The loading page should show when you click the surprise me button', () => {
    render(
      <ProductDetail
        imageSrc='src'
        productName='product'
        productPrice='$100'
        attributeType='colors'
        productAttributes={['red', 'green', 'blue']}
      />
    );

    userEvent.click(screen.getByText('Surprise me!'));

    expect(screen.getByText('Randomising your choice')).toBeInTheDocument();
  });
});

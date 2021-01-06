import React, { FC } from 'react';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import './App.scss';

const App: FC = () => {
  return (
    <div className='App'>
      <ProductDetail
        productName='Beats by Dre headphones'
        productPrice='$400'
        imageSrc='https://i.ytimg.com/vi/xFe_ZYtfsZg/maxresdefault.jpg'
        productDescription='Some very long product description lorem ipsum whatever whatever'
        productAttributes={['xl', 'xxl', 'xxxl']}
        attributeType='size'
      />
    </div>
  );
};

export default App;

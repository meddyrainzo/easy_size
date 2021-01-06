import React, { FC } from 'react';
import { Router, Route } from 'react-router-dom';

import ProductDetail from './pages/ProductDetail/ProductDetail';
import { history } from './history';
import './App.scss';
import Success from './pages/Success/Success';

const App: FC = () => {
  return (
    <Router history={history}>
      <div className='App'>
        <Route
          path='/'
          exact
          render={() => (
            <ProductDetail
              productName='Beats by Dre headphones'
              productPrice='$400'
              imageSrc='https://i.ytimg.com/vi/xFe_ZYtfsZg/maxresdefault.jpg'
              productDescription='Some very long product description lorem ipsum whatever whatever'
              productAttributes={['xl', 'xxl', 'xxxl']}
              attributeType='size'
            />
          )}
        />
        <Route path='/success' component={Success} />
      </div>
    </Router>
  );
};

export default App;

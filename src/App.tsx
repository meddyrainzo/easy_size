import React, { FC } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import ProductDetail from './pages/ProductDetail/ProductDetail';
import { history } from './history';
import './App.scss';
import Success from './pages/Success/Success';
import { WidgetProps } from './lib/config/WidgetProps';
import { SelectAttributeContext } from './SelectAttributeContext';

type AppProps = WidgetProps & {
  selectAttribute: (_: string) => void;
};

const App: FC<AppProps> = ({
  attributes,
  image,
  attributeType,
  selectAttribute,
}) => {
  return (
    <SelectAttributeContext.Provider value={selectAttribute}>
      <Router history={history}>
        <div className='App'>
          <Switch>
            <Route path='/success' exact component={Success} />
            <Route
              path='/'
              render={() => (
                <ProductDetail
                  imageSrc={image}
                  productAttributes={attributes}
                  attributeType={attributeType}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    </SelectAttributeContext.Provider>
  );
};

export default App;

import React, { FC, useReducer } from 'react';

import ProductDetail from './pages/ProductDetail/ProductDetail';
import './App.scss';
import Success from './pages/Success/Success';
import { WidgetProps } from '../lib/config/WidgetProps';
import { SelectAttributeContext } from './SelectAttributeContext';
import { statusReducer, initialStatusState } from './reducer/statusReducer';
import { Status } from './status/status';

type AppProps = WidgetProps & {
  selectAttributeFn: (_: string) => void;
};

const App: FC<AppProps> = ({
  attributes,
  image,
  attributeType,
  selectAttributeFn,
}) => {
  const [state, dispatch] = useReducer(statusReducer, initialStatusState);
  const { status } = state;
  return (
    <SelectAttributeContext.Provider value={{ state, dispatch }}>
      {/* <Router history={history}>
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
      </Router> */}
      <div className='App'>
        {status === Status.IDLE && (
          <ProductDetail
            imageSrc={image}
            productAttributes={attributes}
            attributeType={attributeType}
          />
        )}
        {status === Status.IN_PROGRESS && (
          <Success selectAttribute={selectAttributeFn} />
        )}
      </div>
    </SelectAttributeContext.Provider>
  );
};

export default App;

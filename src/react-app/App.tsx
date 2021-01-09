import React, { FC, useReducer } from 'react';

import ProductDetail from './pages/ProductDetail/ProductDetail';
import './App.scss';
import Success from './pages/Success/Success';
import { AppProps } from '../lib/AppProps';
import { SelectAttributeContext } from './SelectAttributeContext';
import { statusReducer } from './reducer/statusReducer';
import { Status } from './status/status';
import { initialStatusState } from './state/statusState';

const App: FC<AppProps> = ({
  attributes,
  image,
  attributeType,
  selectAttribute,
}) => {
  const [state, dispatch] = useReducer(statusReducer, initialStatusState);
  const { status } = state;
  return (
    <SelectAttributeContext.Provider value={{ state, dispatch }}>
      <div className='App'>
        {status === Status.IDLE && (
          <ProductDetail
            imageSrc={image}
            productAttributes={attributes}
            attributeType={attributeType}
          />
        )}
        {status === Status.IN_PROGRESS && (
          <Success selectAttribute={selectAttribute} />
        )}
      </div>
    </SelectAttributeContext.Provider>
  );
};

export default App;

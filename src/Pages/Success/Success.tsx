import { Button, Result } from 'antd';
import React, { FC, useContext, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { SuccessProps } from './SuccessProps';

import './Success.scss';
import { history } from '../../history';
import { SelectAttributeContext } from '../../SelectAttributeContext';

const Success: FC<RouteComponentProps<{}, any, SuccessProps>> = (
  props: RouteComponentProps<{}, any, SuccessProps>
) => {
  const selectAttribute = useContext(SelectAttributeContext);
  const selectedAttribute = props.location.state
    ? props.location.state.attribute
    : '';
  const successMessage = `Your surprise pick was \"${selectedAttribute}\"`;
  const subtitle = 'Click the button below to select this and finalize';

  useEffect(() => {
    return () => {
      console.log('Unmounting');
      history.goBack();
    };
  }, []);

  return (
    <div className='success-page'>
      <Result
        status='success'
        title={successMessage}
        subTitle={subtitle}
        extra={[
          <Button
            key='success'
            type='default'
            onClick={() => selectAttribute(selectedAttribute)}
          >
            {'Select me'}
          </Button>,
        ]}
      />
    </div>
  );
};

export default Success;

import { Button, Result } from 'antd';
import React, { FC, useContext } from 'react';
import { Redirect, RouteComponentProps } from 'react-router';
import { SuccessProps } from './SuccessProps';

import './Success.scss';
import { SelectAttributeContext } from '../../SelectAttributeContext';

const Success: FC<RouteComponentProps<{}, any, SuccessProps>> = (
  props: RouteComponentProps<{}, any, SuccessProps>
) => {
  const selectAttribute = useContext(SelectAttributeContext);
  const selectedAttribute = props.location.state
    ? props.location.state.attribute
    : '';
  const successMessage = `Your surprise pick was \"${selectedAttribute.toUpperCase()}!\"`;
  const subtitle = 'Click the button below to select this and finalize';

  const successClicked = () => {
    selectAttribute(selectedAttribute);
    <Redirect to='/' />;
  };

  return (
    <div className='success-page'>
      <Result
        status='success'
        title={successMessage}
        subTitle={subtitle}
        extra={[
          <Button key='success' type='primary' onClick={successClicked}>
            Select me
          </Button>,
        ]}
      />
    </div>
  );
};

export default Success;

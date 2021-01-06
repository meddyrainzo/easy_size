import { Button, Result } from 'antd';
import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';
import { SuccessProps } from './SuccessProps';

import './Success.scss';

const Success: FC<RouteComponentProps<{}, any, SuccessProps>> = (
  props: RouteComponentProps<{}, any, SuccessProps>
) => {
  const selectedAttribute = props.location.state
    ? props.location.state.attribute
    : '';
  const successMessage = `And your surprise pick is...${selectedAttribute.toUpperCase()}!`;
  const subtitle = 'Click the button below to select this and finalize';
  return (
    <div className='success-page'>
      <Result
        status='success'
        title={successMessage}
        subTitle={subtitle}
        extra={[
          <Button key='success' type='primary'>
            Select me
          </Button>,
        ]}
      />
    </div>
  );
};

export default Success;

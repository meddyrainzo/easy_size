import { Button, Result } from 'antd';
import React, { FC, useContext } from 'react';
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

  const successClicked = () => {
    history.goBack();
    selectAttribute(selectedAttribute);
  };

  return (
    <div className='success-page'>
      <Result
        status='success'
        title={successMessage}
        subTitle={subtitle}
        extra={[
          <Button key='success' type='default' onClick={successClicked}>
            {'Select me'}
          </Button>,
        ]}
      />
    </div>
  );
};

export default Success;

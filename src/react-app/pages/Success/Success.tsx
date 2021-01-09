import { Button, Result } from 'antd';
import React, { FC, useContext } from 'react';
import { SuccessProps } from './SuccessProps';

import './Success.scss';
import { SelectAttributeContext } from '../../SelectAttributeContext';
import { finishAction } from '../../action/statusActionCreators';

const Success: FC<SuccessProps> = (props: SuccessProps) => {
  const { state, dispatch } = useContext(SelectAttributeContext);
  const { selectedAttribute } = state;
  const successMessage = `Your surprise pick was \"${selectedAttribute}\"`;
  const subtitle = 'Click the button below to select this and finalize';

  const selectAttribute = () => {
    dispatch(finishAction(() => props.selectAttribute(selectedAttribute!)));
  };

  return (
    <div className='success-page'>
      <Result
        status='success'
        title={successMessage}
        subTitle={subtitle}
        extra={[
          <Button key='success' type='default' onClick={selectAttribute}>
            {'Select me'}
          </Button>,
        ]}
      />
    </div>
  );
};

export default Success;

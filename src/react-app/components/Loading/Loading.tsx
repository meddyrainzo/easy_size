import { Row, Spin } from 'antd';
import React, { FC } from 'react';

import './Loading.scss';
import { LoadingProps } from './LoadingProps';

const Loading: FC<LoadingProps> = (props: LoadingProps) => {
  const { shouldShow } = props;
  let className = shouldShow ? 'show-loading' : 'hide-loading';

  return (
    <div className={className}>
      <Row>
        <Spin size='large' />
      </Row>
      <Row>
        <h2>Randomising your choice</h2>
      </Row>
    </div>
  );
};

export default Loading;

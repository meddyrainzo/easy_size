import { Button, PageHeader, Row, Tag } from 'antd';
import React, { FC, useContext, useState } from 'react';

import { history } from '../../history';
import Loading from '../../components/Loading/Loading';
import './ProductDetail.scss';
import { ProductDetailProps } from './ProductDetailProps';
import { getRandomAttribute } from '../../utils/getRandomAttribute';
import { SelectAttributeContext } from '../../SelectAttributeContext';
import { randomizeAction } from '../../action/statusAction';

const ProductDetail: FC<ProductDetailProps> = (props: ProductDetailProps) => {
  const [showLoading, setShowLoading] = useState(false);
  const { imageSrc, productAttributes, attributeType } = props;
  const { dispatch } = useContext(SelectAttributeContext);

  const createAttributeList = () => {
    if (attributeType === 'color' || 'colors') {
      return productAttributes.map((attribute, index) => (
        <Tag key={`id-${index}`} color={attribute}>
          {attribute.toUpperCase()}
        </Tag>
      ));
    } else {
      return productAttributes.map((attribute, index) => (
        <Tag key={`id-${index}`}>{attribute.toUpperCase()}</Tag>
      ));
    }
  };

  const handleSurpriseMe = () => {
    setShowLoading(true);
    setTimeout(() => {
      setShowLoading(false);
      dispatch(randomizeAction(productAttributes));
    }, 3000);
  };

  return (
    <>
      <Loading shouldShow={showLoading} />
      <div className='product-detail'>
        <div className='product-detail-left'>
          <div className='container'>
            <img src={imageSrc} alt='Product' />
          </div>
        </div>
        <div className='product-detail-right'>
          <div className='product-detail-right-content'>
            <Row>
              <h5>
                {'Sit back and relax while we make the right choice for you'.toLocaleUpperCase()}
              </h5>
            </Row>
            <Row>{createAttributeList()}</Row>
            <Row style={{ marginTop: '2vh' }}>
              <Button type='default' onClick={handleSurpriseMe}>
                {'Surprise me!'}
              </Button>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

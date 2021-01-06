import { Button, PageHeader, Row, Tag } from 'antd';
import React, { FC, useState } from 'react';

import { history } from '../../history';
import Loading from '../../components/Loading/Loading';
import './ProductDetail.scss';
import { ProductDetailProps } from './ProductDetailProps';
import { getRandomAttribute } from '../../utils/getRandomAttribute';

const ProductDetail: FC<ProductDetailProps> = (props: ProductDetailProps) => {
  const [showLoading, setShowLoading] = useState(false);
  const { imageSrc, productAttributes, attributeType } = props;

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
      const attribute = getRandomAttribute(productAttributes);
      setShowLoading(false);
      history.push({ pathname: '/success', state: { attribute } });
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
              <h4>{`Randomize the ${attributeType}`.toUpperCase()}</h4>
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

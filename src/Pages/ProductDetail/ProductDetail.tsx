import { Button, PageHeader, Row, Tag } from 'antd';
import React, { FC, useState } from 'react';

import { history } from '../../history';
import Loading from '../../components/Loading/Loading';
import './ProductDetail.scss';
import { ProductDetailProps } from './ProductDetailProps';

const ProductDetail: FC<ProductDetailProps> = (props: ProductDetailProps) => {
  const [showLoading, setShowLoading] = useState(false);
  const {
    imageSrc,
    productName,
    productPrice,
    productDescription,
    productAttributes,
    attributeType,
  } = props;

  const createAttributeList = () =>
    productAttributes.map((attribute, index) => (
      <Tag key={`id-${index}`}>{attribute.toUpperCase()}</Tag>
    ));

  const getRandomAttribute = (): string => {
    const random = Math.random();
    const index = Math.floor(random * productAttributes.length);
    return productAttributes[index];
  };

  const handleSurpriseMe = () => {
    setShowLoading(true);
    setTimeout(() => {
      const attribute = getRandomAttribute();
      setShowLoading(false);
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
          <PageHeader
            className='site-page-header'
            title={productName}
            extra={[
              <Tag key='1' color='green'>
                {productPrice}
              </Tag>,
            ]}
          />
          <div className='product-detail-right-content'>
            <Row>{productDescription && <p>{productDescription}</p>}</Row>
            <br />
            <Row>
              <h4>{attributeType.toUpperCase()}</h4>
            </Row>
            <Row>{createAttributeList()}</Row>
            <Row>
              <Button
                className='product-detail-surprise-me'
                type='primary'
                onClick={handleSurpriseMe}
              >
                Surprise me!
              </Button>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

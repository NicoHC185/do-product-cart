import * as React from 'react';
import ProductCard, { ProductButtons, ProductImage, ProductTitle } from './components';

const product = {
  id: '1',
  title: 'Coffe mug - sin imagen',
}

export const Example = () => {
  return (<ProductCard
    product={product}
    initialValues={{
      count: 0,
    }}
  >
    {() => (
      <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
      </>
    )}
  </ProductCard>)
};

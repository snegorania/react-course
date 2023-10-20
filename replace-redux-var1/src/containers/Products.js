import React from 'react';

import ProductItem from '../components/Products/ProductItem';
import './Products.css';
import { useContext } from 'react';
import { ProductsContext } from '../context/product-context';

const Products = props => {
  const ctx = useContext(ProductsContext);
  const productList = ctx.products;
  return (
    <ul className="products-list">
      {productList.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;

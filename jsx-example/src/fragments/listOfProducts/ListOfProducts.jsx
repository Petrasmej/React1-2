import React from 'react';
import ShoppingItem from '../../components/shoppingItem/ShoppingItem';

const ListOfProducts = (props) => {
  const { products, header } = props;

  const mappedHeader = <h1>{header}</h1>;
  const mappedProducts = products.map((o) => (
    <ShoppingItem key={o.id} name={o.name} price={o.price} amount={o.amount} />
  ));

  return (
    <>
      {mappedHeader}
      {mappedProducts}
    </>
  );
};

export default ListOfProducts;

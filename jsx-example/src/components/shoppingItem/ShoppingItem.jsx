import React from 'react';

const ShoppingItem = (props) => {
  const { name, price, amount } = props;
  return (
    <div className="item">
      <span className="item__name">"{name}</span>
      <span className="item__price">{price}</span>
      <span className="item__amount">{amount}</span>
    </div>
  );
};

export default ShoppingItem;

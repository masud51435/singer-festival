import React from 'react';
import Name from '../name/Name';
import './Cart.css';

const Cart = (props) => {
  console.log(props.cart)
  const { cart } = props;
  let total = 0;
  for (const singer of cart) {
    total = total + singer.salary;
  }


  return (
    <div className='cart'>
      <h2>Singer Cart</h2>
      <h3>singer added: {props.cart.length}</h3>
      <h3>total salary: $ {total}</h3>
      {
        cart.map(singleCart => <Name
          key={singleCart.num}
          singleCart={singleCart}
        ></Name>)
      }
    </div>
  );
};

export default Cart;
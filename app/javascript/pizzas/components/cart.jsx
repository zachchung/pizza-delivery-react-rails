import React from 'react';

const Cart = ({cart}) => {


  return (
     <div>
       <div>{console.log(cart)}</div>
       <div>{cart.name} x{cart.count}</div>
     </div>
  );
}

export default Cart;

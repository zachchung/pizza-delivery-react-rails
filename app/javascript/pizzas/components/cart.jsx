import React from 'react';

const Cart = ({cart}) => {
  return (
     <div>
       {cart.name} x{cart.count}
     </div>
  );
}

export default Cart;

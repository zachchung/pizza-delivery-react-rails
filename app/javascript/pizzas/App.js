import React, { useState } from 'react';
import './styles/App.css';
import data from './server/pizzas.json';
import Pizza from './components/pizza';
import Cart from './components/cart';

const App = () => {
  const [pizzas, setPizzas] = useState(data);
  const [carts, setCarts] = useState([]);
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const addToCarts = (pizza, count) => {
    let alreadyInCarts = false;

    carts.forEach((item) => {
      if (item.name === pizza.name) {
        item.count = count;
        alreadyInCarts = true;
      }
    })
    if (!alreadyInCarts) {
      carts.push({name: pizza.name, price: pizza.price, count: count});
    }
    setCarts(carts);
    forceUpdate();
  };

  const deliveryTime = () => {
    let d = new Date();
    let h = d.getHours();
    if (h < 10)  h = '0'+h;
    let m = d.getMinutes();
    if (m < 10)  m = '0'+m;
    let s = d.getSeconds();
    if (s < 10)  s = '0'+s;
    return `${h + 1}${m}${s}`;
  }

  const postItem = () => {
    fetch('/api/v1/orders', {
      method: 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ "success": true, "deliverytime": deliveryTime() })
    })
    alert("Thank you! Your order will be delivered in 60 minutes!");
    window.location.href = '/api/v1/orders';
  }

  let totalCost = 0;

  return (
    <div className="app">
      <div className="pizza-list">
        <h1>Welcome to Pizza Delivery App</h1>
        {pizzas.map((pizza) => {
          return <Pizza key={pizza.name} pizza={pizza} addToCartsFn={addToCarts} />
        })}
      </div>
      <div className="order-summary">
        <h1>Order Summary</h1>
        {carts.map((item) => {
          totalCost += (item.count * item.price);
          return <Cart key={item.name} cart={item} />
        })}
        <hr/>
        <div><strong>Total: ${totalCost}</strong></div>
        <button onClick={postItem} className="btn btn-primary"> Confirm Order </button>
      </div>
    </div>
  );
}

export default App;

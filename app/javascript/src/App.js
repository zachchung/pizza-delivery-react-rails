import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import data from './server/pizzas.json';
import orderData from './server/order.json';
import Pizza from './components/pizza';
import Cart from './components/cart';

const App = () => {
  const [pizzas, setPizzas] = useState(data);
  const [carts, setCarts] = useState([]);
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  // useEffect(() => {
  //   setPizzas(data);
  //   // console.log(data);
  // }, [carts]);

  const addToCarts = (pizza, count) => {
    let alreadyInCarts = false;

    carts.forEach((item) => {
      if (item.name === pizza.name) {
        item.count = count;
        alreadyInCarts = true;
      }
    })
    if(!alreadyInCarts) {
      carts.push({name: pizza.name, price: pizza.price, count: count});
    }
    setCarts(carts);
    console.log({carts});
    forceUpdate();
    // updatedCarts[pizza] = count;
    // if (count > 0){
    //   setCarts(updatedCarts);
    //   // setCarts(carts[pizza] = count);
    // }
  };

  let totalCost = 0;

  const handleOrder = () => {
    // console.log(orderData);
    // const fs = require('fs');
    // fs.appendFile('./server/order.json', '\nRight there up on Broadway', (err) => {
    //     if (err) throw err;
    //     console.log('The lyrics were updated!');
    // });
  };

  const deliveryTime = () => {
    let d = new Date();
    let h = d.getHours();
    return `${h + 1}0000`;
    // let m = d.getMinutes();
    // let s = d.getSeconds();
    // return `${h + 1}${m}${s}`;
  }
  // Make a POST request to PostBin
  const postItem = () => {
    fetch('/api/v1/orders', {
      method: 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ "success": true, "deliverytime": deliveryTime() })
      // body: JSON.stringify({ success: true, deliveryTime: deliveryTime() })
    })
  }

  return (
    <div>
      <div>
        {pizzas.map((pizza) => {
          return <Pizza key={pizza.name} pizza={pizza} addToCartsFn={addToCarts}/>
        })}
      </div>
      <div>
        <div>Order Summary</div>
        {carts.map((item) => {
          totalCost += (item.count * item.price);
          return <Cart key={item.name} cart={item} />
        })}
        <div>Total cost: ${totalCost}</div>
        {/* <Cart cart={cart} /> */}
      </div>
      <div>
        <button onClick={postItem}> Order </button>
      </div>
    </div>
  );
}

export default App;

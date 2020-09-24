import React, { useState } from 'react';

const Pizza = ({pizza, addToCartsFn}) => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
      addToCartsFn(pizza, count - 1);
    }
  }

  const increment = () => {
    setCount(count + 1);
    addToCartsFn(pizza, count + 1);
  }

  return (
     <div>
       <h4>{pizza.name} (${pizza.price})</h4>
       <div>
         <strong>Ingredients:</strong> {pizza.ingredients.map((ingredient) => ingredient+". ")}
       </div>

       <button onClick={decrement} className="btn btn-outline-dark"> - </button>
        Quantity: {count}
       <button onClick={increment} className="btn btn-outline-dark"> + </button>
       {/* <button onClick={() => setCount(count + 1)}> + </button> */}
       <hr/>
     </div>
  );
}

export default Pizza;

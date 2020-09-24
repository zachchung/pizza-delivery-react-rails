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
       <div>{pizza.name}</div>
       <div>${pizza.price}</div>
       <div>
         Ingredients: {pizza.ingredients.map((ingredient) => ingredient+". ")}
       </div>

       <button onClick={decrement}> - </button>
       #{count}
       <button onClick={increment}> + </button>
       {/* <button onClick={() => setCount(count + 1)}> + </button> */}
       <hr/>
     </div>
  );
}

export default Pizza;

  // Generatecakes.js
  import React, { useContext,useEffect } from 'react';
  import { Link } from 'react-router-dom';
  import { OrderContext } from './orderContext';

  const Generatecakes = ({ loopCake, selectedFlavor }) => {
    const { orderArray, setOrderArray } = useContext(OrderContext);

    const filteredCakes = selectedFlavor === 'all'
      ? loopCake
      : loopCake.filter(cake => cake.flavor === selectedFlavor);

    const handleBuy = (buy) => {
      const cakeID = buy.target.getAttribute('data-cakeid');
      const searchID = orderArray.find((orderID)=>orderID.cakeID === cakeID );
      if (!searchID){
          setOrderArray((currentOrderArray)=>[...currentOrderArray,{cakeID,quantity:1}])
      }
      else{
        setOrderArray((currentOrderArray)=>
          currentOrderArray.map(order=>(
           order.cakeID===cakeID ? 
            {...order, quantity: order.quantity +1}
            :order
          ))
          ) 
      }
    };
    useEffect(()=>{
      console.log(orderArray)
    },[orderArray])
    return (
      <main>
        {filteredCakes.map((renderCakes) => (
          <div className="cake" key={renderCakes.id}>
            <Link to={`cakes/${renderCakes.id}`}>
              <img
                src={renderCakes.image}
                alt={`Image of ${renderCakes.flavor} cake`}
                className="cake-images"
              />
            </Link>
            <div className="details">
              <div>{renderCakes.flavor}</div>
              <button
                className="buy-button"
                data-cakeid={renderCakes.id}
                onClick={handleBuy}
              >
                BUY
              </button>
            </div>
          </div>
        ))}
      </main>
    );
  };

  export default Generatecakes;

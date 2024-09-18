import React, { useContext } from "react";
import { OrderContext } from "./orderContext";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import Paydetails from "./payment";

const CakeOrders = () => {
  const { orderArray } = useContext(OrderContext);
  const { cakes } = useFetch("http://localhost:7000/cakes");

  if (!cakes) {
    return <div>Loading cakes...</div>;
  }

  return (
    <div className="my-orders">
      {orderArray.length === 0 ? (
        <p>No orders. <Link to ='/'>Buy now</Link></p>
      ) : (
       <>
        {orderArray.map((cakeId) => {
          const orderedCake = cakes.find((cake) => cake.id === cakeId);
          return (
            orderedCake && (
              <div className="order-summary">
                    <div key={orderedCake.id} className="cake-preview">
                        <img src={orderedCake.image} alt={orderedCake.name} />
                        <p>{orderedCake.name}</p>
                        <p>{orderedCake.flavor}</p>
                        <p>Price: {orderedCake.price}</p>
                        <p>Reviews: {orderedCake.reviews}</p>
                    </div>

                    <div className="payDetails">
                        <div className="discription">
                          <h1>PREVIEW</h1>
                          <p>{orderedCake.name}</p>
                          <p>Quantity: 1</p>
                          <p>Price:  {orderedCake.price}</p>
                        </div>
                        <div className="total">
                          <h1>total</h1>
                          <p>{orderedCake.price * 1}</p>
                        </div> 
                    </div>
              </div>
            )
          );
        })}
       </>
            
      )}
    </div>
  );
};

export default CakeOrders;

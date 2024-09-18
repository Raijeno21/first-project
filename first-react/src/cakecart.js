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
      <div className="order-summary">
              {orderArray.length === 0 ? (
                <p>No orders. <Link to ='/'>Buy now</Link></p>
              ) : (
                
              orderArray.map((cakeId) => {
              const orderedCake = cakes.find((cake) => cake.id === cakeId);
              return (
                orderedCake && (
                  <div key={orderedCake.id} className="cake-item">
                    <img src={orderedCake.image} alt={orderedCake.name} className="orderImage"/>
                    <p>{orderedCake.name}</p>
                    <p>{orderedCake.flavor}</p>
                    <p>Price: {orderedCake.price}</p>
                  </div>
        )
          );
}))}
      </div>
      
      <div className="">
      <Paydetails/>

      </div>
    </div>
  );
};

export default CakeOrders;

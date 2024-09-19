import React, { useContext } from "react";
import { OrderContext } from "./orderContext";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import Paydetails from "./payment";

const CakeOrders = () => {
  const { orderArray,cakes } = useContext(OrderContext); 

  if (!cakes) {
    return <div>Loading cakes...</div>;
  }

  return (
    <div className="my-orders">

            <div className="preview">
            {orderArray.length === 0 ? (
              <p>No orders. <Link to ='/'>Buy now</Link></p>
            ) : (
        <>
              {orderArray.map((order) => {
                const orderedCake = cakes.find((cake) => cake.id === order.cakeID);
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
                    </div>
                  )
                );
              })}   </>
            )}
            </div>
      
          <div className="pay-summary"><Paydetails /></div>
    </div>
  );
};

export default CakeOrders;

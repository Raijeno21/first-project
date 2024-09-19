import './payment.css'
import { OrderContext } from "./orderContext";
import { useContext } from 'react';


const Paydetails = () => {
  const {orderArray,cakes} = useContext(OrderContext);
    return ( 
      <div>
         {orderArray.length === 0 ?
         (null):
          ( <div className="pay-details">
          <h2>Order Summary</h2>
          {orderArray.map((order)=>{
           const match = cakes.find((cake)=>cake.id===order.cakeID);
           return(
              match && (
                <div key={match.id} className="order-details">
                <p>{match.name}</p>
                <p>{order.quantity}</p>
                <p>{match.price}</p>
                </div>
              )
           )
         })}

        </div>)}
      
      </div>
     
     );
}
 
export default Paydetails;
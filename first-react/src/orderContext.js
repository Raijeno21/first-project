
import React, { createContext, useState,useEffect } from 'react';
import useFetch from "./useFetch";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderArray, setOrderArray] = useState([]);
 const {cakes,err} = useFetch("http://localhost:7000/cakes")
  

  

  return (
    <OrderContext.Provider value={{ orderArray, setOrderArray,cakes,err }}>
      {children}
    </OrderContext.Provider>
  );
};

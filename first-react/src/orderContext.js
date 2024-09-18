
import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderArray, setOrderArray] = useState([]);

  return (
    <OrderContext.Provider value={{ orderArray, setOrderArray }}>
      {children}
    </OrderContext.Provider>
  );
};

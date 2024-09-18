  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import './head.css';
  import './navbar.css';
  import './main.css';
  import './test.css';
  import App from './App';
  import './cake.css';
  import './orderSummary.css';
  import { OrderProvider } from './orderContext';
  import './orders.css';



  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <OrderProvider>
      <App />
      </OrderProvider>
    </React.StrictMode>
  );



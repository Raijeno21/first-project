import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { OrderContext } from './orderContext';

const Head = () => {
    const {carts}=useContext(OrderContext)
    return (
        <header className="head-container">
           
                <div className="left-side">
                <Link to="/">
                    <img src="/images.jpeg" className="logo" alt='logo'></img>
                    <h1>Cakes and Pastries Corner</h1>
                    </Link>
                </div>
           

            <div className="head-middle">
                <input type="search" placeholder="search" className="search-bar" />
                <div className="searchLogo-container">
                    <img src="/search.png" alt='' className="search" />
                </div>
            </div>

            <div className="right-side">
                <div className="about link">
                    <Link to='/about'>ABOUT</Link>
                </div>
                <div className="custom link">
                 CUSTOMIZED CAKES 
                </div>
                <div className="order link">
                 <Link to ='/orders'>MY ORDERS</Link>   
                </div>
            </div>
            <div className="counter">{carts}</div>
        </header>
    );
}

export default Head;

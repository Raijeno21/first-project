import React from "react";
import { Link } from "react-router-dom";

const Head = () => {
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
            <div className="counter">0</div>
        </header>
    );
}

export default Head;

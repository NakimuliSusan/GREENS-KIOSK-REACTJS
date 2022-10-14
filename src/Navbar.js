import React  from "react";
import './App.css';

const Navbar = () =>{
    return (
        <>
        <nav className = "navbar">
            <ul>
            {/* <a href="/" className="">Products</a>   */}
            <li>
            <a href="/products" className="products">Products</a>
            </li>
            <li>
            <a href="/fruits" className="fruit">Fruits</a>
            </li>
            <li>
            <a href="/vegetables" className="vegetables">Vegetables</a>
            </li>
            </ul>
            
        </nav>

        
        </>
    )

};
export default Navbar;
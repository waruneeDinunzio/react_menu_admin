import React from 'react';
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className="headerDiv row">
            <div className="logo col-md-4">
                <h1>Jo'siYa</h1>
                <h3>Vegetarian Thai Cuisine</h3>
            </div>
            <div className="nav-bar col-md-8">
                <nav>
                    <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/menu'>Menu</Link></li>
                    {/* <li><Link to='/oderOnline'>Order Online</Link></li> */}
                    <li><Link to='/healthyRecipes'>Healthy Recipes</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/listMenu'>Menu Admin</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
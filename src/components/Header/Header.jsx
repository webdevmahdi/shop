import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    )
}

export default Header
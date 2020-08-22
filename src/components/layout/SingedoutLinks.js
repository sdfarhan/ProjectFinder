import React from 'react';
import { NavLink } from 'react-router-dom';

function SingedoutLinks() {
    return (
        <>
            <li><NavLink to='/signin'>Login</NavLink></li>
            <li><NavLink to='/signup'>Sign Up</NavLink></li>
        </>
    )
}

export default SingedoutLinks
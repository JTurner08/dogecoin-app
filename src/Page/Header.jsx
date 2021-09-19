
import { Link } from 'react-router-dom'

import React from 'react'

function NavBar() {
    return (
        <nav id="nav-bar">
            <ul>
                <li>
                    <Link to="/Home"> Home </Link>
                </li>
               
                <li>
                    <Link to="/Coin"> Crypto Price </Link>
                </li>
                <li>
                    <Link to="/contact"> Contact </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
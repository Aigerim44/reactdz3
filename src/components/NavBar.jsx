import React from 'react';
import {NavLink} from "react-router-dom";
import MainPage from "../pages/MainPage.jsx";

function NavBar(props) {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>Главная</NavLink>
                    </li>
                </ul>
            </nav>

        </div>
    );
}

export default NavBar;
import React from "react";
import { NavLink } from "react-router-dom";

const MainNav = () => {
    return (
        <div class='sidebar__collection'>
            <ul class='sidebar__main-nav'>
                <li>
                    <NavLink exact activeClassName='active' to='/'>
                        <span> </span>Home
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='/browse'>
                        <span> </span>Browse
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='/radio'>
                        <span> </span>Radio
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default MainNav;

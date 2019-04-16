import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Sidebar.scss";

class Sidebar extends Component {
    render() {
        return (
            <div className='sidebar'>
                <ul>
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
    }
}

export default Sidebar;

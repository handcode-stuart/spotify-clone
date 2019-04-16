import React, { Component } from "react";

import "./Sidebar.scss";

class Sidebar extends Component {
    render() {
        return (
            <div className='sidebar'>
                <ul>
                    <li className='active'>
                        <span> </span>Home
                    </li>
                    <li>
                        <span> </span>Browse
                    </li>
                    <li>
                        <span> </span>Radio
                    </li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;

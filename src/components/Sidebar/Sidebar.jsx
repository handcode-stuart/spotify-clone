import React, { Component } from "react";

import "./Sidebar.scss";
import MainNav from "./MainNav";
import Library from "./Library";

class Sidebar extends Component {
    render() {
        return (
            <div className='sidebar'>
                <MainNav />
                <Library />
            </div>
        );
    }
}

export default Sidebar;

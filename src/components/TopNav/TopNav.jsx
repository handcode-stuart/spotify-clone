import React, { Component } from "react";

import Search from "../Search/Search";

import "./TopNav.scss";

class TopNav extends Component {
    render() {
        return (
            <div className='top-nav'>
                <Search />
                <p>Stuart Morris</p>
            </div>
        );
    }
}

export default TopNav;

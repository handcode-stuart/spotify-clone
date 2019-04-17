import React, { Component } from "react";

import "./Search.scss";

export class Search extends Component {
    render() {
        return (
            <div className='search'>
                <input type='text' placeholder='Search...' />
            </div>
        );
    }
}

export default Search;

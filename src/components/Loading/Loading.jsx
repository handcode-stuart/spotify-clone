import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Loading.scss";

class Loading extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: props.text ? props.text : "Loading...",
        };
    }

    render() {
        return <div className='loading'>{this.state.text}</div>;
    }
}

Loading.propTypes = {
    text: PropTypes.string,
};

export default Loading;

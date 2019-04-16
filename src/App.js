import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";

import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Radio from "./pages/Radio";
import NotFound from "./pages/NotFound";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/browse' component={Browse} />
                    <Route path='/radio' component={Radio} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

export default App;

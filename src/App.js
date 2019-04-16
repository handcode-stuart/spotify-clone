import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";

import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Radio from "./pages/Radio";
import NotFound from "./pages/NotFound";

import Sidebar from "./components/Sidebar/Sidebar";
import Albums from "./pages/Albums";
import Artists from "./pages/Artists";
import Songs from "./pages/Songs";
import Stations from "./pages/Stations";
import Videos from "./pages/Videos";
import Podcasts from "./pages/Podcasts";

class App extends Component {
    render() {
        return (
            <Router>
                <div className='main'>
                    <Sidebar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/browse' component={Browse} />
                        <Route path='/radio' component={Radio} />
                        <Route path='/library/songs' component={Songs} />
                        <Route path='/library/albums' component={Albums} />
                        <Route path='/library/artists' component={Artists} />
                        <Route path='/library/stations' component={Stations} />
                        <Route path='/library/videos' component={Videos} />
                        <Route path='/library/podcasts' component={Podcasts} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;

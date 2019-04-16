import React from "react";
import { NavLink } from "react-router-dom";

const Library = () => {
    return (
        <div class='sidebar__collection'>
            <h4 class='sidebar__collection-title'>Your Library</h4>
            <ul>
                <li>
                    <NavLink activeClassName='active' to='/library/songs'>
                        Songs
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='/library/albums'>
                        Albums
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='/library/artists'>
                        Artists
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='/library/stations'>
                        Stations
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='/library/videos'>
                        Videos
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='/library/podcasts'>
                        Podcasts
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Library;

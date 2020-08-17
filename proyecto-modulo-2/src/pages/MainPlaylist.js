import React from 'react';
import AppBarComponentPlaylist from './../components/playlist/AppBarComponentPlaylist';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
} from "react-router-dom";

const MainPlaylist = () => {
    return (
        <div>
            <Router>
                <div>
                    <AppBarComponentPlaylist />
                </div>
            </Router>
        </div>
    );
}

export default MainPlaylist;
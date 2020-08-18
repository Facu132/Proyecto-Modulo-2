import React from 'react';
import AppBarComponentPlaylist from './../components/playlist/AppBarComponentPlaylist';
import Search from '../components/playlist/Search';
import FirstTable from './../components/playlist/FirstTable';
import SecondTable from './../components/playlist/SecondTable';
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
                    <Search />
                    
                </div>
            </Router>
        </div>
    );
}

export default MainPlaylist;
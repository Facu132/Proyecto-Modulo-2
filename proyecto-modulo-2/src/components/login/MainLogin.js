import React from 'react';
import AppBarComponent from './AppBarComponent';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import Form from './Form';

const MainLogin = () => {
    return (
        <Router>
            <div>
                <AppBarComponent />
                <Form />
            </div>
        </Router>
        
    );
}

export default MainLogin;
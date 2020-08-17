import React from 'react';
import AppBarComponent from './../components/login/AppBarComponent';
import Form from './../components/login/Form';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

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
import React from 'react';
import AppBarComponentLogin from './../components/login/AppBarComponentLogin';
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
                <AppBarComponentLogin />
                <Form />
            </div>
        </Router>
        
    );
}

export default MainLogin;
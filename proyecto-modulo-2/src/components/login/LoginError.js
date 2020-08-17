import React from 'react';
import Box from '@material-ui/core/Box';
import './../../assets/css/LoginError.css';
import HttpsOutlinedIcon from '@material-ui/icons/HttpsOutlined';
import AppBarComponent from './AppBarComponent';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

const LoginError = () => {
    return(
        <Router>
            <div>
            <AppBarComponent />
                <Box>
                    <div className="LoginError__circular-div"><HttpsOutlinedIcon className="LoginError__icon"/></div>
                    <div className="LoginError__messages">
                        <h1 className="LoginError__main-message">Mmm... algo no salio bien</h1>
                        <p className="LoginError__scnd-message">Debes estar autenticado para acceder a esta página</p>
                    </div>
                </Box>
            </div>
        </Router>
    )
}

export default LoginError;
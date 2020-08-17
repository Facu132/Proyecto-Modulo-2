import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import './../../assets/css/AppBarComponent.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
} from "react-router-dom";

const AppBarComponent = () => {
    return (
        <Router>
            <div>
                <Box>
                    <AppBar position="static">
                        <Toolbar className="AppBar__toolbar">
                            <h2 className="AppBar__title">Mateify</h2>
                        </Toolbar>
                    </AppBar>
                </Box>
            </div>
        </Router>
    );
};

export default AppBarComponent;

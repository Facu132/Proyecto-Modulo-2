import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import HttpsOutlinedIcon from '@material-ui/icons/HttpsOutlined';
import './../../assets/css/Form.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

const Form = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '450px',
            },
        },
    }));

    const classes = useStyles();

    return (
        <Router>
            <div>
                <div className="Form__padding-circular-div">
                    <div className="Form__circular-div"><HttpsOutlinedIcon className="Form__icon"/></div>
                </div>
                <Box textAlign="center">
                    <h1>Ingesar</h1>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Correo Electrónico" variant="outlined" />
                        <br />
                        <TextField id="outlined-basic" label="Contraseña" variant="outlined" />
                        <br/>
                        <Button variant="contained" color="secondary" className="Form__playlist-button">COMENZAR A CREAR PLAYLISTS</Button>
                    </form>
                    <p className="Form__forgot-password">¿HAS OLVIDADO LA CONTRASEÑA?</p>
                    <p className="Form__account">¿NO TIENES CUENTA?</p>
                    <Button variant="outlined" color="primary" className="Form__register-button">REGISTRATE</Button>
                </Box>
            </div>
        </Router>

    );
}

export default Form;
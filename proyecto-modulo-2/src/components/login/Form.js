import React from 'react';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import HttpsOutlinedIcon from '@material-ui/icons/HttpsOutlined';
import './../../assets/css/Form.css'
import { useState } from "react";
import DateUserJson from '../../assets/data-base/userData.json';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

const Form = (props) => {

    //states iniciados "vacios" para que no haya nada en los inputs
    const [valorDelInput, setValorDelInput] = useState("");
    const [valorDelInputcontraseña, setValorDelInputcontraseña] = useState("");

    //onChange evento de los inputs
    const mostrarTextoIngresado = (evento) => {
        setValorDelInput(evento.target.value);
    };
    const mostrarTextoIngresadocontraseña = (evento) => {
        setValorDelInputcontraseña(evento.target.value);
    };


    const chequeaUsuarios = (element) => {
        //element.email y passw del json. mostrartexto es el valor  "state actual"
        if (element.email === valorDelInput && element.password === valorDelInputcontraseña) {
            return true;
        } else {
            return false;
        }
    };

    //OnClick evento
    const validaUsuario = () => {
        const FilterUser = DateUserJson.filter(chequeaUsuarios);
        console.log(FilterUser);
        if (FilterUser.length > 0) {
            alert("usuario correcto");
        } else {
            alert("El usuario y/o contraseña no son correctos");
        }
    }

    //estilos
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
                    <div className="Form__circular-div"><HttpsOutlinedIcon className="Form__icon" /></div>
                </div>
                <Box textAlign="center">
                    <h1>Ingesar</h1>
                    <form className={classes.root} noValidate autoComplete="off">
                        <Input
                            type="email"
                            onChange={mostrarTextoIngresado}
                            value={valorDelInput}
                        />
                        <br />
                        <Input
                            type="password"
                            onChange={mostrarTextoIngresadocontraseña}
                            value={valorDelInputcontraseña}
                        />
                        <br />
                        <Button variant="contained" color="secondary" className="Form__playlist-button" onClick={validaUsuario}>COMENZAR A CREAR PLAYLISTS</Button>
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
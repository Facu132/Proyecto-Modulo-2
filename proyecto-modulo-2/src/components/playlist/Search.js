import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import './../../assets/css/Search.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
} from "react-router-dom";

const Search = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '500px',
            },
        },
    }));

    const classes = useStyles();

    return (
        <Router>
            <div>
                <Box display="flex" justifyContent="center">
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Buscar" variant="outlined" className="Search__text-field" />
                    </form>
                </Box>
            </div>
        </Router>
    )
}

export default Search;
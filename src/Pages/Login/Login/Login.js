import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import '../Login/Login.css';

const Login = () => {
    const [loginData,setLoginData] = useState({})
    const {user, loginUser, signInWithGoogle , isLoading, authError} = useAuth();


    const location = useLocation();
    const history = useHistory();


    const handleOnChange= e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }


    const handleLoginSubmit = e =>{
       loginUser(loginData.email, loginData.password,location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location,history)
    }

    return (
         <Container>
            <Grid  className='loginform' sx={{mt:8}}>
                <Typography className='logintext'><h2>Log in</h2></Typography>
                <form onSubmit={handleLoginSubmit}>
                <TextField
                sx={{width:'60%',m:1}}
                 id="standard-basic" 
                 label="Your Email" 
                 name="email"
                 onChange={handleOnChange}
                 variant="standard" />
                <TextField
                 sx={{width:'60%',m:1}}
                 id="standard-basic" 
                 label="Your Password" 
                 type="password"
                 name="password"
                 onChange={handleOnChange}
                 variant="standard" />
                
                 <Button sx={{width:'60%',m:1}} type="submit" variant="contained">Login</Button>
                 <br />
                 <NavLink style={{textDecoration: 'none'}} to="/register">
                    <Button variant="text">New User? Please Register</Button>
                 </NavLink>
                 {isLoading && <CircularProgress />}
                {user?.email && <Alert severity='success'>Login successful</Alert>}
                {authError && <Alert severity='error'>{authError}</Alert>}
                </form>
                <p>--------------------------</p>
                <Button onClick={handleGoogleSignIn} variant="text">Google Sign In</Button>
                </Grid>
         </Container>
       
    );
};

export default Login;
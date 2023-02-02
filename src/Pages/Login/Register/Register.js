import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Register.css';
const Register = () => {
    const [loginData,setLoginData] = useState({});
    const history = useHistory();
    const {user,registerUser, isLoading,authError} = useAuth();

    const handleOnBlur= e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password,loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid className='registerform' sx={{mt:8}}>
                <Typography className='registertext' variant="body1" gutterButton><h2>Register</h2></Typography>
                { !isLoading && <form onSubmit={handleLoginSubmit}>
                <TextField
                sx={{width:'75%',m:1}}
                 id="standard-basic" 
                 label="Your Name" 
                 name="name"
                 
                 onBlur={handleOnBlur}
                 variant="standard" />
                <TextField
                sx={{width:'75%',m:1}}
                 id="standard-basic" 
                 label="Your Email" 
                 name="email"
                 type="email"
                 onBlur={handleOnBlur}
                 variant="standard" />
                <TextField
                 sx={{width:'75%',m:1}}
                 id="standard-basic" 
                 label="Your Password" 
                 type="password"
                 name="password"
                 onBlur={handleOnBlur}
                 variant="standard" />
                <TextField
                 sx={{width:'75%',m:1}}
                 id="standard-basic" 
                 label="Retype Your Password" 
                 type="password"
                 name="password2"
                 onBlur={handleOnBlur}
                 variant="standard" />
                
                 <Button sx={{width:'75%',m:1}} type="submit" variant="contained">Register</Button>
                 <NavLink style={{textDecoration: 'none'}} to="/login">
                    <Button variant="text">Already Registered? Please Login</Button>
                 </NavLink>
                </form>}
                {isLoading && <CircularProgress />}
                {user?.email && <Alert severity='success'>User Created successful</Alert>}
                {authError && <Alert severity='error'>{authError}</Alert>}
                </Grid>
         </Container>
    );
};

export default Register;
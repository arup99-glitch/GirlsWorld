import { Button, Grid, TextField } from '@mui/material';
import React from 'react';
import'./Subscribe.css';

const Subscribe = () => {
    return (
        <div>
            <div>
            <Grid className='textbox' container rowSpacing={1}  columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
        <Grid item className='text'  xs={12} sm={6} md={3}>
            <h3>Free Shipping</h3>
            <h3>orders $50 or more</h3>
        </Grid>
        <Grid className='text' item  xs={12} sm={6} md={3}>
            <h3>Free Returns</h3>
            <h3>within 30 days</h3>
        </Grid>
        <Grid item  className='text' xs={12} sm={6} md={3}>
            <h3>Get 20% Off 1 Item</h3>
            <h3>when you sign up</h3>
        </Grid>
        <Grid item className='text' xs={12} sm={6} md={3}>
            <h3>We Support</h3>
            <h3>24/7 amazing services</h3>
        </Grid>
        </Grid>
        </div>
        <div className='background3'>
            <div className='background3Text'>
                <h3>Get The Latest Deals <br />and receive $20 cupon for first shopping</h3>
                <TextField className='background3TextField' id="email address" label="email address" variant="filled" /> <Button className='background3button' variant="contained">Subscribe</Button>
            </div>

        </div>
        </div>
    );
};

export default Subscribe;


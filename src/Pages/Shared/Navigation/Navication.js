import React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import './Navigation.css';
import banner1 from '../../../images/banner1.png'
import banner2 from '../../../images/banner2.png'
import banner3 from '../../../images/banner3.png'
import banner4 from '../../../images/banner4.png'

import background from '../../../images/background1.png'
import { Button, Container } from '@mui/material';

const Navication = () => {
    return (
        <div>
          
    <div className='topbar'>
    <div className="background-text">
    <h6>NEW WOMEN COLOTHING</h6>
    <h1>Autumn Jeckets<br /> Collection In 2022</h1>
    <Button variant="outlined">Shop Now</Button>
  </div>
    </div>
    <Container >
    <Box   sx={{ flexGrow: 1,mt: 3 }}>
      <Grid  container spacing={2}>
        <Grid className='banner' item xs={12} md={6}>
          <div className='zoom'>
          <img  src={banner1} alt="" />
          </div>
          
          <div className='img-text1'>
       <h2> Catch the Sun:<br />
            Summer Break Styles<br />
            From $5.99</h2>
            <button>View All</button>
       </div>
        </Grid>
        <Grid className='banner' item xs={12} md={6}>
          <div  className='zoom'>
          <img src={banner2} alt="" />
          </div>
       
        <div className='img-text1'>
       <h2> Catch the Sun:<br />
            Summer Break Styles<br />
            From $5.99</h2>
            <button>View All</button>
       </div>
        </Grid>
        <Grid className='banner'  item xs={12} md={8}>
          <div className='zoom'> <img  src={banner3} alt="" /></div>
        
       <div className='img-text1'>
       <h2> Catch the Sun:<br />
            Summer Break Styles<br />
            From $5.99</h2>
            <button>View All</button>
       </div>
        </Grid>
        <Grid className='banner' item xs={12} md={4}>
       <div className='zoom'> <img  src={banner4} alt="" /></div>
        <div className='img-text1'>
       <h2> Catch the Sun:<br />
            Summer Break Styles<br/>
            From $5.99</h2>
            <button>View All</button>
       </div>
        </Grid>
      </Grid>
    </Box>

    </Container>
        </div>
    );
};

export default Navication;
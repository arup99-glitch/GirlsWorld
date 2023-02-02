import { Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import FirstNevigation from '../Shared/FirstNevigation/FirstNevigation';
import Footer from '../Shared/Footer/Footer';
import './Contact.css'
const Contact = () => {
    return (
        <div>
          <div className='firstNevigation'>
          <FirstNevigation></FirstNevigation>
          </div>
          <div>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
          <Grid className='firstGrid' item xs={12} sm={12} md={6}>
          <h1 className='sendText'>Send Us AN Email</h1>
          <div className='formate'>
            <Box
      sx={{
        width: 400,
        maxWidth: '100%',
      }}
      className='subjectText'
    >
      
          <TextField
          fullWidth 
          id="outlined-subject-input"
          label="Subject"
          type="subject"
          autoComplete="current-subject"
          
          
        />
        </Box>
         <Box
         className='emailText'
      sx={{
        width: 400,
        maxWidth: '100%',
       
      }}
    >
          <TextField
          fullWidth 
          id="email"
          label="Email"
          type="email"
          autoComplete="current-email"
         
        />
        </Box>
         <Box
         className='messageBox'
      sx={{
        width: 400,
        
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth  label="Message" id="message" />
      <Button className="send">Send</Button>
    </Box>
   
    </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
          <h1 className="touchText">Get in touch</h1>
            <Grid className="contactText" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
            <Grid className="locationText"item xs={12} sm={12} md={6}>
            
            <h3>LOCATION</h3>
            <h6>Mohammodpur</h6>
            <h6>Road:26</h6>
            <h6>House no:26</h6>
            </Grid>
            <Grid className="ourhoursText" item xs={12} sm={12} md={6}>
             <h3>OUR HOURS</h3> 
             <h6>MON-FRI 09:00 - 19:00</h6>
             <h6>SAT-SUN 10:00 - 14:00</h6>
            </Grid>
            <Grid className="contactusText" item xs={12} sm={12} md={6}>
             <h3>CONTACT US</h3>
             <h6>Phone:+8801644252337</h6>
             <h6>Email:arupchakraborty<br />153@gmail.com</h6>
            </Grid>
           
            <Grid  item xs={12} sm={12} md={6}>
             <h3>FOLLOW US</h3> 
             <h4 className="followusText"><i className="fa-brands fa-facebook"></i> <i className="fa-brands fa-twitter"></i><i class="fa-brands fa-google"></i><i class="fa-brands fa-youtube"></i></h4>
             

            </Grid>
          </Grid>
          </Grid>
  
         </Grid>
          </div>
          <Footer></Footer>
         
        </div>
    );
};

export default Contact;
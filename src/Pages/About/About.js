import { Grid } from '@mui/material';
import React from 'react';
import FirstNevigation from '../Shared/FirstNevigation/FirstNevigation';
import './About.css';
import telegram from '../../images/telegrams.png'
import confirmation from '../../images/confirmation.png'
import support from '../../images/support.png';
import coverage from '../../images/coverage.png'
import notification from '../../images/notification.png';
import system from '../../images/system.png';
import person1 from '../../images/person1.jpg';
import person2 from '../../images/person 2.jpg';
import person3 from '../../images/person3.jpg';
import aboutbackground from '../../images/about-us-background.jpg'

const About = () => {
    return (
        <div>
           <FirstNevigation></FirstNevigation>
        <div className="aboutBackground">
        
            <h1>About us </h1>
            <p>Jennifer Paganelli designs one of the most popular fabric lines in the crafting marketplace. In Girl's World, her debut book, she presents twenty-one adorable sewing projects to make for little girlsfrilly dresses, ruffled pillows, bed canopies, stuffed animals, and more! Each project features Jennifer's fresh, feminine flair in sizes and styles perfect for toddlers to tweens.</p>
        </div>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid className="blog-card" item xs={12} md={4} sm={6}>
        <img src={telegram} alt="telegram" />
            <h2>Import Telegrams</h2>
            <p>Vivamus elementum massa neque, sed fringilla mi malesuada aliquet. Vivamus pharetra ultricies.</p>
        </Grid>
        <Grid className="blog-card" item xs={12} md={4} sm={6}>
        <img src={confirmation} alt="confirmation" />
            <h2>Online Confirmartion</h2>
            <p>Vivamus elementum massa neque, sed fringilla mi malesuada aliquet. Vivamus pharetra ultricies.</p>
        </Grid>
        <Grid className="blog-card" item xs={12} md={4} sm={6}>
        <img src={support} alt="support" />
        <h2>Direct Support</h2>
        <p>Vivamus elementum massa neque, sed fringilla mi malesuada aliquet. Vivamus pharetra ultricies.</p>
        </Grid>
        <Grid className="blog-card" item xs={12} md={4} sm={6}>
        <img src={coverage} alt="coverage" />
            <h2>Worldwide Coverage</h2>
            <p>Vivamus elementum massa neque, sed fringilla mi malesuada aliquet. Vivamus pharetra ultricies.</p>
      </Grid>
        <Grid  className="blog-card" item xs={12} md={4} sm={6}>
        <img src={notification} alt="notification" />
            <h2>Mobile Notification</h2>
            <p>Vivamus elementum massa neque, sed fringilla mi malesuada aliquet. Vivamus pharetra ultricies.</p>
      </Grid>
        <Grid className="blog-card" item xs={12} md={4} sm={6}>
        <img src={system} alt="system" />
           <h2>Tracking System</h2> 
           <p>Vivamus elementum massa neque, sed fringilla mi malesuada aliquet. Vivamus pharetra ultricies.</p>
      </Grid>
     </Grid>
     {/* ////// */}
     <div className='review-bacxkground'>
     <h1 className='customer-text'>What Our Customers Think<br></br></h1>
     <Grid className='review' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
        
        <Grid className="blog-card" item xs={12} md={4} sm={12}>
       
            
            <p>Vivamus elementum massa neque, sed fringilla mi malesuada aliquet. Vivamus pharetra ultricies.</p>
            <img className='reviewers-image' src={person1} alt="telegram" />
            <h6>Sara Johnon</h6>
        </Grid>
        <Grid className="blog-card" item xs={12} md={4} sm={12}>
        
           
            <p>Vivamus elementum massa neque, sed fringilla mi malesuada aliquet. Vivamus pharetra ultricies.</p>
            <img className='reviewers-image' src={person2} alt="confirmation" />
            <h6>Sara Johnon</h6>
        </Grid>
        <Grid className="blog-card" item xs={12} md={4} sm={12}>

       
        
        <p>Vivamus elementum massa neque, sed fringilla mi malesuada aliquet. Vivamus pharetra ultricies.</p>
        <img className='reviewers-image' src={person3} alt="support" />
        <h6>Sara Johnon</h6>
        </Grid>
       
     </Grid>
     </div>
     <div className='call-us'>
        <h1>CALL US NOW</h1>
        <hr  className="new5"></hr>
        <h1>+880 1644252337</h1>
            
    </div>
        </div>
       
    );
};

export default About;
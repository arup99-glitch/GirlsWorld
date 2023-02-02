import React, { useEffect, useState } from 'react';

import FirstNevigation from '../../Shared/FirstNevigation/FirstNevigation';

import './MainBlog.css'
import { Button, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Card } from 'react-bootstrap';
import cart1 from'../../../images/cart1.jpg';
import cart2 from'../../../images/cart2.jpg';
import cart3 from'../../../images/cart3.jpg';
import cart4 from'../../../images/cart4.jpg';
import cart5 from'../../../images/cart5.jpg';
import cart6 from'../../../images/cart6.jpg';
import cart7 from'../../../images/cart7.jpg';
import cart8 from'../../../images/cart8.jpg';

import MainBlogCard from '../MainBlogCard/MainBlogCard';

// const mainBlog=[
//     {
//         id:17,
//         time: '7Feb,2022 -3 Comments',
//         name: 'arup',
//         img: cart1
//     },
//     {
//         id:18,
//         time: '7Feb,2022 -3 Comments',
//         name: 'arup',
//         img: cart2
//     },
//     {
//         id:19,
//         time: '7Feb,2022 -3 Comments',
//         name: 'arup',
//         img: cart3
//     },
//     {
//         id:20,
//         time: '7Feb,2022 -3 Comments',
//         name: 'arup',
//         img: cart4
//     },
//     {
//         id:21,
//         time: '7Feb,2022 -3 Comments',
//         name: 'arup',
//         img: cart5
//     },
//     {
//         id:22,
//         time: '7Feb,2022 -3 Comments',
//         name: 'arup',
//         img: cart6
//     },
//     {
//         id:23,
//         time: '7Feb,2022 -3 Comments',
//         name: 'arup',
//         img: cart7
//     },
//     {
//         id:24,
//         time: '7Feb,2022 -3 Comments',
//         name: 'arup',
//         img: cart8
//     },
// ]

const MainBlog = () => {
    const [mainBlog,setMainBlog] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
        .then(res => res.json())
        .then(data => setMainBlog(data));
    },[])
    return (
        <div>
            <FirstNevigation></FirstNevigation>
            <div className='backgroundFour'>
                    <h1 className='MainBlogText'>ALL Post</h1>
            </div>
            <Container sx={{ mb: 5 }}>
            <Grid container sx={{ mt: 4 }}  spacing={2}>
          {
            mainBlog.map(mainBlog => <MainBlogCard
            key={mainBlog.id}
            mainBlog={mainBlog}
            >

            </MainBlogCard>)
}
          </Grid>
            </Container>
        </div>
    );
};

export default MainBlog;
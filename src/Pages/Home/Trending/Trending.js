import React, { useEffect, useState } from 'react';
import card9 from '../../../images/card9.jpg'
import card10 from '../../../images/card10.jpg'
import card11 from '../../../images/card11.jpg'
import card12 from '../../../images/card12.jpg'
import card13 from '../../../images/card13.jpg'
import card14 from '../../../images/card14.jpg'
import card15 from '../../../images/card15.jpg'
import card16 from '../../../images/card16.jpg'
import { Button, Container, Grid } from '@mui/material';
import TrendingCard from '../TrendingCard/TrendingCard';

// const trendingCard = [
   
//     {
//         id:9,
//         name:'arup',
//         price:'$55',
//         img:card9
//     },
//     {
//         id:10,
//         name:'arup',
//         price:'$55',
//         img:card10
//     },
//     {
//         id:11,
//         name:'arup',
//         price:'$55',
//         img:card11
//     },
//     {
//         id:12,
//         name:'arup',
//         price:'$55',
//         img:card12
//     },
//     {
//         id:13,
//         name:'arup',
//         price:'$55',
//         img:card13
//     },
//     {
//         id:14,
//         name:'arup',
//         price:'$55',
//         img:card14
//     },
//     {
//         id:15,
//         name:'arup',
//         price:'$55',
//         img:card15
//     },
//     {
//         id:16,
//         name:'arup',
//         price:'$55',
//         img:card16
//     },

// ]

const Trending = () => {
    const [trendingCard ,setTrending] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/trending')
        .then(res => res.json())
        .then(data => setTrending(data));
    },[])
    return (
        <Container sx={{ mb: 5 }}>
          <Grid sx={{ mt: 5 }} ><h1>Trending</h1></Grid>
          
          <Grid container sx={{ mt: 4 }}  spacing={2}>
          {
            trendingCard.map(trendingCard => <TrendingCard
            key={trendingCard.id}
            trendingCard={trendingCard}
            >

            </TrendingCard>)
}
          </Grid>
          <Button sx={{ mt: 5,mb:5 }} variant="outlined">More Products</Button>
          <hr></hr>
        </Container>
    );
};

export default Trending;
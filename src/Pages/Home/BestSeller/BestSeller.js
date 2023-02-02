import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useCart } from 'react-use-cart';
import card1 from '../../../images/card 1.jpg';
import card2 from '../../../images/card2.jpg';
import card3 from '../../../images/card3.jpg';
import card4 from '../../../images/card4.jpg';
import card5 from '../../../images/card5.jpg';
import card6 from '../../../images/card6.jpg';
import card7 from '../../../images/card7.jpg';
import card8 from '../../../images/card8.jpg';
import BestSellerCard from '../BestSellerCard/BestSellerCard';



// const cardDetails = [
//    {
//     id: 1,
//     name: 'arup',
//     price:'30$',
//     img: card1
// },
//    {
//     id: 2,
//     name: 'arup',
//     price:'40$',
//     img:card2
// },
//    {
//     id: 3,
//     name: 'arup',
//     price:'50$',
//     img:card3
// },
//    {
//     id: 4,
//     name: 'arup',
//     price:'60$',
//     img: card4
// },
//    {
//     id: 5,
//     name: 'arup',
//     price:'70$',
//     img:card5
// },
//    {
//     id: 6,
//     name: 'arup',
//     price:'80$',
//     img:card6
// },
//    {
//     id: 7,
//     name: 'arup',
//     price:'90$',
//     img:card7
// },
//    {
//     id: 8,
//     name: 'arup',
//     price:'100$',
//     img:card8
// },


// ]

const BestSeller = () => {
    const [cardDetails,setCardDetails] = useState([]);
    const { setItems } = useCart();
    useEffect(() => {
        fetch('http://localhost:5000/bestseller')
        .then(res => res.json())
        .then(data => {
          setCardDetails(data);
          setItems(data);
        });
    },[])

        const handleAddToCart = (card) =>{
        console.log('clicked',card);
    }
    return (
        <Container sx={{ mb: 5 }}>
          <Grid sx={{ mt: 5 }} ><h1>BEST SELLER</h1></Grid>
          
          <Grid container sx={{ mt: 4 }}  spacing={2}>
          {
            cardDetails.map(cardDetails => <BestSellerCard 
            key={cardDetails.id}
            cardDetails={cardDetails}
            handleAddToCart={handleAddToCart}
            >

            </BestSellerCard>)
          }
          </Grid>
            
        </Container>
    );
};

export default BestSeller;
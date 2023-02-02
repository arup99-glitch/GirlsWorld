import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material';
import React from 'react';
import TrendingModal from '../../Shared/Modal/TrendingModal';

const TrendingCard = ({trendingCard}) => {
    const {name,price,img} = trendingCard;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
      <>
        <Grid item sx={{ pb: 2, }} xs={12} sm={6} md={3}>
        <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
    <CardMedia
      component="img"
      height="300"
      image={img}
      alt=""
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
       {name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {price}
      </Typography>
    </CardContent>
  </CardActionArea>
  <CardActions>
    <Button onClick={handleOpen}  size="small" color="primary">
      Add to Cart
    </Button>
  </CardActions>
  <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
</Card>
    </Grid>
    <TrendingModal
      trendingCard={trendingCard}
      open={open}
      handleClose={handleClose}>

      </TrendingModal>
        
          
    </>
    );
};

export default TrendingCard;
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid, Rating } from '@mui/material';
import BestSellerModal from '../../Shared/Modal/BestSellerModal';

const BestSellerCard = ({cardDetails}) => {
 
    const {name,price,img} = cardDetails;
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
        <Button onClick={handleOpen} size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
      <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
    </Card>
        </Grid>

        <BestSellerModal
          cardDetails={cardDetails}
          open={open}
          handleClose={handleClose}
          >
        </BestSellerModal>
        </>
    );
};

export default BestSellerCard;
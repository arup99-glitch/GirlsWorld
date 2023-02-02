import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography,Button } from '@mui/material';

import React from 'react';

const MainBlogCard = ({mainBlog}) => {
    const {name,description,img} = mainBlog;
    return (
       
             <Grid item sx={{ pb: 2, }} xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 350 }}>
    <CardActionArea>
    <CardMedia
      component="img"
      height="200"
      image={img}
      alt=""
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
       {name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </CardActionArea>
  <CardActions>
    <Button size="small" color="primary">
      Read More
    </Button>
  </CardActions>
  
</Card>
    </Grid>
     
    );
};

export default MainBlogCard;
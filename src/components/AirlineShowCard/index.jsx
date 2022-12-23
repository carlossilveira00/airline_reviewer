import React from 'react'
import './AirlineShowCard.scss'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';

const AirlineShowCard = ({name, image_url, average_score}) => {
  return (
    <Card sx={{ maxWidth: 600, minHeight: 400 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="240"
        image={image_url}
        alt={name}
      />
      <CardContent className='card-content'>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <div className='score'>
          <span>Average Score:</span>
          <Rating name="size-large" value={average_score} size="large" precision={0.1} />
        </div>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default AirlineShowCard

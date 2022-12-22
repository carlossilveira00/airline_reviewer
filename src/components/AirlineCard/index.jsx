import React from 'react'
import './AirlineCard.scss';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';

const AirlineCard = ({name, image_url, average_score, slug }) => {
  return (
    <Link to={`airlines/${slug}`}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image_url}
            alt={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <div className='score'>
              <span>Average Score:</span>
              <Rating name="size-small" value={average_score} size="small" precision={0.1} />
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default AirlineCard;

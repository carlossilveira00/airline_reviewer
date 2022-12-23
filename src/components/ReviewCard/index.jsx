import * as React from 'react';
import './ReviewCard.scss'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

const ReviewCard = ({ title, description,score }) => {
  return (
    <div className='card-container'>
      <Card sx={{ minWidth: 275 }}>
        <div className='card-content'>
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
          <div className="review-rating">
            <span>Rating: </span><Rating name="size-small" defaultValue={score} size="small" precision={0.1} />
        </div>
        </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default ReviewCard;

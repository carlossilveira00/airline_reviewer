import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import './Airline.scss';
import AirlineShowCard from '../AirlineShowCard';
import ReviewForm from '../ReviewForm';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';

// Define Api url to then add the :slug so you can make the api call
const AIRLINE_API = 'http://127.0.0.1:3000/'

const Airline = () => {
  const [airline, setAirline] = useState({});
  const [reviewsList, setReviewsList] = useState({});
  const [review, setReview] = useState({});
  // Get location to then use pathname to get the slug from the URL.
  const location = useLocation();
  // Get airline from api
  useEffect(()=>{
    fetch(AIRLINE_API+location.pathname)
    .then(response => response.json())
    .then(data => {
      setAirline(data.airline);
      setReviewsList(data.reviews);
    });
  },[location.pathname]);

  const handleChange = (event) => {
    event.preventDefault()
    setReview(Object.assign({}, review, {[event.target.name]: event.target.value},{airline_id: airline.id}))
  };

  const handleSubmit = (event) => {
    const reviewsPost = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(review)
    };

    fetch('http://127.0.0.1:3000/reviews', reviewsPost)
    .then(response => response.json())
    .then(data => console.log(data))

  };
  return (
    <div>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <AirlineShowCard name={airline.name} image_url={airline.image_url} average_score={3}/>
          </Grid>
          <Grid item xs={6}>
            <div className='form'>
              <ReviewForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                name={airline.name}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Airline;

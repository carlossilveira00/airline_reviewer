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
  const [airline, setAirline] = useState({})
  // Get location to then use pathname to get the slug from the URL.
  const location = useLocation();

  useEffect(()=>{
    fetch(AIRLINE_API+location.pathname)
    .then(response => response.json())
    .then(data => setAirline(data))
  },[location.pathname]);

  const handleChange = (event) => {
    event.preventDefault()
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("SUBMIT IS WORKING ")
  }

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
          />
          </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Airline;

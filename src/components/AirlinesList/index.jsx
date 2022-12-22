import React, { useEffect, useState } from 'react'
import AirlineCard from '../AirlineCard';
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';

const AIRLINES_URL = 'http://127.0.0.1:3000/airlines'

function AirlinesList() {
  const[airlines, setAirlines] = useState([])

  useEffect(()=>{
    fetch(AIRLINES_URL)
      .then(response => response.json())
      .then(data=> setAirlines(data))
  },[])


  return (
    <Container>
      {/* {airlines.map((airline)=>{
        return <AirlineCard name={airline.name} average_score={airline.average_score} image_url={airline.image_url}/>
      })} */}
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {airlines.map((airline, index) => {
          return (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <AirlineCard name={airline.name} average_score={airline.average_score} image_url={airline.image_url}/>
          </Grid>
          )
        })}
      </Grid>
    </Container>
  )
};

export default AirlinesList;

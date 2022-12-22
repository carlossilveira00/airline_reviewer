import React, { useEffect, useState } from 'react'
import { useHistory ,useLocation } from 'react-router-dom';

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
  },[location.pathname])

  return (
    <div>{airline.name}</div>
  )
}

export default Airline

import React from 'react';
import './ReviewForm.scss';
import { Rating } from '@mui/material';

function ReviewForm({handleChange, handleSubmit, name}) {
  return (
    <div className='form'>
      <form action="" onSubmit={handleSubmit}>
        <div>Had an experience with {name}? Share your review!</div>
        <div className='field'>
          <label htmlFor="ftitle">Title:</label><br/>
          <input type="text" id="title" name="title" placeholder='Review Title' onChange={handleChange}/>
        </div>
        <div className='field'>
          <label htmlFor="description">Description:</label><br/>
          <input type="text" id="description" name="description" placeholder='Review Description' onChange={handleChange}/>
        </div>
        <div className='field'>
          <div className='rating-container'>
            <div className='rating-title'>Rate this Airline:</div>
            <Rating name="score" size="large" defaultValue={0} onChange={handleChange}/>
          </div>
        </div>
        <button type="submit" className='btn'>Submit your Review!</button>
      </form>
    </div>
  )
}

export default ReviewForm;

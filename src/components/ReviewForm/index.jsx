import React from 'react'

function ReviewForm({handleChange, handleSubmit}) {
  return (
    <div>
      <form action="">
        <div>Had an experience with [AIRLINE NAME?]? Share your review!</div>
        <div className='field'>
          <label htmlFor="ftitle">Title</label>
          <input type="text" id="ftitle" name="fname" placeholder='Review Title' />
        </div>
        <div className='field'>
          <label htmlFor="fdescription">Description</label>
          <input type="text" id="fdescription" name="fdescription" placeholder='Review Description' />
        </div>
        <div className='field'>
          <div className='rating-container'>
            <div className='rating-title'>Rate this Airline</div>
            [RATING SYSTEM GOES HERE]

          </div>
        </div>
        <button type="submit" onSubmit={handleSubmit}>Submit your Review</button>
      </form>
    </div>
  )
}

export default ReviewForm;

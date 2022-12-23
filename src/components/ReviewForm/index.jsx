import React from 'react'

function ReviewForm({handleChange, handleSubmit, name}) {
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>Had an experience with {name}? Share your review!</div>
        <div className='field'>
          <label htmlFor="ftitle">Title</label>
          <input type="text" id="title" name="title" placeholder='Review Title' onChange={handleChange}/>
        </div>
        <div className='field'>
          <label htmlFor="description">Description</label>
          <input type="text" id="description" name="description" placeholder='Review Description' onChange={handleChange}/>
        </div>
        <div className='field'>
          <div className='rating-container'>
            <div className='rating-title'>Rate this Airline</div>
            [RATING SYSTEM GOES HERE]

          </div>
        </div>
        <button type="submit">Submit your Review</button>
      </form>
    </div>
  )
}

export default ReviewForm;

import React, { useState } from 'react';
import "../App.css"

const Reviews = ({ reviews, handleReviewSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = event => {
    setRating(Number(event.target.value));
  };

  const handleCommentChange = event => {
    setComment(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    fetch('/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ rating, comment })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log('Review submitted successfully');
      setRating(0);
      setComment('');
      alert('Your feedback is very much appreciated. Come back soon');
    })
    .catch(error => {
      console.error('Error submitting review:', error);
    });
  };

  return (
    <div>
      <h2>Reviews:</h2>
   <h3 className='rev'>Leave a review so we can know where to improve</h3>
      {/* {user ? ( */}
        <form onSubmit={handleSubmit}>
          <label>
            Rating:
            <input
              type="number"
              value={rating}
              onChange={handleRatingChange}
              min="1"
              max="5"
              required
            />
          </label>
          <br />
          <br>
          </br>
          <br></br>
          <label>
            Comment:
            <textarea
              value={comment}
              onChange={handleCommentChange}
              required
            ></textarea>
          </label>
          <br />
          <br></br>
          <button type="submit">Submit Review</button>
        </form>
      {/* ) : (
        <p>Please log in to leave a review.</p>
      )} */}
    </div>
  );
};

export default Reviews;

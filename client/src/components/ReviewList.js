import React, { useEffect, useState } from "react";
import axios from "axios";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";

function ReviewList({ productId }) {
  // Use state to store the reviews data
  const [reviews, setReviews] = useState([]);
  // Use state to store the loading status
  const [loading, setLoading] = useState(false);

  // Use effect to fetch the data from the backend
  useEffect(() => {
    // Set the loading state to true
    setLoading(true);
    // Make an HTTP request to the backend with the product id as a parameter
    axios
      .get("/api/reviews", { params: { productId } })
      .then((response) => {
        // Set the reviews state to the response data
        setReviews(response.data);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      })
      .finally(() => {
        // Set the loading state to false
        setLoading(false);
      });
  }, [productId]); // Run only when the product id changes

  return (
    <>
      <Typography variant="h6" component="h3">
        Reviews and comments
      </Typography>
      {loading ? (
        <Typography variant="body1" color="textSecondary">
          Loading...
        </Typography>
      ) : (
        <List>
          {reviews.map((review) => (
            <ListItem key={review.id}>
              <ListItemText
                primary={review.content}
                secondary={`${review.author} - ${review.date}`}
              />
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
}

export default ReviewList;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { List, ListItem, ListItemText } from "@material-ui/core";

function HistoryList() {
  // Use state to store the history data
  const [history, setHistory] = useState([]);
  // Use state to store the loading status
  const [loading, setLoading] = useState(false);

  // Use effect to fetch the data from the backend
  useEffect(() => {
    // Set the loading state to true
    setLoading(true);
    // Make an HTTP request to the backend
    axios
      .get("/api/history")
      .then((response) => {
        // Set the history state to the response data
        setHistory(response.data);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      })
      .finally(() => {
        // Set the loading state to false
        setLoading(false);
      });
  }, []); // Run only once when the component mounts

  return (
    <List>
      {loading ? (
        <ListItem>
          <ListItemText primary="Loading..." />
        </ListItem>
      ) : (
        history.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={item.query}
              secondary={item.date + " " + item.time}
            />
          </ListItem>
        ))
      )}
    </List>
  );
}

export default HistoryList;
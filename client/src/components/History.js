import React from "react";
import { connect } from "react-redux";
import useUserData from "./hooks/useUserData";

const History = ({ user }) => {
  // Use a custom hook to fetch the user data from the backend service
  const { loading, error, data } = useUserData(user);

  // Render a loading message while fetching the data
  if (loading) {
    return <div className="history">Loading...</div>;
  }

  // Render an error message if there is an error
  if (error) {
    return <div className="history">Error: {error.message}</div>;
  }

  // Render a message if the user is not logged in
  if (!user) {
    return <div className="history">Please log in to view your history.</div>;
  }

  // Render a table with the user's search history and order history
  return (
    <div className="history">
      <h3>Your History</h3>
      <div className="history-search">
        <h4>Search History</h4>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Query</th>
              <th>Results</th>
            </tr>
          </thead>
          <tbody>
            {data.searchHistory.map((search) => (
              <tr key={search.id}>
                <td>{search.date}</td>
                <td>{search.query}</td>
                <td>{search.results.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="history-order">
        <h4>Order History</h4>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Order ID</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.orderHistory.map((order) => (
              <tr key={order.id}>
                <td>{order.date}</td>
                <td>{order.id}</td>
                <td>${order.total}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Map the state to props
const mapStateToProps = (state) => ({
  user: state.user.currentUser,
});

// Connect the component to the redux store
export default connect(mapStateToProps)(History);
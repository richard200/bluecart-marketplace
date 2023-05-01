import React, { useState, useEffect } from "react";
import axios from "axios";

const BluecartDevices = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/scrape")
      .then(response => {
        setDevices(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {/* render the Bluecart Devices data here */}
    </div>
  );
};

export default BluecartDevices;

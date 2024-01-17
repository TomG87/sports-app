const express = require("express");
const app = express();
const axios = require("axios");
const port = 3000;

const fetchData = async () => {
  const options = {
    method: "GET",
    url: "https://sportscore1.p.rapidapi.com/sports/1/events/live",
    params: { page: "1" },
    headers: {
      "X-RapidAPI-Key": "9cbd7f3d48msh2c14c06b2684e5bp147ef6jsn5cd75c11110f",
      "X-RapidAPI-Host": "sportscore1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

// Call the async function to fetch data
fetchData();

// Optional: Start the Express app if needed
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${3000}`);
});

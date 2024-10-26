const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { createItinerary, getItinerary } = require("./controllers/dataController");
const { getFlights, getHotels, getSites } = require("./controllers/itineraryController");
const { sequelize } = require("./models");

const app = express();

app.use(express.json());
app.use(cors());

// routes
app.post("/itinerary", createItinerary);
app.get("/itinerary/:id", getItinerary);

app.get("/data/flights", getFlights);
app.get("/data/hotels", getHotels);
app.get("/data/sites", getSites);

sequelize.authenticate().then(() => {
    console.log("database connected.");
}).catch((error) =>{
    console.log("Unable to connect database", error);
}
);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Server is running at port -> ", PORT);
});
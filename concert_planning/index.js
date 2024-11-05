const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { createTour, getTour } = require("./controllers/dataController");
const { getConcerts, getMerchandiseStalls, getAfterParties } = require("./controllers/tourController");
const { sequelize } = require("./models");

const app = express();
app.use(cors());
app.use(express.json());

// route
app.post("/tour", createTour);

app.get("/tour/:id", getTour);
app.get("/data/concerts", getConcerts);
app.get("/data/merchandiseStalls", getMerchandiseStalls);
app.get("/data/afterParties", getAfterParties);

// database connection
sequelize.authenticate().then(() => {
    console.log("Database connected.");
}).catch((error) => {
    console.log("unable to connect database.");
});

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => {
    console.log("Server is running at port ->", PORT);
});

require("dotenv").config();
const axiosInstance = require("./lib/axios");

axiosInstance.get("/health")
.then((response) => console.log(response.data))
.catch((error) => console.log("Error fetching axios error", error));


// Implement the getFlights function. This function takes in two parameters: the origin and the destination.
const getFlights = async(origin, destination) => {
    try {
        const response = await axiosInstance.get('/flights/search', {
            params: {
                origin: origin,
                destination: destination
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

getFlights("bengaluru", "dehradun")
.then((flights) => console.log("Flights data-->", flights))
.catch((error) => {
    console.log(error);
});
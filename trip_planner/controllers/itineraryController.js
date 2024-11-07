const { axiosInstance } = require("../lib/axios");
const { validateFlightQueryParams,validateHotelsQueryParams, validateSitesQueryParams } = require("../validations/index");

const getFlightsByOriginAndDestination = async(req, res) => {
    const inputErrors = validateFlightQueryParams(req.query);
    
    if (inputErrors.length > 0) {
        return res.status(400).json({ inputErrors });
    }
    try {
        const { origin, destination } = req.query;
        const response = await axiosInstance.get(`/flights/search?origin=${origin}&destination=${destination}`);

        res.json(response.data);
    } catch (error) {
        return res.status(500).json({ error: "Failed to details flight by origin and destination"});
    }
}

const getHotelsByLocation = async(req, res) => {
    const inputErrors = validateHotelsQueryParams(req.query);

    if (inputErrors.length > 0) {
        return res.status(400).json({ inputErrors });
    }

    try {
        const { location } = req.query;
        const response = await axiosInstance.get(`/hotels/search?location=${location}`);
        res.json(response.data);

    } catch (error) {
        return res.status(500).json({ error: "Failed to details hotel by location"});
    }
}

const getSitesByLocation = async(req, res) => {
    const inputErrors = validateSitesQueryParams(req.query);

    if (inputErrors.length > 0) {
        return res.status(400).json({ inputErrors });
    }

    try {
        const { location } = req.query;
        const response = await axiosInstance.get(`/sites/search?location=${location}`);

        res.json(response.data);
    } catch (error) {
        return res.status(500).json({ error: "Failed to details site by location"});
    }
}

const getFlights = async(req, res) => {
    try {
        const test_error = req.query.test_error;
        const rate_limit = req.query.rate_limit;

        const response = await axiosInstance.get(`/flights?test_error=${test_error}&rate_limit=${rate_limit}`, {
            headers: {
                CLIENT_KEY: process.env.CLIENT_KEY,
                CLIENT_SECRET: process.env.CLIENT_SECRET
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error(error);

        if (error.response) {
            if (error.response.status === 429) {
                return res.status(429).json({error: "Rate limit exceeded. Please try again later"});
            } else if (error.response.status === 500 && error.response.data.error === "Simulated error for testing purposes.") {
                return res.status(500).json({error: "Simulated error for testing purposes."});
            }
            res.status(500).json({ error: "Failed to fetch flights"});
        } else {
            res.status(500).json({ error: "An unexpected error occurred" });
        }

    }
}

const getHotels = async(req, res) => {
    try {
        const test_error = req.query.test_error;
        const rate_limit = req.query.rate_limit;
        const response = await axiosInstance.get(`/hotels?test_error=${test_error}&rate_limit=${rate_limit}`);

        res.json(response.data);
    } catch (error) {
        console.error(error);

        if (error.response) {
            if (error.response.status === 429) {
                return res.status(429).json({error: "Rate limit exceeded. Please try again later"});
            } else if (error.response.status === 500 && error.response.data.error === "Simulated error for testing purposes.") {
                return res.status(500).json({error: "Simulated error for testing purposes."});
            }
            res.status(500).json({ error: "Failed to fetch hotels"});
        } else {
            res.status(500).json({ error: "An unexpected error occurred" });
        }
    }
}

const getSites = async(req, res) => {
    try {
        const test_error = req.query.test_error;
        const rate_limit = req.query.rate_limit;

        const response = await axiosInstance.get(`/sites?test_error=${test_error}&rate_limit=${rate_limit}`);

        res.json(response.data);
    } catch (error) {
        console.error(error);

        if (error.response) {
            if (error.response.status === 429) {
                return res.status(429).json({error: "Rate limit exceeded. Please try again later"});
            } else if (error.response.status === 500 && error.response.data.error === "Simulated error for testing purposes.") {
                return res.status(500).json({error: "Simulated error for testing purposes."});
            }
            res.status(500).json({ error: "Failed to fetch sites"});
        } else {
            res.status(500).json({ error: "An unexpected error occurred" });
        }
    }
}

module.exports = { 
    getFlights,
     getHotels, 
     getSites,
     getFlightsByOriginAndDestination,
    getHotelsByLocation,
    getSitesByLocation
     };
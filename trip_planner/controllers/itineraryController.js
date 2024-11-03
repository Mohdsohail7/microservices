const { axiosInstance } = require("../lib/axios");

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

module.exports = { getFlights, getHotels, getSites };
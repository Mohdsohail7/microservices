const axiosInstance = require("../lib/axios");

const getConcerts = async(req, res) => {
    try {
        const test_error = req.query.test_error;
        const rate_limit = req.query.rate_limit;

        const response = await axiosInstance.get(`/concerts?test_error=${test_error}&rate_limit=${rate_limit}`, {
            headers: {
                CLIENT_KEY: process.env.CLIENT_KEY,
                CLIENT_SECRET: process.env.CLIENT_SECRET
            }
        });

        res.json(response.data);

    } catch (error) {
        console.error(error);

        if (error.response.status === 429) {
            return res.status(429).json({ error: "Rate limit exceeded. Please try again later"});
        } else if (error.response.status === 500 && error.response.data.error === "Simulated error for testing purposes.") {
            return res.status(500).json({ error: "Simulated error for testing purposes."});
        } else {
            res.status(500).json({ error: "failed to fetch concerts"});
        }
        
    }
}

const getMerchandiseStalls = async(req, res) => {
    try {
        const test_error = req.query.test_error;
        const rate_limit = req.query.rate_limit;

        const response = await axiosInstance.get(`/merchandiseStalls?test_error=${test_error}&rate_limit=${rate_limit}`);
        res.json(response.data);

    } catch (error) {
        console.error(error);

        if (error.response.status === 429) {
            return res.status(429).json({ error: "Rate limit exceeded. Please try again later"});
        } else if (error.response.status === 500 && error.response.data.error === "Simulated error for testing purposes.") {
            return res.status(500).json({ error: "Simulated error for testing purposes."});
        } else {
            res.status(500).json({ error: "failed to fetch merchandiseStalls"});
        }
        
    }
}

const getAfterParties = async(req, res) => {
    try {
        const test_error = req.query.test_error;
        const rate_limit = req.query.rate_limit;

        const response = await axiosInstance.get(`/afterParties?test_error=${test_error}&rate_limit=${rate_limit}`);
        res.json(response.data);

    } catch (error) {
        console.error(error);

         if (error.response.status === 429) {
            return res.status(429).json({ error: "Rate limit exceeded. Please try again later"});
        } else if (error.response.status === 500 && error.response.data.error === "Simulated error for testing purposes.") {
            return res.status(500).json({ error: "Simulated error for testing purposes."});
        } else {
            res.status(500).json({ error: "failed to fetch afterParties"});
        }
        
    }
}

module.exports = { getConcerts, getMerchandiseStalls, getAfterParties }
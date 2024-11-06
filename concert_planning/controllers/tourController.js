const axiosInstance = require("../lib/axios");
const { validateConcertsQueryParams, validateMerchandiseStallsQueryParams, validateAfterPartiesQueryParams  } = require("../validations/index");


const getConcertsByArtistAndCity = async(req, res) => {
    const inputErrors = validateConcertsQueryParams(req.query);

    if (inputErrors.length > 0) {
        return res.status(400).json({inputErrors});
    }
    try {
        const { artist, city } = req.query;
        const response = await axiosInstance.get(`/concerts/search?artist=${artist}&city=${city}`);

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch concert details artist and city"});
    }
}

const getMerchandiseStallsByStallName = async(req,res) => {
    const inputErrors = validateMerchandiseStallsQueryParams(req.query);

    if (inputErrors.length > 0) {
        return res.status(400).json({ inputErrors });
    }
    try {
        const { stallName } = req.query;
        const response = await axiosInstance.get(`/merchandiseStalls/search?stallName=${stallName}`);

        res.json(response.data);

    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch details merchandistall"});
    }
}

const getAfterPartiesByCity = async(req, res) => {
    const inputErrors = validateAfterPartiesQueryParams(req.query);

    if (inputErrors.length > 0) {
        return res.status(400).json({inputErrors});
    }
    try {
        const { city } = req.query;
        const response = await axiosInstance.get(`/afterParties/search?city=${city}`);

        res.json(response.data);
    } catch (error) {
        return res.status(500).json({ error: "failed to fetch details after Party"});
    }
}

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

module.exports = { 
    getConcerts, 
    getMerchandiseStalls, 
    getAfterParties, 
    getConcertsByArtistAndCity, 
    getMerchandiseStallsByStallName,
    getAfterPartiesByCity
 }
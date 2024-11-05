const axiosInstance = require("../lib/axios");

const getConcerts = async(req, res) => {
    try {
        const response = await axiosInstance.get("/concerts", {
            headers: {
                CLIENT_KEY: process.env.CLIENT_KEY,
                CLIENT_SECRET: process.env.CLIENT_SECRET
            }
        });

        res.json(response.data);

    } catch (error) {
        console.error(error);

        res.status(500).json({ error: "failed to fetch concerts"});
    }
}

const getMerchandiseStalls = async(req, res) => {
    try {
        const response = await axiosInstance.get("/merchandiseStalls");
        res.json(response.data);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch merchandiseStalls"});
    }
}

const getAfterParties = async(req, res) => {
    try {
        const response = await axiosInstance.get("/afterParties");
        res.json(response.data);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "failed to fetch afterParty"});
    }
}

module.exports = { getConcerts, getMerchandiseStalls, getAfterParties }
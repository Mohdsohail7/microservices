require("dotenv").config();
const axiosInstance = require('./lib/axios');

axiosInstance.get('/health')
.then((response) => console.log(response.data))
.catch((error) => console.log('Error fetching axios error', error));

const getConcertsByArtistAndCity = async(artist, city) => {
    try {
        const response = await axiosInstance.get('/concerts/search', {
            params: {
                artist: artist,
                city: city
            },
        });
        return response.data ;
    } catch (error) {
        console.log(error);
    }
}

getConcertsByArtistAndCity('Taylor Swift', 'Las Vegas')
.then((data) => console.log(data))
.catch((error) => console.log(error));
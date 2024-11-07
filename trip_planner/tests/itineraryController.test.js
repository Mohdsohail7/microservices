const { 
    getFlightsByOriginAndDestination,
    getHotelsByLocation,
    getSitesByLocation
 } = require("../controllers/itineraryController");
const axiosInstance = require("../lib/axios");

jest.mock("../lib/axios", () => ({
    get: jest.fn()
}));

describe("Itinerary Controller tests", () => {
    test("should fetch flights by origin and destination", async() => {
        const mockResponse = {
            flights: [
                {
                    id: 8,
                    origin: "jammu",
                    destination: "kalaburagi",
                    flight_number: "295",
                    departure_time: "11/18/2024, 6:06:42 AM",
                    arrival_time: "11/18/2024, 8:06:42 AM",
                    price: 806.81
                },
            ]
        }

        axiosInstance.get.mockResolvedValue(mockResponse);

        const req = { query: { origin: "jammu", destination: "kalaburagi"}};
        const res = { json: jest.fn(), status: jest.fn(() => res)};
        await getFlightsByOriginAndDestination(req, res);

        expect(axiosInstance.get).toHaveBeenCalledWith(`/flights/search?origin=jammu&destination=kalaburagi`);

        expect(res.json).toHaveBeenCalledWith(mockResponse.data);
    });

    test("should fetch hotels by location", async () => {
        const mockResponse = {
            hotels: [
                {
                    id: 207,
                    name: 'Radisson Hotel Agra',
                    location: 'Agra',
                    price_per_night: 5716.00,
                    available_rooms: 5,
                  },
            ]
        }

        axiosInstance.get.mockResolvedValue(mockResponse);

        const req = { query: { location: "Agra" }};
        const res = { json: jest.fn(), status: jest.fn(() => res)};
        await getHotelsByLocation(req, res);

        expect(axiosInstance.get).toHaveBeenCalledWith(`/hotels/search?location=Agra`);
        expect(res.json).toHaveBeenCalledWith(mockResponse.data);
    });

    test("should fetch sites by location", async () => {
        const mockResponse = {
            sites: [
                {
                    id: 102,
                    name: 'Taj Mahal',
                    location: 'Agra',
                    description: 'The Taj Mahal is a white marble mausoleum in Agra, India that was built by Mughal emperor Shah Jahan in memory of his wife, Mumtaz Mahal',
                  },
            ]
        }

        axiosInstance.get.mockResolvedValue(mockResponse);

        const req = { query: { location: "Agra" } };
        const res = { json: jest.fn(), status: jest.fn(() => res)};
        await getSitesByLocation(req, res);

        expect(axiosInstance.get).toHaveBeenCalledWith(`/sites/search?location=Agra`);
        expect(res.json).toHaveBeenCalledWith(mockResponse.data);
    });

});

function validateFlightQueryParams(query) {
    const inputErrors = [];

    if (!query.origin) {
        inputErrors.push("Origin is required.");
    }

    if (!query.destination) {
        inputErrors.push("Destination is required.");
    }

    return inputErrors;
}

function validateHotelsQueryParams(query) {
    const inputErrors = [];

    if (!query.location) {
        inputErrors.push("Location is required.");
    }
    return inputErrors;
}

function validateSitesQueryParams(query) {
    const inputErrors = [];

    if (!query.location) {
        inputErrors.push("Location is required.");
    }
    return inputErrors;
}

module.exports = { 
    validateFlightQueryParams,
    validateHotelsQueryParams,
    validateSitesQueryParams
 }
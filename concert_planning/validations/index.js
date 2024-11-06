
function validateConcertsQueryParams(query) {
    const inputErrors = [];

    if (!query.artist) {
        inputErrors.push("Artist is required."); 
    }
    if (!query.city) {
        inputErrors.push("City is required.");
    }
    return inputErrors;
}

function validateMerchandiseStallsQueryParams(query) {
    const inputErrors = [];

    if (!query.stallName) {
        inputErrors.push("stallName is required.");
    }
    return inputErrors;
}

function validateAfterPartiesQueryParams(query) {
    const inputErrors = [];

    if (!query.city) {
        inputErrors.push("City is required.");
    }
    return inputErrors;
}

module.exports = { validateConcertsQueryParams, validateMerchandiseStallsQueryParams, validateAfterPartiesQueryParams  };
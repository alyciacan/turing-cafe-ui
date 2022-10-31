function checkResponse(response) {
    // if(!response.ok) {
    //     throw new Error('Error!');
    // }
    return response.json();
}

function getReservations() {
    return fetch('http://localhost:3001/api/v1/reservations')
        .then(resp => checkResponse(resp))
}

export { getReservations }
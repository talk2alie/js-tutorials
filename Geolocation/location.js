window.onload = getMyLocation;
const authorsLocation = {
    latitude: 47.624851,
    longitude: -122.52099
}

function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;

            let myLocation = {
                latitude: latitude,
                longitude: longitude
            };
            let distance = computeTheDisnaceBetween(myLocation, authorsLocation);
         
            let currentLocation = document.getElementById('currentLocation');
            currentLocation.innerHTML = `<p>I am at Latitude: ${latitude}, Logitude: ${longitude}, with an accuracy of ${position.coords.accuracy} meters.<br>`;
            currentLocation.innerHTML += `I am about ${distance}km away from the authors</p>`;
        }, error => {
                console.log(error.code);
                console.log(error.PERMISSION_DENIED);
                console.log(error.message);
        }, {enableHighAccuracy: true, timeout: 1000, maximumAge: 0.5});
    }

    //initMap();
}

function computeTheDisnaceBetween(theStartingCoordinates, theEndingCoordinates) {
    const radiusOfTheEarthInKilometers = 6371;

    let startingLongitudeInRadians = convertToRadians(theStartingCoordinates.longitude);
    let startingLatitudeInRadians = convertToRadians(theStartingCoordinates.latitude);

    let endingLongitudeInRadians = convertToRadians(theEndingCoordinates.longitude);
    let endingLatitudeInRadians = convertToRadians(theEndingCoordinates.latitude);

    let distanceBetweenTheStartingAndEndingCoordinates = Math.acos(
        Math.sin(startingLatitudeInRadians) * Math.sin(endingLatitudeInRadians) +
        Math.cos(startingLatitudeInRadians) * Math.cos(endingLatitudeInRadians) * Math.cos(startingLongitudeInRadians - endingLongitudeInRadians)
    ) * radiusOfTheEarthInKilometers;

    return distanceBetweenTheStartingAndEndingCoordinates;
}

function  convertToRadians(degrees) {
    return (degrees * Math.PI) / 180;
}

function displayMap(coordinates) {
    let googleMap = new google.maps.LatLng(coordinates.latitude, coordinates.longitude);
    let options = {
        zoom: 8,
        center: googleMap,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    let mapDiv = document.getElementById('map');
    map = new google.maps.Map(mapDiv, options);
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
}
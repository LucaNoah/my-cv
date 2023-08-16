function initMap() {
    var houseLocation = {
        lat: 47.084227,
        lng: 8.439406
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        center: houseLocation,
        zoom: 10
    });

    var marker = new google.maps.Marker({
        position: houseLocation,
        map: map,
        title: 'Hörnlistrasse 1, Küssnacht am Rigi, Switzerland'
    });
}

window.onload = initMap;
function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: -6.896300598959479, lng: 107.63331639999998};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 15,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Kota Bandung, Jawa Barat, Indonesia' // Title Location
    });
}
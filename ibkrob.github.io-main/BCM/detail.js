var map = L.map('map', {
    fullscreenControl: true,
    fullscreenControlOptions: {
    position: 'topleft'}
    }).setView([47.456, 11.254], 13);

var geojsonLayer = new L.GeoJSON.AJAX("foo.geojson");       
geojsonLayer.addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

}).addTo(map);

let popup = `
    <h3> BCM Season Opener 2022 </h3>
    <ul>
        <li> 23.04.2022 | AB 11 UHR | PARKPLATZ LUTTENSEELIFTE</li>
        <li> Luttensee-Parkplatz, Kranzberg </li>
    </ul>
`;
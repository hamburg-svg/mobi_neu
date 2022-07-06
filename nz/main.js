/* Neuseelandreise Skript */
// einzeiliger Kommentar

let zoom = 11;

// Baselayer 
let startLayer = L.tileLayer.provider("Stadia.Outdoors");


let map = L.map('map').setView([47.4916945, 11.0954984], 15);

startLayer.addTo(map);

// Maßstab hinzufügen
L.control.scale({
    imperial: false
}).addTo(map);

L.control.fullscreen().addTo(map);

let miniMap = new L.Control.MiniMap(
    L.tileLayer.provider("Stadia.Outdoors"),{ 
    toggleDisplay: true
}
).addTo(map);


// Weitere (weltweiten) Baselayer 
let layerControl = L.control.layers({
    "OSM Standard": startLayer,
    "OpenTopoMap": L.tileLayer.provider("OpenTopoMap"),
    "Stadia Outdoors": L.tileLayer.provider("Stadia.Outdoors"),
    "Thunderforest SpinalMap": L.tileLayer.provider("Thunderforest.SpinalMap"),
    "Thunderforest Landscape": L.tileLayer.provider("Thunderforest.Landscape"),
    "Stamen Watercolor": L.tileLayer.provider("Stamen.Watercolor"),

}).addTo(map);

layerControl.expand()
/*
let sightLayer = L.featureGroup();
layerControl.addOverlay(sightLayer, "Etappen");

let mrk = L.marker([etappe.lat, etappe.lng]).addTo(sightLayer);

sightLayer.addTo(map);*/
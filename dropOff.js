"use strict";

// Data drop-off sampah (contoh data)
var dropOffPoints = [
  {
    name: "Drop-off Point 1",
    lat: -6.1754,
    lng: 106.8272,
  },
  {
    name: "Drop-off Point 2",
    lat: -6.2006,
    lng: 106.8069,
  },
  {
    name: "Drop-off Point 3",
    lat: -6.2348,
    lng: 106.7973,
  },
  {
    name: "Drop-off Point 4",
    lat: -6.2006,
    lng: 106.8272,
  },
  {
    name: "Drop-off Point 5",
    lat: -6.2348,
    lng: 106.8069,
  },
  {
    name: "Drop-off Point 6",
    lat: -6.1754,
    lng: 106.7973,
  },
];

var map = L.map("map").setView([-6.1754, 106.8272], 12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(map);

// Tambahkan marker untuk setiap drop-off point
dropOffPoints.forEach(function (point, index) {
  var marker = L.marker([point.lat, point.lng]).addTo(map);
  marker.bindPopup(
    '<div class="popup-content">' +
      "<h3>" +
      point.name +
      "</h3>" +
      '<button class="popup-button" onclick="navigateToDropOff(' +
      index +
      ')">Drop-off</button>' +
      "</div>"
  );
});

// Fungsi untuk mengarahkan ke drop-off point saat tombol Drop-off pada card ditekan
function navigateToDropOff(index) {
  var dropOffPoint = dropOffPoints[index];
  map.setView([dropOffPoint.lat, dropOffPoint.lng], 15);
  alert("Anda telah memilih drop-off point: " + dropOffPoint.name);
}

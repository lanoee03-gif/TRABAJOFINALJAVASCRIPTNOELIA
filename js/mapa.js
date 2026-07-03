// Coordenadas de tu tienda
const empresa = [36.814020, -2.565718];

// Crear mapa
const map = L.map('map').setView(empresa, 14);

// Cargar mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
}).addTo(map);

// Marcador de la empresa
L.marker(empresa)
.addTo(map)
.bindPopup("SPORTKICKS")
.openPopup();

// Obtener ubicación del usuario
if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(function(posicion){

        const usuario = [
            posicion.coords.latitude,
            posicion.coords.longitude
        ];

        // Marcador usuario
        L.marker(usuario)
            .addTo(map)
            .bindPopup("Tu ubicación");
        // Calcular la ruta
        L.Routing.control({
            waypoints: [
        L.latLng(usuario[0], usuario[1]),
        L.latLng(empresa[0], empresa[1])
        ],
        routeWhileDragging: false,
        addWaypoints: false,
        draggableWaypoints: false,
        createMarker: function(i, wp) {
            return L.marker(wp.latLng);
        }
}).addTo(map);

    });

}
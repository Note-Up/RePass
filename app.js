// Initialisation de la carte centrée sur l'île de Ré
var map = L.map('map').setView([46.1914, -1.3811], 12);

// Ajouter une couche de fond (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Ajouter des marqueurs pour les partenaires
var partners = [
    {
        name: "Restaurant La Cabane du Pêcheur",
        coords: [46.1603, -1.1525],
        description: "Fruits de mer - 10% de réduction avec RéPass"
    },
    {
        name: "Bar Le Phare",
        coords: [46.2000, -1.3900],
        description: "Happy Hour prolongé"
    },
    {
        name: "Location de vélos Cyclo-Surf",
        coords: [46.1700, -1.1950],
        description: "15% de réduction sur les locations"
    }
];

// Boucle pour ajouter les marqueurs sur la carte
partners.forEach(function(partner) {
    L.marker(partner.coords)
     .addTo(map)
     .bindPopup("<b>" + partner.name + "</b><br>" + partner.description);
});

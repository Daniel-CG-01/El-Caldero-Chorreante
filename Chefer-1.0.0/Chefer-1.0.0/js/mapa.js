//Mapa de Google Maps
window.addEventListener("DOMContentLoaded", function () {
    const ubicaciones = [
        {
            nombre: "CIPFP Ausiàs March",
            lat: 39.4497764,
            lng: -0.3764262,
            info: "Carrer Àngel de Villena, s/n, Valencia"
        },
        {
            nombre: "Warner Bros. Studio Tour London",
            lat: 51.6906,
            lng: -0.4184,
            info: "Estudios de Harry Potter en Reino Unido"
        },
        {
            nombre: "King's Cross Station",
            lat: 51.5308,
            lng: -0.1238,
            info: "Andén 9% - Londres"
        }
    ];

    const mapa = new google.maps.Map(document.getElementById("mapa"), {
        center: { lat: ubicaciones[0].lat, lng: ubicaciones[0].lng },
        zoom: 5,
        mapTypeId: google.maps.mapTypeId.ROADMAP
    });

    ubicaciones.forEach((lugar) => {
        const marcador = new google.maps.Marker({
            position: {lat: lugar.lat, lng: lugar.lng },
            map: mapa,
            tittle: lugar.nombre
        });

        const infoWindow = new google.maps.infoWindow({
            content: '<h5>${lugar.nombre}</h5><p>${lugar.info}</p>'
        });

        marcador.addListener("click", function () {
            infoWindow.open(mapa, marcador);
        });
    })
});
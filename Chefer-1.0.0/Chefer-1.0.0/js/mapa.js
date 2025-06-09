//Mapa de Google Maps
window.onload = function () {
    var mapaDiv = document.getElementById('mapa');
    if (!mapaDiv) return; //No hay div con id "mapa", no se hace nada

    var valencia = new google.maps.LatLng(39.4497764, -0.3764262);

    var mapOptions = {
        center: valencia,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var mapaValencia = new google.maps.Map(mapaDiv, mapOptions);

    var marker = new google.maps.Marker({
        position: valencia,
        map: mapaValencia,
        title: 'CIPFP Ausiàs March de Valencia'
    });

    var infowindow = new google.maps.InfoWindow({
        content:
            '<img style="width: 200px; height: 100px;" src="img/Instituto_Ausiàs_March.jpg" alt="">' + 
            '<h5 style="margin-bottom: 5px;">CIPFP Ausiàs March</h5>' + 
            '<p style="margin:0;">Carrer Àngel de Villena, s/n<br>46013 Valencia</p>'
    });

    // También abrir al hacer clic en el marcador
    marker.addListener('click', function () {
        infowindow.open(mapaValencia, marker);
    });
};
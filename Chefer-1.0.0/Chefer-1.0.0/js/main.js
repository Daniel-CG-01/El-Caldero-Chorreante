(function ($) {
    "use strict";
    
    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });
    
})(jQuery);

//Formulario Casas
document.getElementById("casas").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que se recargue la página

    //Objeto para contar puntos por casa
    const puntuacion = {
        Gryffindor: 0,
        Slytherin: 0,
        Hufflepuff: 0,
        Ravenclaw: 0
    };

    //Seleccionamos todas las respuestas marcadas
    const respuestas = document.querySelectorAll("input[type='radio']:checked");

    //Sumamos puntos a cada casa
    respuestas.forEach((respuesta) => {
        const casa = respuesta.value;
        if (puntuacion[casa] !== undefined) {
            puntuacion[casa]++;
        }
    });

    //Encontramos la casa con más puntos
    const casaGanadora = Object.entries(puntuacion).reduce((a, b) => (a[1] >= b[1] ? a : b))[0];

    //Mostramos el resultado
    alert("¡Enhorabuena, has sido asignado a la casa " + casaGanadora + "!");
});

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
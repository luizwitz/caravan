// Enables all the tooltips <start>
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
// Enables all the tooltips <end>

// Some properties to the cities carousel <start>
var myCarousel = document.querySelector('#carouselCidades')
var carousel = new bootstrap.Carousel(carouselCidades, {
    interval: 5000
})
// Some properties to the cities carousel <end>

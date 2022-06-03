const dict = {};
$(document).ready(() => {
    $('input').click(function(){
        if ($(this).is(':checked')){
            dict[$(this).attr('data-id')] = $(this).attr('data-name');
        } else {
            delete dict[$(this).attr('data-id')];
        }
        $("div.amenities > h4").text(Object.values(dict).join(', '))
    });
    const uri = "http://localhost:5001/api/v1/status/"
    $.get(uri, (request) =>{
    const selector = $('#api_status')

    if (request.status === "OK") {
        selector.css("background-color", "#ff545f");
        selector.addClass("available");
    } else {
        selector.css("background-color", "#cccccc");
        selector.removeClass("available");
    }
    });

    const api = "http://localhost:5001/api/v1/places_search";
    const dict_data = {};

    $.ajax({
        type: "POST",
        url:api,
        data: JSON.stringify(dict_data),
        contentType: 'application/json',
        success: (data) => {

            for(let i= 0; i < data.length; i++) {
                place=data[i];
                template = '<article><h2>' + place.name + '</h2><div class="price_by_night"><p>$' + place.price_by_night + '</p></div><div class="information"><div class="max_guest"><div class="guest_image"></div><p>' + place.max_guest + '</p></div><div class="number_rooms"><div class="bed_image"></div><p>' + place.number_rooms + '</p></div><div class="number_bathrooms"><div class="bath_image"></div><p>' + place.number_bathrooms + '</p></div></div><div class="description"><p>' + place.description + '</p></div></article>'
                $('section.places').append(template)
            }
        }
    });


});


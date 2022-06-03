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
});

const url = "http://localhost:5001/api/v1/places_search";
const dict_data = {};

$.ajax({
    type: "POST",
    url: url,
    data: JSON.stringify(dict_data),
    contentType: 'application/json',
    success: (data) => {
        alert(data)
        alert(data[0].name)
        alert(data[0].id)
        alert(data[1].name)
        alert(data[1].id)
    },
    dataType: 'json'
  });

var queryURL = "https://data.usajobs.gov/api/search?Keyword=Software&appid=/hRFG+7lMOGKbS2O8/v+5w49kiotWe8/WYqU8XKqBRA="

//var query = "http://api.glassdoor.com/api/api.htm?v=1&format=json&t.p=120&t.k=fz6JLNDfgVs&action=employers&q=pharmaceuticals&userip=192.168.43.42&useragent=Mozilla/%2F4.0"

var query = "https://www.reed.co.uk/api/1.0/search?keywords=accountant&location=london&employerid=123&distancefromlocation=15";

$.ajax({
    url: query,
    method: "GET",
    // headers: {
    //     'Authorization-Key': '/hRFG+7lMOGKbS2O8/v+5w49kiotWe8/WYqU8XKqBRA='
    // },
    header: {
        'Authorization-Key': ''
    },

}).then(function (response) {
    console.log(response);
})


$(document).ready(function () {


})
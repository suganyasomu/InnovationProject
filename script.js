$(document).ready(function () {
    var enterInput = $("#enterInput");
    var text1 = $("#text1");
    var text2 = $("#text2");
    var text3 = $("#text3");
    var location = $("#location");
    var organization = $("#organization");
    console.log(enterInput);

    var position = "Software Developer/Engineer";
    //Working API


    var query = "http://api.glassdoor.com/api/api.htm?v=1&format=json&t.p=120&t.k=fz6JLNDfgVs&action=employers&q=pharmaceuticals&userip=192.168.43.42&useragent=Mozilla/%2F4.0"

    //var query = "https://www.reed.co.uk/api/1.0/search?keywords=accountant&location=london&employerid=123&distancefromlocation=15";

    var query2 = "https://jooble.org/api/28b271c0-9010-40fe-aca1-76270d4e740e"


    function search() {

        var position = enterInput.val();
        console.log(position);

        var queryURL = "https://data.usajobs.gov/api/search?PositionTitle=" + position + "&appid=/hRFG+7lMOGKbS2O8/v+5w49kiotWe8/WYqU8XKqBRA="
        $.ajax({
            url: queryURL,
            method: "GET",
            headers: {
                'Authorization-Key': '/hRFG+7lMOGKbS2O8/v+5w49kiotWe8/WYqU8XKqBRA='
            },

        }).then(function (response) {
            console.log(response);

            var positionTitle = response.SearchResult.SearchResultItems[0].MatchedObjectDescriptor.PositionTitle;
            var LocationName = response.SearchResult.SearchResultItems[0].MatchedObjectDescriptor.PositionLocation[0].LocationName;
            var organizationName = response.SearchResult.SearchResultItems[0].MatchedObjectDescriptor.OrganizationName;

            var pTag1 = $("<p>");
            var pTag2 = $("<p>");

            text1.append(pTag1);
            text1.append(pTag2);

            console.log(pTag1.text("Position Title: " + positionTitle));
            console.log(pTag2.text("Location Name: " + LocationName));
            // location.text(LocationName);
            // organization.text(organizationName);



        })
    }

    /* function search2() {
            var query2 = "http://api.jobs2careers.com/api/search.php?id=273&pass=HkdyhY4qQUmJXi5p&ip=...&q=...&l="

            $.ajax({
                url: query2,
                method: "GET",
                data: "JSON"
                

            }).then(function (response) {
                console.log(response);
            });

        }
    */



    $("#submit").on("click", search);
    // search2();

});
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

    var query =
        "http://api.glassdoor.com/api/api.htm?v=1&format=json&t.p=120&t.k=fz6JLNDfgVs&action=employers&q=pharmaceuticals&userip=192.168.43.42&useragent=Mozilla/%2F4.0";

    //var query = "https://www.reed.co.uk/api/1.0/search?keywords=accountant&location=london&employerid=123&distancefromlocation=15";

    var query2 = "https://jooble.org/api/28b271c0-9010-40fe-aca1-76270d4e740e";

    function search() {
        var position = enterInput.val();
        console.log(position);

        var queryURL =
            "https://data.usajobs.gov/api/search?PositionTitle=" +
            position +
            "&location= " +

            "&appid=/hRFG+7lMOGKbS2O8/v+5w49kiotWe8/WYqU8XKqBRA=";
        $.ajax({
            url: queryURL,
            method: "GET",
            headers: {
                "Authorization-Key": "/hRFG+7lMOGKbS2O8/v+5w49kiotWe8/WYqU8XKqBRA=",
            },
        }).then(function (response) {
            console.log(response);

            var positionTitle =
                response.SearchResult.SearchResultItems[0].MatchedObjectDescriptor
                .PositionTitle;
            console.log(positionTitle);
            var LocationName =
                response.SearchResult.SearchResultItems[0].MatchedObjectDescriptor
                .PositionLocation[0].LocationName;
            var organizationName =
                response.SearchResult.SearchResultItems[0].MatchedObjectDescriptor
                .OrganizationName;

            var pTag1 = $("<p>");
            var br1 = $("<br>");
            var pTag2 = $("<p>");

            text1.append(pTag1);
            //text1.append(br1);
            //text1.append(pTag2);

            text1.text("Position Title: " + positionTitle + "\n");
            //text1.text("locationName:" + LocationName);
            //text1.text(br1);

            //pTag1.text("Position Title: " + positionTitle);
            // console.log(pTag2.text("Location Name: " + LocationName));
            // location.text(LocationName);
            // organization.text(organizationName);
        });
    }

    /*function search2() {
           var jobSearch = {
               "async": true,
               "crossDomain": true,
               "url": "https://indeed-com.p.rapidapi.com/search/jobs?sort=relevance&location="+ searchLocation +"&offset=0&query="+ position +"&country=us&radius=25",
               "method": "GET",
               "headers": {
                   "x-rapidapi-host": "indeed-com.p.rapidapi.com",
                   "x-rapidapi-key": "edeaaf9e95msh0a5c23597d14061p1bea7fjsn33851cc7a8f1"
               }
           }

       $.ajax(jobSearch).then(function (response1) {
           console.log(response1);
           var positionTitle2 = response1.results[i].jobtitle;
           var locationName2 = response1.results[i].formattedLocation;
           var organizationName2 = response1.results[i].company;
           
       });
       
       };
       */


    $("#submit").on("click", search);
    // search2();
});
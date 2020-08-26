$(document).ready(function () {
    var enterPositionInput = $("#enterInput");
    //var enterLocationInput = $("#locationInput")
    var text1 = $("#text1");
    var text2 = $("#text2");
    var text3 = $("#text3");
    var col = $("#side-col");

    //var position = "Software Developer/Engineer";
    var location = "";
    var postion = "";
    //Working API
    function search() {
        var position = enterPositionInput.val();
        //var location = enterLocationInput.val();
        //    / if (enterLocationInput == "" || enterPositionInput == "") {
        //         return false;
        //     };
        console.log(position);
        console.log(location);

        var queryURL =
            "https://data.usajobs.gov/api/search?PositionTitle=" +
            position +
            "&location= " +
            location +
            "&appid=/hRFG+7lMOGKbS2O8/v+5w49kiotWe8/WYqU8XKqBRA=";
        $.ajax({
            url: queryURL,
            method: "GET",
            headers: {
                "Authorization-Key": "/hRFG+7lMOGKbS2O8/v+5w49kiotWe8/WYqU8XKqBRA=",
            },
        }).then(function (response) {
            console.log(response);

            for (var i = 0; i < response.SearchResult.SearchResultItems.length; i++) {

                // if (response.SearchResult.SearchResultItems.length < 5) {
                var positionTitle =
                    response.SearchResult.SearchResultItems[i].MatchedObjectDescriptor
                    .PositionTitle;

                var LocationName = "oregon";
                // response.SearchResult.SearchResultItems[i].MatchedObjectDescriptor[i]
                //     .PositionLocation[0].LocationName;
                var organizationName =
                    response.SearchResult.SearchResultItems[i].MatchedObjectDescriptor
                    .OrganizationName;

                var divCard = $("<div>");
                divCard.addClass("column");
                // divCard.css("display", "block");
                // divCard.css("width", "block");
                var divContent = $("<div>");
                divContent.addClass("card-content");

                var p1 = $("<p>").text("position: " + positionTitle);
                p1.addClass("card-header-title");
                p1.css("font", "100");


                var p2 = $("<p>").text("Location: " + LocationName);
                p2.addClass("card-header-title");
                p2.css("font", "100");
                var p3 = $("<p>").text("Organization: " + organizationName);
                p3.addClass("card-header-title");
                p3.css("font", "100");

                divCard.append(divContent);
                divContent.append(p1);

                divContent.append(p2);
                divContent.append(p3);

                col.append(divCard);
            }

            // }



        });
    }

    /*function search2() {
           var jobSearch = {
               "async": true,
               "crossDomain": true,
               "url": "https://indeed-com.p.rapidapi.com/search/jobs?sort=relevance&location="+ searchLocation +"&offset=0&query="+ position +"&country=us&radius=25",
                    divContent.append(p3);

                    col.append(divCard);
                }

            }



        });
    }

    /*function search2() {
           var jobSearch = {
               "async": true,
               "crossDomain": true,
               "url": "https://indeed-com.p.rapidapi.com/search/jobs?sort=relevance&location="+ searchLocation +"&offset=0&query="+ position +"&country=us&radius=25",
                    divContent.append(p3);

                    col.append(divCard);
                }

            }



        });
    }

    /*function search2() {
           var jobSearch = {
               "async": true,
               "crossDomain": true,
               "url": "https://indeed-com.p.rapidapi.com/search/jobs?sort=relevance&location="+ searchLocation +"&offset=0&query="+ position +"&country=us&radius=25",
                    divContent.append(p3);

                    col.append(divCard);
                }

            }



        });
    }

    /*function search2() {
           var jobSearch = {
               "async": true,
               "crossDomain": true,
               "url": "https://indeed-com.p.rapidapi.com/search/jobs?sort=relevance&location="+ searchLocation +"&offset=0&query="+ position +"&country=us&radius=25",
                    divContent.append(p3);

                    col.append(divCard);
                }

            }



        });
    }

    /*function search2() {
           var jobSearch = {
               "async": true,
               "crossDomain": true,
               "url": "https://indeed-com.p.rapidapi.com/search/jobs?sort=relevance&location="+ searchLocation +"&offset=0&query="+ position +"&country=us&radius=25",
                    divContent.append(p3);

                    col.append(divCard);
                }

            }



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
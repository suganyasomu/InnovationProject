$(document).ready(function () {
    var enterPositionInput = $("#enterInput");

    var main = $("#main");
    var enterLocationInput = $("#searchLoc");
    var info1 = $("#info1");
    var info2 = $("#info2");
    var details = $("#details");
    var link = $("#link");

    var browser = $("#browser");
    var qualification = $("#qualification");
    var rightCol1 = $("#rightCol1");
    var rightCol2 = $("#rightCol2");
    var backImg = $("#backImg");
    var leftSection = $("#leftSection");
    var openModal = $("#openModal");
    var text4;
    var text5;
    var position;
    var location;

    // API called when the search button is clicked
    function search(position, location) {

        var queryURL =
            "https://data.usajobs.gov/api/search?Keyword=" +
            position +
            "&locationName= " +
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
            console.log(response.SearchResult.SearchResultItems.length)
            // if (response.SearchResult.SearchResultItems.length === 0) {
            //     openModal.css("display", "inline-block");
            // }


            for (var i = 0; i < response.SearchResult.SearchResultItems.length; i++) {
                var positionTitle =
                    response.SearchResult.SearchResultItems[i].MatchedObjectDescriptor
                    .PositionTitle;

                var LocationName =
                    response.SearchResult.SearchResultItems[i].MatchedObjectDescriptor
                    .PositionLocation[0].LocationName;
                var organizationName =
                    response.SearchResult.SearchResultItems[i].MatchedObjectDescriptor
                    .OrganizationName;

                if (i < 5) {
                    var mainDiv = $("<div>");
                    mainDiv.addClass("columns is-vcentered");


                    var divCard = $("<div>");
                    divCard.addClass("column is-3");



                    var divContent = $("<div>");
                    divContent.addClass("card-content");

                    var p1 = $("<p>").text("Position: " + positionTitle);
                    p1.addClass("card-header-title");


                    var p2 = $("<p>").text("Location: " + LocationName);
                    p2.addClass("card-header-title");

                    var p3 = $("<p>").text("Organization: " + organizationName);
                    p3.addClass("card-header-title");

                    var p4 = $("<p>");
                    p4.addClass("card-header-title");
                    p4.attr(
                        "data-value",
                        response.SearchResult.SearchResultItems[i].MatchedObjectDescriptor
                        .PositionURI
                    );
                    var p5 = $("<p>");
                    p5.addClass("card-header-title");
                    p5.attr(
                        "data-qualify",
                        response.SearchResult.SearchResultItems[i].MatchedObjectDescriptor
                        .QualificationSummary
                    );

                    divCard.append(divContent);
                    divContent.append(p1);

                    divContent.append(p2);
                    divContent.append(p3);
                    divContent.append(p4);
                    divContent.append(p5);

                    mainDiv.append(divCard);
                    leftSection.append(mainDiv);

                    mainDiv.css("margin-left", "50px");
                    mainDiv.css("width", "70%");
                    divCard.css("border", "4px light grey");



                }
            }


            var position =
                response.SearchResult.SearchResultItems[0].MatchedObjectDescriptor
                .PositionTitle;

            var location =
                response.SearchResult.SearchResultItems[0].MatchedObjectDescriptor
                .PositionLocation[0].LocationName;

            link.css("display", "inline-block");
            qualification.css("display", "inline-block");
            rightCol1.css("display", "inline-block");
            rightCol2.css("display", "inline-block");

            var summary =
                response.SearchResult.SearchResultItems[0].MatchedObjectDescriptor
                .QualificationSummary;

            var applyLink = response.SearchResult.SearchResultItems[0].MatchedObjectDescriptor
                .PositionURI;

            info1.text(position);
            info2.text(location);
            details.text(summary);
            link.click(function () {
                window.open(applyLink);
            })
            // window.open(text4);

        });
    }


    //Display details to the section
    function displayDetails() {
        $(".is-3").css("border-left", "4px solid lightgray");
        var text1 = $(this).find("p:nth-child(1)").text();
        var text2 = $(this).find("p:nth-child(2)").text();
        text4 = $(this).find("p:nth-child(4)").attr("data-value");
        text5 = $(this).find("p:nth-child(5)").attr("data-qualify");
        $(info1).innerHTML = "";
        $(info2).innerHTML = "";
        $(info1).text(text1);
        $(info2).text(text2);
        $(details).text(text5);
        $(this).css("border-left", "8px solid purple");
    }

    function getInput() {
        position = enterPositionInput.val();
        location = enterLocationInput.val();
        leftSection.empty();
        search(position, location);

    }
    $("#submit").on("click", getInput);
    $(document).on("click", ".is-3", displayDetails);
    $("#link").click(function () {
        window.open(text4);
    });
});
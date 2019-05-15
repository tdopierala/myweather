$(function() {

    $("#topmenu").on("click", "a", function(){
        
        let = href = $(this).attr("href");
        app.get(href);

        return false;
    });

    app.get("#forecasts");
});
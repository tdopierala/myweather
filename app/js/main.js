$(function() {
    //$("#map-box").show();

    $("#topmenu").on("click", "a", function(){
        let = href = $(this).attr("href");

        switch(href){

            case "#forecasts": 

                app.get(href);

            break;

            case "#statistics": 

                app.get(href);

            break;
        }

        return false;
    });
});
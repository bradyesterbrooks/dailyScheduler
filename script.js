

$(document).ready(function () {

    var currentHour = parseInt(moment().format("HH"));
    // jquery and js below
    $(".today").text(moment().format("dddd, MMMM Do, YYYY h:mm a"));

    //save button -> text content to local storage

    $(".saveBtn").on("click", function () {
        var dataHour = $(this).attr("hour");
        console.log(dataHour);
        var userInput = $("#hour" + dataHour).val();
        console.log(userInput);
        localStorage.setItem(dataHour, userInput);

    });

    function retrieve() {
        // need to loop through hours and retrieve the stored items... if there are any
        for (let index = 8; index < 19; index++) {
            $("#hour"+index).val(localStorage.getItem(index));
            
        }
    };

retrieve();

//now we need to deal with the coloring of the hour blocks based on past and current

for (let i = 8; i < 19; i++) {
    var this_time=$("#hour"+i).attr('time');
    var this_time_int=parseInt(this_time);
    console.log(this_time_int);

    if (this_time<currentHour){
        $("#hour"+i).addClass("past_time");
    }
    else if (this_time===currentHour){
        $("#hour"+i).addClass("current_time");
    }
    else {
        $("#hour"+i).addClass("future_time");
    }
    
}





});
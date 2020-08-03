

$(document).ready(function () {

    var currentHour = parseInt(moment().format("HH"));
    // jquery and js below
    $(".today").text(moment().format("dddd, MMMM Do, YYYY"));

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






});
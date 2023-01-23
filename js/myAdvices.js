var modal = document.getElementById("modelAdvice");

$("#openModelAdvice").on('click', function () {
    $("#modelAdvice").css('display', 'block');
    $("#modelAdvice .modal-content").animate({
        top: 0
    }, 300);
});

// When the user clicks on <span> (x), close the modal
$(".close3").on('click', function () {
    $("#modelAdvice").css('display', 'none');
    $("#modelAdvice .modal-content").animate({
        top: '-300px'
    }, 300);
});


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        $("#modelAdvice").css('display', 'none');
        $("#modelAdvice .modal-content").animate({
            top: '-300px'
        }, 300);
    }
}
  
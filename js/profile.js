
// Modal

var modal = document.getElementById("myModel");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

$("#openModel").on('click', function () {
  $("#myModel").css('display', 'block');
  $("#myModel .modal-content").animate({
    top: 0
  }, 300);
});

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  $("#myModel").css('display', 'none');
  $("#myModel .modal-content").animate({
    top: '-300px'
  }, 300);
}

//////////////////////////////////////////////////////////////

// Modal Doctor

var modal1 = document.getElementById("myModelDoctor");

$("#openModelDoctor").on('click', function () {
  $("#myModelDoctor").css('display', 'block');
  $("#myModelDoctor .modal-content").animate({
    top: 0
  }, 300);
});

// When the user clicks on <span> (x), close the modal
$(".colse1").on('click', function () {
  $("#myModelDoctor").css('display', 'none');
  $("#myModelDoctor .modal-content").animate({
    top: '-300px'
  }, 300);
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    $("#myModel").css('display', 'none');
    $("#myModel .modal-content").animate({
      top: '-300px'
    }, 300);
  }
  if (event.target == modal1) {
    $("#myModelDoctor").css('display', 'none');
    $("#myModelDoctor .modal-content").animate({
      top: '-300px'
    }, 300);
  }
}

//////////////////////////////////////////////////////////////////////////

// Profile

$(".account .tabs li").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});
//Historical For Modle
$(".account .tabs .Modle").click(function () {
  $(".account .pages .page").removeClass("active");
  $(".account .pages .Modle").addClass("active");
});
//Dashboard

$(".account .tabs .dashboard").click(function () {
  $(".account .pages .page").removeClass("active");
  $(".account .pages .dashboard").addClass("active");
});
//historical For Hardware 
$(".account .tabs .hardware").click(function () {
  $(".account .pages .page").removeClass("active");
  $(".account .pages .hardware").addClass("active");
});

//////////////////////////////////////////////////////////////////////////

// Upload Image
$("#userPhoto").on('change', function () {
  $("#imgForm").submit();
});

// Upload Image
$("#add_image").on('change', function () {
  $("#form_add_image").submit();
});

//////////////////////////////////////////////////////////////////////////

// Veno Box (Photo)

$(document).ready(function () {
  $('.venobox').venobox({
    spinner: 'double-bounce',
    spinColor: '#586bda'
  });
});

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

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    $("#myModel").css('display', 'none');
    $("#myModel .modal-content").animate({
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

document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
  const dropZoneElement = inputElement.closest(".drop-zone");
  dropZoneElement.addEventListener("click", (e) => {
    inputElement.click();
  });
  inputElement.addEventListener("change", (e) => {
    if (inputElement.files.length) {
      updateThumbnail(dropZoneElement, inputElement.files[0]);
    }
  });
  dropZoneElement.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZoneElement.classList.add("drop-zone--over");
  });
  ["dragleave", "dragend"].forEach((type) => {
    dropZoneElement.addEventListener(type, (e) => {
      dropZoneElement.classList.remove("drop-zone--over");
    });
  });
  dropZoneElement.addEventListener("drop", (e) => {
    e.preventDefault();
    if (e.dataTransfer.files.length) {
      inputElement.files = e.dataTransfer.files;
      updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
    }
    dropZoneElement.classList.remove("drop-zone--over");
  });
});
function updateThumbnail(dropZoneElement, file) {
  let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");
  // First time - remove the prompt
  if (dropZoneElement.querySelector(".drop-zone__prompt")) {
    dropZoneElement.querySelector(".drop-zone__prompt").remove();
  }
  // First time - there is no thumbnail element, so lets create it
  if (!thumbnailElement) {
    thumbnailElement = document.createElement("div");
    thumbnailElement.classList.add("drop-zone__thumb");
    dropZoneElement.appendChild(thumbnailElement);
  }
  thumbnailElement.dataset.label = file.name;
  // Show thumbnail for image files
  if (file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
      $("#imgForm").submit();
    };
  } else {
    thumbnailElement.style.backgroundImage = null;
  }
}


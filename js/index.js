
$(document).ready(function() {
    $("#carousel").click(function(){
        $(this).hide();
    });
});
// owl carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 4,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
    });
  });


  new VenoBox();
  
  new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'wave'
});
new VenoBox({
  selector: ".my-link"
});

// aos animation

$(document).ready(function() {
  $("#showTableButton").click(function() {
    $("#consultationTable, #closeButton").toggle();
  });

  $("#closeButton").click(function() {
    $("#consultationTable, #closeButton").hide();
  });
});

// loader here
document.addEventListener("DOMContentLoaded", function () {
  // Show the loader
  document.querySelector('.loader-wrapper').style.display = 'flex';

  // Set a timeout to hide the loader after 5 seconds
  setTimeout(function () {
      document.querySelector('.loader-wrapper').style.display = 'none';
  }, 3000); // 5000 milliseconds = 5 seconds
});

// If you want the loader to appear when the page is being reloaded
window.addEventListener("beforeunload", function () {
  document.querySelector('.loader-wrapper').style.display = 'flex';
});
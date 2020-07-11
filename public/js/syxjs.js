window.onscroll = function() {alwaysTop()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function alwaysTop() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

$('.navbar-toggler').on("click",function(){
  if($('#navbarsSyx').hasClass('collapse')){
    $('#navbarsSyx').removeClass('collapse');
  } else{
    $('#navbarsSyx').addClass('collapse');
  }
});
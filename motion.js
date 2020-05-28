
var scrollTop;
var documentHeight;
var scrollBottom;
var rowHeight = $(".row").offset().top + ($(".row").offset().top)*0.2;

$(window).scroll(function() {
  scrollTop = $(window).scrollTop();
  documentHeight = document.documentElement.clientHeight;
  scrollBottom = scrollTop + documentHeight;
  if(scrollBottom > rowHeight){
    $(".col-12").css("opacity", 1.0)
  }
  else {
    $(".col-12").css("opacity", 0.2)
  }
});

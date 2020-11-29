$(function (){
  // Verso destra
  var next = $(".slider-wrapper > .next > i.fa-angle-right");
  next.click(function(){
    console.log("ok");
    var imgView = $(".images > img.active");
    var firstImg = $(".images > img.first");
    var lastImg = $(".images > img.last");
    var circleView = $(".nav > i.active");
    var firstCircle = $(".nav > i.first");
    var lastCircle = $(".nav > i.last");

    if (imgView.hasClass("last")) {
      lastImg.removeClass("active");
      firstImg.addClass("active");
      lastCircle.removeClass("active");
      firstCircle.addClass("active");
    }else {
      imgView.removeClass("active");
      imgView.next().addClass("active");
      circleView.removeClass("active");
      circleView.next().addClass("active");
    }
  });
  // Verso sinistra
  var prev = $(".slider-wrapper > .prev > i.fa-angle-left");
  prev.click(function(){
    console.log("ok");
    var imgView = $(".images > img.active");
    var lastImg = $(".images > img.last");
    var firstImg = $(".images > img.first");
    var circleView = $(".nav > i.active");
    var firstCircle = $(".nav > i.first");
    var lastCircle = $(".nav > i.last");

    if (imgView.hasClass("first")) {
      firstImg.removeClass("active");
      lastImg.addClass("active");
      firstCircle.removeClass("active");
      lastCircle.addClass("active");
    }else {
      imgView.removeClass("active");
      imgView.prev().addClass("active");
      circleView.removeClass("active");
      circleView.prev().addClass("active");
    }
  });
});

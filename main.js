$(function (){
  var next = $(".slider-wrapper > .next > i.fa-angle-right");
  next.click(function(){
    console.log("ok");
    var imgView = $(".images > img.active");
    imgView.removeClass("active");
    imgView.next().addClass("active");
  });
});

$(function (){
  var prev = $(".slider-wrapper > .prev > i.fa-angle-left");
  prev.click(function(){
    console.log("ok");
    var imgView = $(".images > img.active");
    imgView.removeClass("active");
    imgView.prev().addClass("active");
  });
});

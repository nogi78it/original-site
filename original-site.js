$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {
            loop: true,
            nav: false,
            dots: false,
            items: 1,
            
            autoplay : 5000,//自動でスライドするスピード。例：5000の場合、5秒
            stopOnHover : true,//マウスオンでストップ
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            //smartSpeed:5000

        }
    );
    
  //マウスを乗せたら
  $('.box-contents').hover(function() {
 
    $(this).children('.cover').fadeIn(500);
 
  //ここにはマウスを離したとき
  }, function() {
    $(this).children('.cover').fadeOut(500);
 
  });


$("#open-menu").click(function () {
        $(this).next().slideToggle();
      });
     

$('a[href*=#]').click(function() {
    var target = $(this.hash);
    //if (target.length) {
    if (target) {
        var targetOffset = target.offset().top;
        $('html,body')
        //.animate({width: "toggle", opacity: "toggle"},"slow", "easeInQuart");
       .animate({scrollTop: targetOffset},"slow");
        return false;
        }
    });



     
});
$(document).ready(function (){
    /* navigation */
    var $header = $('#header');
    var $snb = $('#snb');
    var $openBtn = $('#btnOpen');
    var $closeBtn = $('#snb .btn_close');
    var line = $('.crossline');
    var $win = $(window);
    var timer = 0;

    
    $win.resize(function (){
        var winWid = $(window).width();
        if (winWid <= 1260 ) {
            $("body").removeClass().addClass("mobile");
        } else {
            $("body").removeClass().addClass("pc");
        }

    });
    //snb
    $openBtn.on('click',function (){
      $openBtn.addClass('on');
      $snb.addClass('active').stop().animate({right: '0%'},300);
      $snb.children('ul').on('click',function (){
        $snb.removeClass('active').stop().animate({right:'100%'},300);
      });
    });
    $closeBtn.on('click',function(){
    $snb.removeClass('active').stop().animate({right:'100%'},300);
    });

    //scroll_rotate
    $win.on('scroll',function (){
      clearTimeout(timer);
      
      timer = setTimeout( function(){
        var hdTop = $win.scrollTop();
        var select = $('#select').offset().top;
        var profile = $('#profile').offset().top;
        //console.log(hdTop, select , profile ,profile-100);

        if(hdTop >= 0 && hdTop <= select -50) {
          $openBtn.removeClass();
        }
        else if ( hdTop > select && hdTop <= profile-50 ){
          $openBtn.removeClass().addClass('triangle');
        } else {
          $openBtn.removeClass().addClass('circle');
        }
      } , 30);

    });

});
$(window).on('load', function(){
  $(window).on('scroll', function() {
    var wintop = $(window).scrollTop(), docheight = $('article').height(), winheight = $(window).height();
    var totalScroll = (wintop/(docheight-winheight))*100;
    $(".KW_progressBar").css("width",totalScroll+"%");
  });
});

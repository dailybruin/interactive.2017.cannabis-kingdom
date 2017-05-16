$(document).ready(function(){

    $('.video-poster').click(function(){
        var $toExpand = $(this).closest('.video-refer');
        expandAndPlay($toExpand);
    });

    function expandAndPlay($toExpand) {
        $toExpand.css('width', '100%');
        $toExpand.find('.video-poster').delay(1000).fadeOut(1000);

    }

});

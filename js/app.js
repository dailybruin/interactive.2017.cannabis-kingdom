var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
$(document).ready(function(){

    $('.video-poster').click(function(){
        var $toExpand = $(this).closest('.video-refer');
        expandAndPlay($toExpand);
    });

    function expandAndPlay($toExpand) {
        $toExpand.css('width', '100%');
        $toExpand.find('.video-poster').delay(1000).css('opacity', '0');
        onYouTubeIframeAPIReady();
        function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            width: '100%',
            height: '100%',
            videoId: 'M7lc1UVf-VE',
            playerVars: { 'autoplay': 1, 'controls': 0 },
            events: {
            'onReady': onPlayerReady
            }
        });
        }
        function onPlayerReady(event) {
            event.target.playVideo();
        }
    }

});


// 4. The API will call this function when the video player is ready.



console.log('Bye');
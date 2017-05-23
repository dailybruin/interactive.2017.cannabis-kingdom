var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
$(document).ready(function(){

    $('.video-refer').click(function(){
        var $toExpand = $(this).closest('.video-refer');
        expandAndPlay($toExpand);
    });

    function expandAndPlay($toExpand) {
        $toExpand.css('width', '100%');
        onYouTubeIframeAPIReady();
        $toExpand.find('.video-poster').delay(1000).css('opacity', '0');
        function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            width: '100%',
            height: '100%',
            videoId: 'eV_ZK97hWsA',
            playerVars: { 'autoplay': 1, 'controls': 0, 'autohide':1, 'showinfo': 0 },
            events: {
            'onReady': onPlayerReady
            }
        });
        }
        function onPlayerReady(event) {
            event.target.playVideo();
            event.target.setVolume(100);
        }
    }

});


// 4. The API will call this function when the video player is ready.



console.log('Bye');
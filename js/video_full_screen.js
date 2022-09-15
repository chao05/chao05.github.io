var video=document.getElementsByClassName('video')[0]
function video_full_screen_phone() {
    if (video.requestFullscreen) {
        video.requestFullscreen()
    }
}
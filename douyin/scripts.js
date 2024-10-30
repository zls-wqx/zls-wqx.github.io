document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll('video');

    videos.forEach(video => {
        video.addEventListener('play', function() {
            videos.forEach(v => {
                if (v !== video) {
                    v.pause();
                }
            });
        });
    });
});

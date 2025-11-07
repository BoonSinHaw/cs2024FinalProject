function start() {
    var rotator = document.getElementById('rotator');
    var delayInSeconds = 10;
    var imageDir = 'images/';
    var images = ['Banner2.jpg', 'Banner1.jpg'];
    var num = 0;

    // Set initial opacity and transition
    rotator.style.transition = "opacity 1.5s ease-in-out";
    rotator.style.opacity = 1;

    var changeImage = function () {
        // Fade out
        rotator.style.opacity = 0;

        setTimeout(function () {
            // Change image after fade out completes
            rotator.src = imageDir + images[num++];
            if (num == images.length) {
                num = 0;
            }

            // Fade in new image
            rotator.style.opacity = 1;
        }, 1500); // match fade duration (1.5s)
    };

    setInterval(changeImage, delayInSeconds * 1000);
}

window.onload = start;
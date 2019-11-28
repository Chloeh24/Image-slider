var slideImages = document.querySelectorAll('.slide');
var leftArrow = document.querySelector('.left img');
var rightArrow = document.querySelector('.right img');

var slideIndex = 0;

//clear all images
function reset() {
    for (var i =0; i < slideImages.length; i++) {
        slideImages[i].style.display = 'none';
    }
}

function startSlide() {
    reset();
    slideImages[0].style.display = 'block';
}

//Show previous 

function slideLeft() {
    reset();
    slideImages[slideIndex - 1].style.display = 'block';
    slideIndex--;
};

    leftArrow.addEventListener('click', function(){
    if (slideIndex === 0) {
        slideIndex = slideImages.length;
    }
    slideLeft();
});

//show next

function slideRight() {
    reset();
    slideImages[slideIndex + 1].style.display = 'block';
    slideIndex++;
};

    rightArrow.addEventListener('click', function(){
        if (slideIndex === slideImages.length - 1) {
            slideIndex = -1;
        }
        slideRight();

    });

    startSlide();
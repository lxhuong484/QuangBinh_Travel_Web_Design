// ---------- play video home ---------------- 
const videoFile = document.getElementById('video-file'),
    videoButton = document.getElementById('button-play-video-home'),
    videoIcon = document.getElementById('icon-play-video-home');

function playPause() {
    if (videoFile.paused) {
        videoFile.play()

        // change Icon 
        videoIcon.classList.remove('ri-play-circle-line')
        videoIcon.classList.add('ri-pause-mini-line')
    }
    else {
        videoFile.pause()

        //change Icon
        videoIcon.classList.add('ri-play-circle-line')
        videoIcon.classList.remove('ri-pause-mini-line')
    }
}

videoButton.addEventListener('click', playPause);

function finalVideo() {
    // change Icon 
    videoIcon.classList.add('ri-play-circle-line')
    videoIcon.classList.remove('ri-pause-mini-line')
}

videoFile.addEventListener('ended', finalVideo)



// ================= PLAY VIDEO TOUR ==================== 
const videoTour = document.getElementById('video-tour'),
    videoTourButton = document.getElementById('video-tour-button'),
    videoTourIcon = document.getElementById('video-tour-icon');

function playPause2() {
    if (videoTour.paused) {
        videoTour.play()

        // change Icon 
        videoTourIcon.classList.remove('ri-play-line')
        videoTourIcon.classList.add('ri-pause-mini-line')
    }
    else {
        videoTour.pause()

        //change Icon
        videoTourIcon.classList.add('ri-play-line')
        videoTourIcon.classList.remove('ri-pause-mini-line')
    }
}

videoTourButton.addEventListener('click', playPause2);

function finalVideo2() {
    // change Icon 
    videoTourIcon.classList.add('ri-play-line')
    videoTourIcon.classList.remove('ri-pause-mini-line')
}

videoTour.addEventListener('ended', finalVideo2)


// ================ PLAY MUSIC BACKGROUND =============== 
const MusicBackgroundFile = document.getElementById('music-background-file'),
    MusicBackgroundButton = document.getElementById('play-music-button'),
    MusicBackgroundIcon = document.getElementById('play-music-icon');

function playPauseMusic() {
    if (MusicBackgroundFile.paused) {
        MusicBackgroundFile.play()

        //rotate Icon
        MusicBackgroundIcon.classList.add('playMusic')
    }
    else {
        MusicBackgroundFile.pause()

        //rotate Icon
        MusicBackgroundIcon.classList.remove('playMusic')
    }
}

MusicBackgroundButton.addEventListener('click', playPauseMusic)

function finalMusic() {
    MusicBackgroundIcon.classList.remove('playMusic');
}

MusicBackgroundFile.addEventListener('ended', finalMusic)


/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})

sr.reveal('.home__data, .home__social, .home__info, .about__data, .tour__data, .section__description', {
    origin: 'left',
    interval: 200,
})

sr.reveal('.home__info, .about__img-wrapper, .video__tour-wrapper, .section__title, .subscribe__form', {
    origin: 'right',
    interval: 200,
})


sr.reveal('.place__card, .experience__content, .footer__data', {
    origin: 'top',
    interval: 200,
})

sr.reveal('.experience__img-wrapper, .discover__container', {
    origin: 'bottom',
    interval: 200,
})

/*==================== SWIPER DISCOVER ====================*/
let swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
})

// ============== CHANGE BACKGROUND HEADER ================== 
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

//  ================== SCROLL TOP =================== 

function checkScroll(){
    if(document.body.scrollTop >= 500 || document.documentElement.scrollTop >= 500)
    {
        scrollTopButton.style.display = 'flex'
    }
    else{
        scrollTopButton.style.display = 'none'
    }
}

window.onscroll = function(){
    checkScroll()
}

const scrollTopButton = document.getElementById('scroll-top');
console.log(scrollTopButton)

function topFuntion() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; //For Chrome
}

scrollTopButton.addEventListener('click', topFuntion)

// ================= SHOW AND CLOSE LOADING PAGE ================= 

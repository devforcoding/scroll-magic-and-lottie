// Initialize ScrollMagic controller
var controller = new ScrollMagic.Controller();

var newscene  = new ScrollMagic.Scene();
console.log(newscene);

// Create a GSAP timeline for the hero text animations
var heroTimeline = gsap.timeline();

// Animate the first line of text moving up faster
heroTimeline
    .to('.line1', { y: -120, duration: 0.6 })
    .to('.line2', { y: -120, duration: 0.9,  }, '-=0.4');

// Animate the cans
var cansTimeline = gsap.timeline();

var can2Timeline = gsap.timeline();


// Animate cans 1 and 3 to scale down and move up
cansTimeline.to('#can1 img, #can3 img', { scale: 0, y: -250, duration: 0.5, ease: 'power1.out' });

can2Timeline.to('#can2 img', {  y: -170,  ease: 'power1.out'  });


// Create ScrollMagic scenes
new ScrollMagic.Scene({
    triggerElement: '.hero',
    triggerHook: 0,
    duration: '50%' // Duration of the scene
})
    .setTween(heroTimeline)
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.hero',
    triggerHook: 0,
    duration: '30%'
})
    .setTween(cansTimeline)
    .addTo(controller);


new ScrollMagic.Scene({
    triggerElement: '.hero',
    triggerHook: 0,
    duration: '90vh'
})
    .setTween(can2Timeline)
    .addTo(controller);


// Pin the second can until it reaches the product section
new ScrollMagic.Scene({
    triggerElement: '.products',
    triggerHook: 1,
    duration: '90%',

})
    .setPin('#can2', { pushFollowers: false})
    .addTo(controller);

// Move and unpin the second can in the product section
new ScrollMagic.Scene({
    triggerElement: '.products',
    triggerHook: 0,
    duration: '20%',
})
    .setTween(gsap.to('#can2 img', {
        x: () => document.querySelector('.main-can').getBoundingClientRect().left - document.querySelector('#can2').getBoundingClientRect().left,
        y: () => document.querySelector('.main-can').getBoundingClientRect().top - document.querySelector('#can2').getBoundingClientRect().top,
        duration: 0.8,
        ease: 'power1.out',
    }))
    .addTo(controller);



// Fade in and move product-content in .products
new ScrollMagic.Scene({
    triggerElement: '.products',
    triggerHook: 0,
    duration: '20%',
})
    .setTween(gsap.to('.product-content', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power1.out'
    }))
    .addTo(controller);


// LOTTIE ANIMATION ICONS

// Icon 1
lottie.loadAnimation({
    container: document.getElementById('icon1'), // Required
    path: 'lottie-json/4c_whycanna.json', // Path to the Lottie animation JSON file
    renderer: 'svg', // Render method
    loop: true, // Loop the animation
    autoplay: true, // Autoplay the animation
});

// Icon 2
lottie.loadAnimation({
    container: document.getElementById('icon2'), // Required
    path: 'lottie-json/4c_whycanna.json', // Path to the Lottie animation JSON file
    renderer: 'svg', // Render method
    loop: true, // Loop the animation
    autoplay: true, // Autoplay the animation
});

// Icon 3
lottie.loadAnimation({
    container: document.getElementById('icon3'), // Required
    path: 'lottie-json/4c_whycanna.json', // Path to the Lottie animation JSON file
    renderer: 'svg', // Render method
    loop: true, // Loop the animation
    autoplay: true, // Autoplay the animation
});

// Icon 4
lottie.loadAnimation({
    container: document.getElementById('icon4'), // Required
    path: 'lottie-json/4c_whycanna.json', // Path to the Lottie animation JSON file
    renderer: 'svg', // Render method
    loop: true, // Loop the animation
    autoplay: true, // Autoplay the animation
});

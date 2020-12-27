function UpdateCurrentYearOnFooter(){
    $("#currYear").html( new Date().getFullYear() )
}

// function showSpinner(){
//     const spinner = document.getElementById("spinner-wrapper");
//     spinner.style.visibility = "visible";
    // googlemaps : AIzaSyAzLhLETDH0Ig_IQXEngajmu4fV8k88cKo
// }

function hideSpinner(){
    const spinner = document.getElementById("spinner-wrapper");
    spinner.style.visibility = "hidden";
}
hideSpinner(); 

window.onload = function(e){
    UpdateCurrentYearOnFooter();
    
}
gsap.registerPlugin(ScrollTrigger);
gsap.from('#bannerCarousel',{scrollTrigger: '#bannerCarousel',opacity: 0, duration: 1, y:-50});
gsap.from('#bannerCarousel .carousel-caption',{ScrollTrigger: '#bannerCarousel .carousel-caption',opacity: 0, duration: 1, y:50, delay:0.5});

gsap.from('#whyus div div', {scrollTrigger: '#whyus div div', opacity: 0, duration: 1, x:-50, stagger: 0.5});

gsap.from('#diagnose .anim', {scrollTrigger: '#diagnose',opacity: 0, duration: 1, y:50, stagger: 0.5});

gsap.from('#services .animRight', {scrollTrigger: '#services .animRight',opacity: 0, duration: 1, x:-50})
gsap.from('#services .animLeft', {scrollTrigger: '#services .animLeft',opacity: 0, duration: 1, x:50})

gsap.from('#whyUs .fadeInUp-stagger',{scrollTrigger: '#whyUs',opacity: 0, duration: 1, y:50, stagger: 0.3})

gsap.from('#contactSection .fadeInRight',{scrollTrigger: '#contactSection',opacity: 0, duration: 1, x:-50, stagger: 0.1})
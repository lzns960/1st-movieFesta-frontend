//마퀴 텍스트 효과
const lineText1 = document.querySelector('.lineText1')
const lineText2 = document.querySelector('.lineText2')


const textArr1 = 'Best Film Festival of the Year Best Film Festival of the Year Best Film Festival of the Year'.split(' ')
const textArr2 = 'Best Film Festival of the Year Best Film Festival of the Year Best Film Festival of the Year'.split(' ')


let count1 = 0
let count2 = 0


initTexts(lineText1 , textArr1)
initTexts(lineText2 , textArr2)


function initTexts(element, textArray) {
    textArray.push(...textArray)
    for (let i = 0; i < textArray.length; i++) {
    element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`
    }
}

function marqueeText(count, element, direction) {
    if (count > element.scrollWidth / 2) {
    element.style.transform = `translate3d(0, 0, 0)`
    count = 0
    }
  element.style.transform = `translate3d(${direction * count}px, 0, 0)`

    return count
}

function animate() {
    count1++;
    count2++;
    

    count1 = marqueeText(count1, lineText1, -1);
    count2 = marqueeText(count2, lineText2, -1);
    
    
    window.requestAnimationFrame(animate)
}

animate()







// PROMOTION >> SWIPER
// SWIPER PROMOTION
const swiperPromotion = new Swiper(".promotion .swiper", {
    direction: "horizontal",
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    // autoplay: {
    //     delay: 1000,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: ".promotion .swiper-pagination",
        clickable: true,
    },
    navigation: {
        prevEl: ".promotion .swiper-button-prev",
        nextEl: ".promotion .swiper-button-next",
    },
})


// AOS ANIMATION
AOS.init({
    offset: 300,
    duration: 1000,
    // delay: 300,
});



//GSAP ANIMATION


// gsap.registerPlugin(scrollTrigger);
// let tl = gsap.timeline();

// slide1.from(".intro", {
//     delay: 0.5,
//     scale: 3,
//     duration: 1.5,
//     opacity: 0,
// }).from("h1", {
//     scale: 3,
//     duration: 1.5,
//     opacity: 0,
// });

// scrollTrigger.create({
//     animation: slide1,
//     trigger: ".intro",
//     start: "top 0%",
//     end: "+=1000",
//     scrub: 2,
//     markers: true,
//     pin: true,
// });
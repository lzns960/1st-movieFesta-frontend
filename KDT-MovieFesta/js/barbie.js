
/* 마퀴 텍스트 효과 */
const lineText1 = document.querySelector('.lineText1')
const lineText2 = document.querySelector('.lineText2')
const lineText3 = document.querySelector('.lineText3')
const lineText4 = document.querySelector('.lineText4')
const lineText5 = document.querySelector('.lineText5')

const textArr1 = '300 000 BARBIE IS STEPPING INTO THE DIGITAL ART WORLD DOLLED UP IN BALMAIN BARBIE IS STEPPING INTO THE DIGITAL ART WORLD DOLLED UP IN BALMAIN'.split(' ')
const textArr2 = 'BARBIE IS THE MOST POPULAR FASHION DOLL EVER PRODUCED BARBIE IS THE MOST POPULAR FASHION DOLL EVER PRODUCED'.split(' ')
const textArr3 = '300 000 BARBIE IS STEPPING INTO THE DIGITAL ART WORLD DOLLED UP IN BALMAIN BARBIE IS STEPPING INTO THE DIGITAL ART WORLD DOLLED UP IN BALMAIN'.split(' ')
const textArr4 = 'BARBIE IS THE MOST POPULAR FASHION DOLL EVER PRODUCED BARBIE IS THE MOST POPULAR FASHION DOLL EVER PRODUCED'.split(' ')
const textArr5 = '300 000 BARBIE IS STEPPING INTO THE DIGITAL ART WORLD DOLLED UP IN BALMAIN BARBIE IS STEPPING INTO THE DIGITAL ART WORLD DOLLED UP IN BALMAIN'.split(' ')

function initTexts(element, textArray) {
    textArray.push(...textArray) //배열추가
    for (let i = 0; i < textArray.length; i++) {
    element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`
    }
}

initTexts(lineText1, textArr1)
initTexts(lineText2, textArr2)
initTexts(lineText3, textArr3)
initTexts(lineText4, textArr4)
initTexts(lineText5, textArr5)


let count1 = 0
let count2 = 0
let count3 = 0
let count4 = 0
let count5 = 0

function marqueeText(count, element, direction) {
    if (count > element.scrollWidth / 2) {
    element.style.transform = `translate3d(0,0,0)`
    count = 0
    }
  element.style.transform = `translate3d(${direction * count}px,0,0)`

    return count
}

function animate() {
    count1++
    count2++
    count3++
    count4++
    count5++

    count1 = marqueeText(count1, lineText1, -1)
    count2 = marqueeText(count2, lineText2, -1) //마이너스를 넣으면 안끊기지만 내가 원하는건 반대로 가는거 
    count3 = marqueeText(count3, lineText3, -1)
    count4 = marqueeText(count4, lineText4, -1)
    count5 = marqueeText(count5, lineText5, -1)
    
    window.requestAnimationFrame(animate)
}

animate()

/* AOS */
AOS.init({
  offset: 300,
  duration: 1000,
  delay: 300,
});

/* 드라이기 스크롤 애니메이션 GSAP */
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline ({
    scrollTrigger: {
        trigger: ".dryer", //시작점
        start: "top top", 
        marker: true,
        end: "+=2500px",
        scrub: true,
        pin: true, //꼭 있어야 화면이 고정된 채로 스크롤한 것이 보인다. 
    }
});

tl.to (".barbieDryer", { 
  xPercent: 20, 
  yPercent: 20,
  scale: 1.1,
}, "<").to (".dollar0", {
  xPercent: 50,
  rotation: 40,
  scale:0.9,
}, "<").to (".dollar1", {
  xPercent: 55, 
  yPercent: 40,
  rotation: -40,
  scale:1.1,
}, "<").to (".dollar2", {
  xPercent: 60, 
  yPercent: 40,
  rotation: -40,
  scale:1.1,
}, "<").to (".dollar3", {
  xPercent: 60, 
  yPercent: 40,
  rotation: -90,
  scale:1.2,
}, "<") .to (".dollar4", {
  xPercent: 90, 
  yPercent: 80,
  rotation: 20,
  scale:1.4,
}, "<") .to (".dollar5", {
  xPercent: 30, 
  yPercent: 40,
  rotation: 20,
  scale:1.1,
}, "<") .to (".dollar6", {
  xPercent: 60, 
  yPercent: 60,
  rotation: 60,
  scale:1.1,
}, "<") .to (".dollar7", {
  xPercent: 60, 
  yPercent: 40,
  rotation: -30,
  scale:1.1,
}, "<") .to (".dollar8", {
  xPercent: 80, 
  yPercent: 40,
  rotation: 180,
  scale:1.1,
}, "<") .to (".dollar9", {
  xPercent: 30, 
  yPercent: 40,
  rotation: 40,
  scale:1.25,
}, "<") .to (".dollar10", {
  xPercent: 60, 
  yPercent: 40,
  rotation: -90,
  scale:0.8,
}, "<") .to (".dollar11", {
  xPercent: 60, 
  yPercent: 40,
  rotation: -20,
  scale:1.6,
}, "<") .to (".dollar12", {
  xPercent: 40, 
  yPercent: 40,
  rotation: 180,
  scale:1.3,
}, "<") .to (".wind0", {
  xPercent: 40, 
  yPercent: 50,
  scale:1.1,
}, "<") .to (".wind1", {
  xPercent: 60, 
  yPercent: 80,
  scale:1.1,
}, "<") .to (".wind2", {
  xPercent: 40,
  yPercent: 40,
  scale:1.3,
}, "<") .to (".wind3", {
  xPercent: 200, 
  yPercent: 80,
  scale:1.1,
}, "<") .to (".wind4", {
  xPercent: 40, 
  yPercent: 40,
  rotation: -10,
  scale:1.3,
}, "<")



const tl2 = gsap.timeline ({
  scrollTrigger: {
      trigger: ".year2000", //시작점
      start: "top top", 
      marker: true,
      end: "+=500px",
      scrub: true,
      pin: true, //꼭 있어야 화면이 고정된 채로 스크롤한 것이 보인다. 
      duration: 3, 
  }
});

tl2.to (".year2000", { 
  yPercent: 100,
})
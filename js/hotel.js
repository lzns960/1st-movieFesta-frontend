//마퀴 텍스트 효과
const lineText1 = document.querySelector('.lineText1')
const lineText2 = document.querySelector('.lineText2')

const textArr1 = 'The Grand Budapest Hotel is a 2014 comedy-drama film written and directed by Wes'.split(' ')
const textArr2 = 'The Grand Budapest Hotel is a 2014 comedy-drama film written and directed by Wes'.split(' ')

function initTexts(element, textArray) {
    textArray.push(...textArray) //배열추가
    for (let i = 0; i < textArray.length; i++) {
    element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`
    }
}

initTexts(lineText1, textArr1)
initTexts(lineText2, textArr2)

let count1 = 0
let count2 = 0

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

    count1 = marqueeText(count1, lineText1, -1)
    count2 = marqueeText(count2, lineText2, -1) //마이너스를 넣으면 안끊기지만 내가 원하는건 반대로 가는거 
    
    window.requestAnimationFrame(animate)
}

animate()



/* hotelDoor 
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline ({
    scrollTrigger: {
        trigger: ".hotelStaff", //시작점
        start: "top top", 
        end: "+=1000px",
        scrub: true,
        pin: true, //꼭 있어야 화면이 고정된 채로 스크롤한 것이 보인다. 
    }
});

tl.to (".hotelDoor", { scale: 2.3})
*/
AOS.init({
    offset: 300,
    duration: 1000,
});


/* main text */
var demo = (function (window) {
    
    'use strict';
        
    var SELECTORS = {
            textRows: '.row'
        },
        
        CLASSES = {
            drawingWord: 'drawing'
        },
        
        textRows = document.querySelectorAll(SELECTORS.textRows);
    
        
    
    function applyDrawEffect (rowSVG) {        
      rowSVG.classList.add(CLASSES.drawingWord);            
    }
        
    
    function drawWords () {        
        [].forEach.call(textRows, applyDrawEffect);        
    }
    
    
    function init () {
        drawWords();    
    }
    
    
    return {
        init: init
    };
    
}(window));




window.addEventListener('DOMContentLoaded', demo.init, false);
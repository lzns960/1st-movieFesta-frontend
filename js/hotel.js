//마퀴 텍스트 효과
const lineText1 = document.querySelector('.lineText1')
const lineText2 = document.querySelector('.lineText2')

const textArr1 = '300 000 BARBIE IS STEPPING INTO THE DIGITAL ART WORLD DOLLED UP IN BALMAIN BARBIE IS STEPPING INTO THE DIGITAL ART WORLD DOLLED UP IN BALMAIN'.split(' ')
const textArr2 = 'BARBIE IS THE MOST POPULAR FASHION DOLL EVER PRODUCED BARBIE IS THE MOST POPULAR FASHION DOLL EVER PRODUCED'.split(' ')

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



//hotelDoor 
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline ({
    scrollTrigger: {
        trigger: ".hotelStaff", //시작점
        start: "bottom bottom", 
        marker: true,
        end: "+=700px",
        scrub: true,
        pin: true, //꼭 있어야 화면이 고정된 채로 스크롤한 것이 보인다. 
    }
});

tl.to (".hotelDoor", { yPercent: 100, scale:2.3}) // x축 상대크기 자기 크기만큼 사라져있는 것
/*

AOS.init({
    offset: 300,
    duration: 1000,
});
*/
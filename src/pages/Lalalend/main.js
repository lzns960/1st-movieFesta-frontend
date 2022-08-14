//마퀴 텍스트 효과
const lineText1 = document.querySelector('.lineText1')
const lineText2 = document.querySelector('.lineText2')

const textArr1 = 'Summer Sunday nights Wed sink into our seats Right as they dimmed out all the lights A Technicolor world made out of music and machine It called me to be on that screen And live inside each scene'.split(' ')
const textArr2 = 'Summer Sunday nights Wed sink into our seats Right as they dimmed out all the lights A Technicolor world made out of music and machine It called me to be on that screen And live inside each scene'.split(' ')

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




// const main = document.querySelector(".inner"); 
// const btns = main.querySelectorAll(".nav>li"); 
// const btnsLen = btns.length;

// let before = -1;

// for (let i = 0; i < btnsLen; i++) {
//     btns[i].addEventListener("click", (e) => {
//         if (before === -1 && i !== 0) { 
//             before = i;
//             btns[0].classList.remove("on");
//             btns[i].classList.add("on"); 
//         } else if (before !== i) {
//             btns[before].classList.remove("on");
//             btns[i].classList.add("on");
//             before = i;
//         } 
//     })
// }

AOS.init({
    offset: 300,
    duration: 1000,
    delay: 150,
});
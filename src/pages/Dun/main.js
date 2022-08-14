//마퀴 텍스트 효과
const lineText1 = document.querySelector('.lineText1')
const lineText2 = document.querySelector('.lineText2')

const textArr1 = 'Un viaggio in fondo ai tuoi occhiDai d illusi smammaiUn viaggio in fondo ai tuoi occhi Solcherò dune mosse'.split(' ')
const textArr2 = 'Un viaggio in fondo ai tuoi occhiDai d illusi smammaiUn viaggio in fondo ai tuoi occhi Solcherò dune mosse'.split(' ')

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





AOS.init({
    offset: 300,
    duration: 1000,
    delay: 450,
});
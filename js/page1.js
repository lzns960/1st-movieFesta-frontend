//마퀴 텍스트 효과
const lineText1 = document.querySelector('.lineText')

const textArr1 = '300 000 BARBIE IS STEPPING INTO THE DIGITAL ART WORLD DOLLED UP IN BALMAIN BARBIE IS STEPPING INTO THE DIGITAL ART WORLD DOLLED UP IN BALMAIN'.split(' ')

let count1 = 0

initTexts(lineText1 , textArr1)

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
    count1++

    count1 = marqueeText(count1, lineText1, -1)
    
    window.requestAnimationFrame(animate)
}

function scrollHandler() {
    count1 += 15
}

window.addEventListener('scroll', scrollHandler)
animate()

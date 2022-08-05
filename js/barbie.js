//마퀴 텍스트 효과
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

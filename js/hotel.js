/* 스크롤 애니메이션 */
(() => {
    let yOffset = 0; //window.pageYOffset 대신 쓸 변수 
    let prevScrollheight = 0; //현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 아티클 높이 값의 합
    let currentScene = 0; //현재 활성화된 씬 (scrollArticle)
    const sceneInfo = [
        {
            //0
            type: 'sticky',
            heightNum: 5, //브라우저 높이의 5배로 scrollHeight를 세팅
            scrollHeight:0,
            objs: {
                container: document.querySelector('.scrollArticle0')
            }
        },

        {
            //1
            type: 'normal',
            heightNum: 5, //브라우저 높이의 5배로 scrollHeight를 세팅
            scrollHeight:0,
            objs: {
                container: document.querySelector('.scrollArticle1')
            }
        },
    ];

    function setLayout(){
        //각 스크롤 아티클의 높이 세팅
        for (let i = 0; i < sceneInfo.length; i++) {
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
        }

        yOffset = window.pageYOffset;
        let totalScrollHeight = 0;
        for (let i = 0; i < sceneInfo.length; i++){
            totalScrollHeight += sceneInfo[i].scrollHeight;

            if (totalScrollHeight >= YOffset){
                currentScene = i;
                break;
            }
            document.body.setAttribute('id', `showScene${currentScene}`)
        }
    }

    function scrollLoop(){
        prevScrollheight = 0; 
        for (let i = 0; i < currentScene; i++) {
            prevScrollheight += sceneInfo[i].scrollHeight;
        }

        if (yOffset > prevScrollheight +sceneInfo[currentScene].scrollHeight) {
            currentScene++;
            document.body.setAttribute('id', `showScene${currentScene}`);
        }
        if (yOffset < prevScrollheight) {
            if (currentScene === 0 ) return; //브라우저 바운스 효과로 인해 마이너스가 되는 것을 방지
            currentScene--;
            document.body.setAttribute('id', `showScene${currentScene}`);
        }
    }

    window.addEventListener('resize', setLayout);
    window.addEventListener('scroll', ()=> {
        yOffset = window.pageYOffset;
        scrollLoop();
    });

    window.addEventListener('load', setLayout);
    window.addEventListener('resize', setLayout);
}) ();

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


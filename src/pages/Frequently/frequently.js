//마퀴 텍스트 효과
const lineText1 = document.querySelector(".lineText1");
const lineText2 = document.querySelector(".lineText2");

const textArr1 = "Best Film Festival of the Year Best Film Festival of the Year Best Film Festival of the Year".split(
  " ",
);
const textArr2 = "Best Film Festival of the Year Best Film Festival of the Year Best Film Festival of the Year".split(
  " ",
);

let count1 = 0;
let count2 = 0;

initTexts(lineText1, textArr1);
initTexts(lineText2, textArr2);

function initTexts(element, textArray) {
  textArray.push(...textArray);
  for (let i = 0; i < textArray.length; i++) {
    element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`;
  }
}

function marqueeText(count, element, direction) {
  if (count > element.scrollWidth / 2) {
    element.style.transform = `translate3d(0, 0, 0)`;
    count = 0;
  }
  element.style.transform = `translate3d(${direction * count}px, 0, 0)`;

  return count;
}

function animate() {
  count1++;
  count2++;

  count1 = marqueeText(count1, lineText1, -1);
  count2 = marqueeText(count2, lineText2, -1);

  window.requestAnimationFrame(animate);
}

animate();

//WHERE CONTEMT
const whereBtn = document.querySelector(".where_list");
const whereContent = document.querySelector(".where");
const plusBtn = document.querySelector(".fa-solid");

whereBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (whereContent.classList.contains("off")) {
    whereContent.classList.remove("off");
    whereContent.classList.add("on");
  } else if (whereContent.classList.contains("on")) {
    whereContent.classList.remove("on");
    whereContent.classList.add("off");
  }
});

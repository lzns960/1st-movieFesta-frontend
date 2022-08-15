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

// YOUTUBE
const frame = document.querySelector("section");
const list = frame.querySelectorAll("article");
const len = list.length;

const title = ["NEVER ENOUGH", "The Greatest Show", " The Other Side", " Rewrite The Stars"];
const singer = ["Loren Allred", "The Greatest Showman Ensemble", "Hugh Jackman, Zac Efron", "Zac Efron, Zendaya"];
const bg = ["music1", "music2", "music3", "music4"];
const URL = [
  "https://www.youtube.com/embed/6jZVsr7q-tE",
  "https://www.youtube.com/embed/6vjGkKDJ9zQ",
  "https://www.youtube.com/embed/F-F0k_BzuJ4",
  "https://www.youtube.com/embed/yO28Z5_Eyls",
];

for (let i = 0; i < len; i++) {
  const pic = list[i].querySelector(".pic");
  pic.style.backgroundImage = `url(/public/images/${bg[i]}.jpeg)`;

  const iframeUrl = list[i].querySelector("iframe");
  iframeUrl.setAttribute("src", `${URL[i]}`);

  const titleText = list[i].querySelector(".info_text > strong");
  titleText.innerHTML = `${title[i]}`;

  const singerText = list[i].querySelector(".info_text>span");
  singerText.innerHTML = `${singer[i]}`;
}

//
// let before = -1;

// playBtn.addEventListener("click", function (e) {
//   const playBtn = list[i].querySelector(".info");
//   const playView = list[i].querySelector("iframe");

//   for (let i = 0; i < len; i++) {
//     if (before === -1) {
//       before = e.currentTarget;

//       console.log("여기", e.currentTarget);
//     } else if (e.currentTarget !== before) {
//       e.currentTarget.closest("article").querySelector("iframe").classList.remove("show");
//       e.currentTarget.closest("article").querySelector("iframe").classList.add("show");

//       before = e.currentTarget;
//     }
//   }
// });

//
const playBtn1 = document.querySelector(".ost1btn");
const play1 = document.querySelector("#ost1");
playBtn1.addEventListener("click", function () {
  play1.classList.add("show");
});

const playBtn2 = document.querySelector(".ost2btn");
const play2 = document.querySelector("#ost2");
playBtn2.addEventListener("click", function () {
  play2.classList.add("show");
});

const playBtn3 = document.querySelector(".ost3btn");
const play3 = document.querySelector("#ost3");
playBtn3.addEventListener("click", function () {
  play3.classList.add("show");
});

const playBtn4 = document.querySelector(".ost4btn");
const play4 = document.querySelector("#ost4");
playBtn4.addEventListener("click", function () {
  play4.classList.add("show");
});

// function onYouTubeIframeAPIReady() {
//   var player;
//   player = new YT.Player("player", {
//     videoId: "M7lc1UVf-VE",
//     playerVars: {autoplay: 1, controls: 0},
//     events: {
//       onReady: onPlayerReady,
//       onPlaybackQualityChange: onPlayerPlaybackQualityChange,
//       onStateChange: onPlayerStateChange,
//       onError: onPlayerError,
//     },
//   });
// }

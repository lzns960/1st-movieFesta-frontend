const playBtn = document.querySelector(".ost2btn");
console.log(playBtn);
const ost2 = document.querySelector("#ost2");
console.log(ost2);
playBtn.addEventListener("click", function () {
  ost2.classList.add("show");
  console.log("실행", playBtn);
});

const playBtn1 = document.querySelector(".ost1btn");
const ost1 = document.querySelector("#ost1");
playBtn1.addEventListener("click", function () {
  ost1.classList.add("show");
  console.log("실행", playBtn);
});

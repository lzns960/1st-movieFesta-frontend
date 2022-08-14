// LIKE BUTTON
const likeBtn = document.getElementById("likeBtn");
const number = document.getElementById("likeNum");
const current = parseInt(number.innerText, 10);
var count = 0;
likeBtn.addEventListener("click", e => {
  e.preventDefault();
  if (count == 0) {
    number.innerText = current + 1;
    likeBtn.style.color = "red";
    count += 1;
  } else if (count == 1) {
    var num = current + 1;
    number.innerText = num - 1;
    likeBtn.style.color = "black";

    count -= 1;
  }
});

//POP
const popInstalment = document.querySelector(".instalment");
const btnInstalment = document.getElementById("btn_instalment");

btnInstalment.addEventListener("click", function () {
  if (popInstalment.classList.contains("showPop")) {
    popInstalment.classList.remove("showPop");
  } else {
    popInstalment.classList.add("showPop");
  }
});

//DETAILPAGE
const detailPage = document.querySelector(".detail_page");
const detailBtn = document.querySelector(".content_detail");

detailBtn.addEventListener("click", function (e) {
  e.preventDefault();
  detailPage.classList.remove("off");
  detailBtn.style.borderTop = "5px solid palevioletred ";
  cancelBtn.style.border = "none";
});

//CANCELPAGE
const cancelPage = document.querySelector(".cancel_page");
const cancelBtn = document.querySelector(".content_cancel");

cancelBtn.addEventListener("click", function (e) {
  e.preventDefault();
  detailPage.classList.add("off");
  cancelBtn.style.borderTop = "5px solid palevioletred ";
  detailBtn.style.border = "none";
  cancelPage.classList.add("showCancel");
});

// MODAL
const modal = document.getElementById("modal");

function modalOn() {
  modal.style.display = "flex";
}

function modalOff() {
  modal.style.display = "none";
}

const closeBtn = modal.querySelector(".close-area");
closeBtn.addEventListener("click", e => {
  modalOff();
});

modal.addEventListener("click", e => {
  const evTarget = e.target;
  if (evTarget.classList.contains("modal-overlay")) {
    modalOff();
  }
});

function isModalOn() {
  return modal.style.display === "flex";
}

const btnModal = document.getElementById("btn-modal");
btnModal.addEventListener("click", e => {
  modalOn();
});

window.addEventListener("keyup", e => {
  if (isModalOn() && e.key === "Escape") {
    modalOff();
  }
});

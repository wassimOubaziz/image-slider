const images = document.querySelectorAll("body main header img");
const preBtn = document.querySelector("body main footer .pre");
const nextBtn = document.querySelector("body main footer .next");
const number = document.querySelector("body main footer .number");
let imgCounter = 0;

images.forEach((_, index) => {
  number.innerHTML += ` <button class = ${index == 0 ? "active" : ""}>${
    index + 1
  }</button>`;
});
const numBtns = document.querySelectorAll("body main footer .number button");

preBtn.addEventListener("click", function () {
  if (imgCounter > 0) {
    disableOtherBtn(numBtns[imgCounter]);
    imgCounter--;
    activeOtherBtn(numBtns[imgCounter]);
    activeImage(imgCounter);
    activeBtn(nextBtn);
  }
  if (imgCounter == 0) {
    disableBtn(preBtn);
  }
});
nextBtn.addEventListener("click", function () {
  if (imgCounter < images.length - 1) {
    disableOtherBtn(numBtns[imgCounter]);
    imgCounter++;
    activeOtherBtn(numBtns[imgCounter]);
    activeImage(imgCounter);
    activeBtn(preBtn);
  }
  if (imgCounter == images.length - 1) {
    disableBtn(nextBtn);
  }
});

numBtns.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    if (index !== imgCounter) {
      activeOtherButtons(btn);
    }
    imgCounter = index;
    activeImage(imgCounter);
    if (imgCounter == 0) {
      disableBtn(preBtn);
      activeBtn(nextBtn);
    } else if (imgCounter == images.length - 1) {
      disableBtn(nextBtn);
      activeBtn(preBtn);
    } else {
      activeBtn(preBtn);
      activeBtn(nextBtn);
    }
  });
});

//call function
disableBtn(preBtn);

// functions
function activeOtherButtons(newBtn) {
  activeOtherBtn(newBtn);
  disableOtherBtn(numBtns[imgCounter]);
}

function activeOtherBtn(btn) {
  btn.classList.add("active");
}

function disableOtherBtn(btn) {
  btn.classList.remove("active");
}

function disableBtn(btn) {
  btn.classList.add("disable");
  btn.disabled = true;
}

function activeBtn(btn) {
  btn.classList.remove("disable");
  btn.disabled = false;
}

function activeImage(index) {
  images.forEach((image) => {
    image.classList.remove("active");
  });
  images[index].classList.add("active");
}

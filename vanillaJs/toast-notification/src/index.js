import "./styles.css";

function addToast(data) {
  const toastDiv = document.createElement("div");
  toastDiv.classList.add(`toast__${data.type}`);
  toastDiv.classList.add("toast");
  toastDiv.innerHTML = data.content;
  if (data.position === "true") {
    const toastDivError = document.querySelector(".toast__notifications__error");
    toastDivError.appendChild(toastDiv);
    toastDiv.classList.add(`toast__top`);
    setTimeout(() => {
      toastDivError.removeChild(toastDiv);
    }, 2000);
  } else {
    const mainToastDiv = document.querySelector(".toast__notifications");
    mainToastDiv.appendChild(toastDiv);
    setTimeout(() => {
      mainToastDiv.removeChild(toastDiv);
    }, 2000);
  }
}

function fun(e) {
  const type = e.target.getAttribute("type");
  const content = e.target.getAttribute("content");
  const position = e.target.getAttribute("top");
  addToast({ type, content, position });
}

document.querySelector(".buttons").addEventListener("click", fun);

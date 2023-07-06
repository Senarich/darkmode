const body = document.querySelector("body");
const btn = document.querySelector(".btn");
const icon = document.querySelector(".btn__icon");

load();

//stores the values true if darmode is activated of false if its not set
function storeLocal(value) {
  localStorage.setItem("darkmode", value);
}

//function that indicates if the darkmode property exist. it loads the page as we had left it
function load() {
  const darkmode = localStorage.getItem("darkmode");

  //if the darkmode is never activated
  if (!darkmode) {
    storeLocal(false);
    icon.classList.add("fa-sun");
  } else if (darkmode == "true") {
    //if the darkmode is activated
    body.classList.add("darkmode");
    icon.classList.add("fa-moon");
  } else if (darkmode == "false") {
    //if the darkmode exists but is disabled
    icon.classList.add("fa-sun");
  }
}

function toggleDarkmode() {
  const darkmode = body.classList.toggle("darkmode");
  //storing the darkmode in the local storage
  storeLocal(darkmode);
  icon.classList.add("animated");

  if (darkmode) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
  setTimeout(() => {
    icon.classList.remove("animated");
  }, 500);
}

btn.addEventListener("click", toggleDarkmode);

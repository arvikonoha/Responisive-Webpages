const mainNavigation = document.querySelector("header#main-header nav");
const hamberger = document.querySelector(".hamberger");
const logergs = document.querySelectorAll('a[href="#logreg"]');
const logins = document.querySelectorAll('a[href="#login"]');
const registers = document.querySelectorAll('a[href="#register"]');
const close = document.querySelector('img[src="./images/close.svg"]');
const logpop = document.querySelector("#logreg-pop");
const editForm = document.querySelector(".edit-form");
const regForm = document.querySelector(".register");
const logForm = document.querySelector(".login");
const closeForm = document.querySelector('img[src="./images/close-dark.svg"]');
const moreOptions = document.querySelector('.view-more')
const searchBox = document.querySelector('#search-box')
const mainNavbar = document.querySelector('header#main-header')

window.addEventListener('scroll', (e) => {
  console.log('working')
  if (window.pageYOffset > mainNavbar.offsetTop) {
    mainNavbar.classList.add('bg-light')
    mainNavbar.classList.add('card-shadow')
  } else {
    mainNavbar.classList.remove('bg-light')
    mainNavbar.classList.remove('card-shadow')
  }
})

if (moreOptions)
  moreOptions.addEventListener('click', (e) => {
    searchBox.classList.toggle('hide')
  })

hamberger.addEventListener("click", e => {
  mainNavigation.classList.toggle("hide");
});

logergs.forEach(logreg => {
  logreg.addEventListener("click", e => {
    e.preventDefault();
    logpop.classList.toggle("gone");
  });
});

close.addEventListener("click", e => {
  logpop.classList.toggle("gone");
});

if (closeForm) {
  closeForm.addEventListener("click", e => {
    editForm.classList.toggle("gone");
  });
}

registers.forEach(register => {
  register.addEventListener("click", e => {
    logForm.classList.add("gone");
    regForm.classList.remove("gone");
  });
});

logins.forEach(login => {
  login.addEventListener("click", e => {
    logpop.classList.remove("gone");
    regForm.classList.add("gone");
    logForm.classList.remove("gone");
  });
});
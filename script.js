// MITGLIEDER LOGIN
const benutzer = "Mitglied";
const passwort = "lecker";

const submit = document.querySelector("#login fieldset button");
const logout = document.querySelector("#logout");

submit.addEventListener("click", function (event) {
  const user = document.querySelector("#user").value;
  const pw = document.querySelector("#pw").value;

  if (benutzer === user) {
    if (passwort === pw) {
      localStorage.setItem("loginStatus", "login");
      document.body.classList.remove("logout");
      document.body.classList.add("login");
      document.getElementById("loginPopup").style.display = "none";
    } else {
      document.querySelector("p.fehler").innerHTML = "Passwort Falsch";
      event.preventDefault();
    }
  } else {
    document.querySelector("p.fehler").innerHTML = "Benutzername Falsch";
    event.preventDefault();
  }
});

logout.addEventListener("click", function () {
  localStorage.removeItem("loginStatus");
  document.body.classList.remove("login");
  document.body.classList.add("logout");
  window.location.reload();
});

const getStatus = function () {
  const status = localStorage.getItem("loginStatus");
  document.body.classList.remove("login", "logout"); 
  if (status === "login") {
    document.body.classList.add("login");
    const popup = document.getElementById("loginPopup");
    if (popup) popup.style.display = "none";
  } else {
    document.body.classList.add("logout");
  }
};

document.addEventListener("DOMContentLoaded", getStatus);



//hide main-menu when clicked
  const menu = document.getElementById('main-menu');

  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      menu.hidePopover();
    }
  });


//return button
const button = document.getElementById('returnTopBtn');
const hero = document.getElementById('hero');

window.addEventListener('scroll', () => {
  const heroHeight = hero.offsetHeight;
  const scrollY = window.scrollY;

  if (scrollY > heroHeight) {
    button.classList.add('show'); 
  } else {
    button.classList.remove('show'); 
  }
});


// Smooth scroll to top
button.addEventListener('click', () => {
  const topElement = document.getElementById('top') || document.body;
  topElement.scrollIntoView({ behavior: 'smooth' });
});



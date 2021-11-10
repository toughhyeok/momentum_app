const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form input:last-child");
const greetingH1 = document.querySelector("#greeting h1");
const greetingForm = document.querySelector("#greeting");
const logoutBtn = document.querySelector("#greeting input");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const TOGLE_CLASSNAME = "loginBtn-toggle";

function paintGreetings(username) {
    greetingH1.innerText = `Hello ${username}`;
    greetingForm.classList.remove(HIDDEN_CLASSNAME);
    greetingForm.addEventListener("click", onLogoutClick);
    logoutBtn.addEventListener("mouseenter", onMouseEnter);
    logoutBtn.addEventListener("mouseleave", onMouseELeave);
}

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function onMouseEnter(event){
    loginBtn.classList.add(TOGLE_CLASSNAME);
    logoutBtn.classList.add(TOGLE_CLASSNAME);
}

function onMouseELeave(event){
    loginBtn.classList.remove(TOGLE_CLASSNAME);
    logoutBtn.classList.remove(TOGLE_CLASSNAME);
}

function onLogoutClick(event){
    // event.preventDefault();
    greetingForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERNAME_KEY);
    loginInput.value = "";
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    loginBtn.addEventListener("mouseenter", onMouseEnter);
    loginBtn.addEventListener("mouseleave", onMouseELeave);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    loginBtn.addEventListener("mouseenter", onMouseEnter);
    loginBtn.addEventListener("mouseleave", onMouseELeave);
} else {
    // show the greetings
    paintGreetings(savedUsername);
    greetingForm.addEventListener("click", onLogoutClick);
    logoutBtn.addEventListener("mouseenter", onMouseEnter);
    logoutBtn.addEventListener("mouseleave", onMouseELeave);
}
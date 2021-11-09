const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form input:last-child");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const TOGLE_CLASSNAME = "loginBtn-toggle";

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
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
}

function onMouseELeave(event){
    loginBtn.classList.remove(TOGLE_CLASSNAME);
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
}
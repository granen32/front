const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";
function onLoginSubmit(event){
  event.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreeings(userName);
}

function paintGreeings(userName){
  greeting.innerText = `Hello ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}


loginForm.addEventListener("submit", onLoginSubmit);


const savedUserName = localStorage.getItem(USERNAME_KEY);


if(savedUserName === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}else{
  paintGreeings(savedUserName);
}
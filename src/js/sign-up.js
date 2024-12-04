const { User } = require('./classes.js');

document.addEventListener("DOMContentLoaded", () => {
  function signUp() {
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const user1 = new User(firstName, lastName, email, password);

    console.log(user1);
  }

  const btn = document.getElementById("signup-button");
  console.log(btn);
  btn.addEventListener("click", signUp);
});
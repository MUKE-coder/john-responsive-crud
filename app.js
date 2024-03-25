const closeBtn = document.querySelector("#closeBtn");
const mobileMenu = document.querySelector(".mobile-menu");
const menuBtn = document.querySelector("#menuBtn");
const signUpBtns = document.querySelectorAll(".signup");
const signUpCloseBtn = document.querySelector("#signUpCloseBtn");
const signupModal = document.querySelector(".signup-modal");
const signupForm = document.querySelector("form");

const users = [
  {
    id: 1711357081393,
    name: "Hashim Stephenson",
    email: "loquqiliw@mailinator.com",
    password: "Totam culpa blandit",
  },
  {
    id: 1711357107178,
    name: "MUKE JOHNBAPTIST",
    email: "gmukejohnbaptist@gmail.com",
    password: "password",
  },
];

// FORM INPUTS

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
console.log(signUpBtns);

closeBtn.addEventListener("click", function () {
  console.log("Button Clicked");
  mobileMenu.classList.remove("mobile-menu-active");
});
menuBtn.addEventListener("click", function () {
  console.log("Button Clicked");
  mobileMenu.classList.add("mobile-menu-active");
});

signUpBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    console.log("Button Clicked");
    signupModal.classList.add("signup-modal-active");
  });
});
signUpCloseBtn.addEventListener("click", function () {
  console.log("Button Clicked");
  signupModal.classList.remove("signup-modal-active");
});

const car = {
  name: "BMW",
  price: 100000,
  image:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  color: "red",
  brand: "Toyota",
};

//Add eventListener to the form
signupForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form Submitted");
  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  //Creating a User Object
  const newUser = {
    id: new Date().getTime(),
    name: name,
    email: email,
    password: password,
  };
  console.log(newUser);
  // Empty the form
  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";

  //USers
  users.push(newUser);
  console.log(users);
});

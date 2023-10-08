const passInput = document.getElementById("pass-input");
const checKpass = document.getElementById("checkPass");
const emailInput = document.querySelector("#email");
const dotEye = document.getElementsByClassName("dot");
const form = document.getElementsByTagName("form")[0];
const hands = document.getElementsByClassName("hand")[0];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = emailInput.value;
  const password = passInput.value;

  console.log(email, password);
});

emailInput.addEventListener("input", function () {
  for (let i = 0; i < dotEye.length; i++) {
    const emailValue = emailInput.value;
    if (emailValue.length > 5) {
      dotEye[i].classList.add("rotate2");
    }
    if (emailValue.length > 10) {
      dotEye[i].classList.remove("rotate2");
      dotEye[i].classList.add("rotate");
    }
    if (emailInput.value === "") {
      dotEye[i].classList.remove("rotate2");
      dotEye[i].classList.remove("rotate");
    }
  }
});

passInput.addEventListener("focus", function (event) {
  if (event) {
    hands.classList.add("handAfter");
  }
  checKpass.addEventListener("change", function () {
    if (this.checked) {
      hands.classList.add("handAfter2");
      passInput.type = "text";
    } else {
      hands.classList.remove("handAfter2");

      hands.classList.add("handAfter");
      passInput.type = "password";
    }
  });
});

//caluculator funtionality
const input = document.getElementById("display");
const buttons = document.querySelectorAll(".button-container button");
const error_popup = document.querySelector(".error-container");
const operator = ["+", "-", "*", "/", "="];
const invalidOperator = ["+*", "-*", "*/", "/*", "*%", "/%", "-%", "+%"];
let string = "";
const arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    string = input.value;
    if (e.target.innerHTML == "=") {
      if (
        string == "" ||
        /[a-zA-Z]/.test(string) ||
        /[!@#$^&,?":{}|<>\\]/.test(string)
      ) {
        errorDialog();
        string = "";
      } else if (invalidOperator.some((i) => string.includes(i))) {
        errorDialog();
        string = "";
      } else if (
        string[0] == "*" ||
        string[0] == "/" ||
        string[0] == "%" ||
        operator.includes(string[string.length - 1])
      ) {
        errorDialog();
        string = "";
      } else {
        string = eval(string.replace("%", "/100"));
      }
    } else if (e.target.innerHTML == "AC") {
      string = "";
    } else if (e.target.innerHTML == "DEL") {
      string = string.toString().slice(0, -1);
    } else {
      string += e.target.innerHTML;
    }
    input.value = string;
    console.log(string);
  });
});


//error dialog
function errorDialog() {
  error_popup.showModal();
  setTimeout(()=>error_popup.close(), '900')
}

//contact pop-up fuctionality
const mail_button = document.getElementById("e-mail");
const popup = document.querySelector(".popup-container");
const close_button = document.querySelector(".popup-close-button");
const submit_button = document.querySelector(".popup-submit-button");
mail_button.addEventListener("click", () => {
  popup.showModal();
});
close_button.addEventListener("click", () => {
  popup.close();
});

popup.addEventListener("click", (e) => {
  const dimension = popup.getBoundingClientRect();
  if (
    e.clientX < dimension.left ||
    e.clientX > dimension.right ||
    e.clientY < dimension.top ||
    e.clientY > dimension.bottom
  ) {
    popup.close();
  }
});

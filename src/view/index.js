import { validate } from "schema-utils";
import { validateLoginInfo } from "../controller";
import { chatPage } from "../pages/chat-page/index";
import { loginPage } from "../pages/login-page/index";
import { registerPage } from "../pages/register-page/index";
import { resetpasswordPage } from "../pages/reset-password-page/index";
import { validateresetPage } from "../controller/index";
import { validateRegisterInfo } from "../controller/index";
export let setActiveScreen = (screenName) => {
  let app = document.getElementById("app");
  switch (screenName) {
    case "loginPage":
      if (app) {
        app.innerHTML = loginPage;
      }
      const loginForm = document.getElementById("login-form");
      if (loginForm) {
        console.log(loginForm);
        loginForm.addEventListener("submit", (event) => {
          event.preventDefault();

          const email = loginForm.email.value;
          const password = loginForm.password.value;
          console.log(email);
          console.log(password);
          validateLoginInfo(email, password);
        });
        const registerlog = document.getElementById("css")
        registerlog.addEventListener("click", function (){
          setActiveScreen("registerPage");
        })
      }
      const registerLink = document.getElementById
      break;
    case "registerPage":
      if (app) {
        app.innerHTML = registerPage;
      }
      const registerForm = document.getElementById("register-form");
      if (registerForm) {
        // console.log(registerForm);
        registerForm.addEventListener("submit", (event) => {
          event.preventDefault();
          const firstName = registerForm.firstName.value;
          const lastName = registerForm.lastName.value;
          const email = registerForm.email.value;
          const password = registerForm.password.value;
          const confirmPassWord = registerForm.confirmPassword.value;

          console.log(firstName);
          console.log(lastName);
          console.log(email);
          console.log(password);
          console.log(confirmPassWord);

          validateRegisterInfo(
            firstName,
            lastName,
            email,
            password,
            confirmPassWord
          );
        });
      }
      const registerButton = document.getElementById("but")
      registerButton.addEventListener("click", function(){
        setActiveScreen("loginPage");
        
      })
      break;
    case "chatPage":
      if (app) {
        app.innerHTML = chatPage;
      }
      break;
    case "resetpasswordPage":
      if (app) {
        app.innerHTML = resetpasswordPage;
      }
      const resetForm = document.getElementById("reset-form");
      if (resetForm) {
        console.log(resetForm);
        resetForm.addEventListener("submit", (event) => {
          event.preventDefault();

          const email = resetForm.email.value;
          console.log(email);
          validateresetPage(email);
        });
      }
      break;

    default:
      break;
  }
};
export let renderErrorMessage = (id, text) => {
  const errorMessage = document.getElementById(id);
  if (errorMessage) {
    errorMessage.innerText = text;
    console.log("hello word");
  }
};



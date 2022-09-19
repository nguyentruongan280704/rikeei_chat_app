import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import {signInWithEmailAndPassword } from "firebase/auth";
import { renderErrorMessage } from "../view/index";
export let createNewUser = (firsName, lastName, email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential);
        // hiển thị ra là đăng kí thành công
    })
    .catch((err) => {
    const errorCode = err.code;
    const errorMessage = err.message;
    renderErrorMessage("server-error-messege", errorMessage);
    });
};

export let signInUser = (email,password) => {
    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });
}

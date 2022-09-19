 import "./style.css";
 import img from './Capture.png'
 export let registerPage = /*html*/`<div class="contait">
<div class="dili">
    <img src="./Capture.PNG" alt="">
<img src="${img}" alt="">
</div>
<p class="susi">Create new account</p>
<div class ="error" id="server-error-message"></div>
<div class="contait1">
<form action="" id="register-form">
    <p class="sisi a">First Name</p>
    <input type="text" name="firstName"placeholder="Please enter your first name">
    <div id="firstName-error-message"></div>
    <p class="sisi b">Last Name</p>
    <input type="text" name="lastName" placeholder="Please enter your Last name">
    <div id="lastName-error-message"></div>
    <p class="sisi c">Email address</p>
    <input type="text" name="email"placeholder="Please enter your Email">
    <div id="email-error-message"></div>
    <p class="sisi d">Password</p>
    <input type="text" name="password"placeholder="Please enter your Password">
    <div id="password-error-message"></div>
    <p class="sisi e">Confirm Password</p>
    <input type="text" name="confirmPassword"placeholder="Please enter your Confirm Password">
    <div id="confirmPassword-error-message"></div>
    <button class="butt">Register</button>
    </form>
    <button id="but">Already have an account? Login here  </button>
</div>
</div>`;
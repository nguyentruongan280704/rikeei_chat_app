import "./style.css"
import img from './Capture.png'
export let loginPage = /*html*/
`<div class="logo">
<img src="${img}" alt="">
</div>
<div class="contair">
<p class="tinder1">Sign in to Rikkei Chat</p>
<div class="contair1">
    <form id="login-form" action=""><div class="polo polo1">
    <label class="tinder2">Email address</label>
    <input type="email" name="email" placeholder="Please enter your emil">
    <div id="email-error-message"></div>
</div>
<div class="polo polo2">
    <label class="tinder3">Password</label>
    <input type="password" name="password" placeholder="Please enter your password">
    <div id="password-error-message"></div>
</div>
<div class="polo polo3">
        <button class="boydi">Login</button>
    </div></form>
    <button id="css"> Not have an account yet? Sign Up here  </button>
    
</div>
</div>`
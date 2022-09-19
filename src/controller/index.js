// Controller làm nhiệm vụ validate thông tin
          // Tạo hàm validateLoginInfo nhận vào email và password trong controller
          // Export hàm validateLoginInfo
          // Import hàm validateLoginInfo trong view
          // Trong Screen Login, gọi hàm validateLoginInfo() với email và pass lấy
          // từ form

          // Trong controller, logic của hàm validateLoginInfo sẽ là kiểm tra xem
          // có phải email hợp lệ không, có bỏ trống trường nào không

          // Tạo một hàm setMessage ở view và export sang controller để in ra lỗi
          // từ những trường hợp validate đó

          // Làm giống hệt các bước trên với những màn resetpassword và register
          import { renderErrorMessage } from "../view/index";
          import {createNewUser} from "../model/index";
          import {signInUser} from "../model/index";

          export let validateLoginInfo = (email, password) =>{
             const emailRegex = // regex, regular expression
             // email regex
               /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
             if (!email) {
               renderErrorMessage("email-error-message", "Please enter your email");
             } else if (!emailRegex.test(email)) {
               renderErrorMessage("email-error-message", "Invalid email");
             } else {
               renderErrorMessage("email-error-message", "");
             }
           
             if (!password) {
               renderErrorMessage("password-error-message", "Please enter your password");
             } else {
               renderErrorMessage("password-error-message", "");
             }
             if (email && password){
                signInUser()
             }
          }

          export let validateresetPage =(email) =>{
            const EmailRegex =
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (!email) {
              renderErrorMessage("email-error-message", "Please enter your email");
            } else if (!EmailRegex.test(email)) {
              renderErrorMessage("email-error-message", "Invalid email");
            } else {
              renderErrorMessage("email-error-message", "");
            }
          
            }


            export let validateRegisterInfo = (firstName, lastName, email, password, confirmPassword) =>{
              // regex, regular expression
                // email regex
                const emailRegex =
                  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                  
                  if (!firstName) {
                    renderErrorMessage("firstName-error-message", "Please enter your firstName");
                  } else {
                    renderErrorMessage("firstName-error-message", "");
                  }
            
                  if (!lastName) {
                    renderErrorMessage("lastName-error-message", "Please enter your lastName");
                  } else {
                    renderErrorMessage("lastName-error-message", "");
                  }
            
                  if (!email) {
                  renderErrorMessage("email-error-message", "Please enter your email");
                } else if (!emailRegex.test(email)) {
                  renderErrorMessage("email-error-message", "Invalid email");
                } else {
                  renderErrorMessage("email-error-message", "");
                }
              
                if (!password) {
                  renderErrorMessage("password-error-message", "Please enter your password");
                } else {
                  renderErrorMessage("password-error-message", "");
                }
            
                if (!confirmPassword) {
                  renderErrorMessage("confirmPassword-error-message", "Please enter your confirmPassword");
                } else {
                  renderErrorMessage("confirmPassword-error-message", "");
                }
                if(
                  firstName &&
                  lastName &&
                  email &&
                  password &&
                  confirmPassword &&
                  confirmPassword === password
                ){
                  createNewUser(firstName, lastName, email, password);
                }
              };
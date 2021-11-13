function validate(event){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    user_username=["admin"];
    user_password=["admin1$"];
    event.preventDefault();
    


function hasNumber(string1) {
    return /\d/.test(string1);
  } 
function hasSpecialChar(string1){
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return format.test(string1);
}
  


    if(username==user_username && password==user_password){
        window.location.replace("second.html");
        
    }
    else if(username!=user_username && password==user_password){

        
        if(username.length<5){
            document.getElementById("username_error").innerHTML="Username lenght should be more than 5!";
        }
        
        else{
            document.getElementById("username_error").innerHTML = "Wrong username!";
        }

    }
    else if(username==user_username && password!=user_password){
        
        if(hasNumber(password)==0){
            document.getElementById("password_error").innerHTML = "Password should contain at least one number!";
          }
          else if(hasSpecialChar(password)==0){
            document.getElementById("password_error").innerHTML = "Password should contain at least one speacial character!";

          }
        else{
        

        if(password.length<5){
            document.getElementById("password_error").innerHTML="Password lenght should be more than 5!";
        }

        
        else{
            
            document.getElementById("password_error").innerHTML = "Wrong password!";
        }
    }

    }
    else if(username!=user_username && password!=user_password){
        if(hasNumber(password)==0){
            document.getElementById("username_error").innerHTML = "Wrong username!";
            document.getElementById("password_error").innerHTML = "Password should contain at least one number!";
          }
          else if(hasSpecialChar(password)==0){
            document.getElementById("username_error").innerHTML = "Wrong username!";
            document.getElementById("password_error").innerHTML = "Password should contain at least one speacial character!";

          }
        else{
        document.getElementById("username_error").innerHTML = "Wrong username!";
        document.getElementById("password_error").innerHTML = "Wrong password!";
        }
    }
    
    }
    


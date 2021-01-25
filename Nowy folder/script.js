function validate(){
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var checkbox = document.getElementById("checkbox").checked;
    
    var confirmPassword = document.getElementById("confirmPassword").value;

    
    var text;
    if(first_name.length < 5){
        alert("Wprowadź poprawnie imię")
        return false;
    }

    if(last_name.length < 5){
        alert("Wprowadź poprawnie nazwisko")
        return false;
    }

    
    if(email.indexOf("@") == -1 || email.length < 6){
        alert("Wprowadź poprawnie email")
        return false;
    }
    
    if(password == ""){
        alert("Wprowadź poprawnie hasło")
        return false;
    }


    else if(password != confirmPassword){
        alert("Hasła nie są takie same")
        return false;
    }

    if(checkbox==false){
        alert("Potwierdź checkbox")
        return false;
        }


    

    alert("Prawidłowa rejestracja!");
        return true;
  }
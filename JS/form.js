function printError(Id,Msg){
    document.getElementById(Id).innerHTML = Msg;
}

function validateForm(){
    var name = document.Forms.name.value;
    var email = document.Forms.email.value;
    var mobile = document.Forms.mobile.value;
    var country = document.Forms.country.value;
    var gender = document.Forms.gender.value;

    var nameErr = emailErr = mobileErr = countryErr = genderErr = true;

    if(name == ""){
        printError("nameErr","please enter your name");
        var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    }else{
        var regex =/^[a-zA-Z\s]+$/;
        if(regex.test(name) === false){
            printError("nameErr","Please eneter your name");
            var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }else{
            printError("nameErr", "");
            nameSErr = false;
            var elem = document.getElementById("name")
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

      }
    }
    
    if(email == ""){
        printError("emailErr","please enter email address");
        var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    }else{
        var regex =/^\S+@\S+\.\S+$/;
        if(regex.test(emailErr) === false){
            printError("emailErr","please enter email address");
            var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }else{
            printError("emailErr", "");
            namErr = false;
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

      }
    }

    if(mobile == "") {
        printError("mobileErr","please enter mobile number");
        var elem = document.getElementById("mobile");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    }else{
        var regex =/^[1-9}\d[9]S+$/;
        if(regex.test(mobileErr) === false){
            printError("mobileErr","Please eneter a valid mobile");
            var elem = document.getElementById("mobile");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }else{
            printError("mobileErr", "");
            nameErr = false;
            var elem = document.getElementById("mobile")
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

      }
    }

    if(country == "Select"){
        printError("countryErr","please select country");
        var elem = document.getElementById("country");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    }else{
        printError("countryErr", "");
        countryErr = false;
        var elem = document.getElementById("country");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");

      }

    if(gender == ""){
        printError("genderErr","please select your gender");
        var elem = document.getElementById("gender");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    }else{
        printError("genderErr", "");
        genderErr = false;
        var elem = document.getElementById("gender");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");

      }
      if((namErr || emailErr || mobileErr || countryErr || genderErr)== true){
          return false;
      }
    
};



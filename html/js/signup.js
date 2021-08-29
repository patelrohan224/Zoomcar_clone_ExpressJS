var slides1 = document.querySelector('.promo1')
var slides2 = document.querySelector('.promo2')
var slides3 = document.querySelector('.promo3')

var slides_arr = [slides1, slides2, slides3]



var time = 2000;
var j = 0;

function changeImg() {
    slides3.style.display = "none"
    slides1.style.display = "none"
    slides2.style.display = "none"
    slides_arr[j].style.display = "block"
    if (j < slides_arr.length - 1) {
        j++;
    } else {
        j = 0;
    }
    setTimeout("changeImg()", time);
}


document.getElementById('signup').addEventListener('click', function() {
    document.querySelector('.cont').style.display = "flex"
})

document.querySelector(".close").addEventListener("click", function() {
    document.querySelector('.cont').style.display = "none"
})


var slides4 = document.querySelector('.promo4')
var slides5 = document.querySelector('.promo5')
var slides6 = document.querySelector('.promo6')

var slides_arr1 = [slides4, slides5, slides6]
var time = 2000;
var i = 0;

function changeImg1() {
    slides6.style.display = "none"
    slides4.style.display = "none"
    slides5.style.display = "none"
    slides_arr1[i].style.display = "block"
    if (i < slides_arr1.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImg1()", time);

}
window.onload = function() {
    changeImg()
    changeImg1()
}



function validateEmail() {

    var phone = document.getElementById('input_format').value
    var mailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;
    if (phone == "") {
        document.getElementById("lbltext").innerHTML = "Please enter a valid email address or mobile number."
        document.getElementById("lbltext").style.visibility = "visible";
        document.getElementById("lbltext").style.color = "red";
        // return false;
    } else if (!mailFormat.test(phone)) {
        document.getElementById("lbltext").innerHTML = "Please enter a valid email address or mobile number."
        document.getElementById("lbltext").style.visibility = "visible";
        document.getElementById("lbltext").style.color = "red";
        // return false;
    } else {
        document.querySelector('.cont1').style.display = "flex"
        document.querySelector('.cont').style.display = "none"
        document.querySelector('.cont2').style.display = "none"
            // return true; 

    }
    var phone_json = JSON.stringify(phone)
    localStorage.setItem("phone", phone_json)
    var phone1 = localStorage.getItem("phone")
        // console.log('phone1:', phone1)
    phone1 = JSON.parse(phone1)
    console.log(phone1);

    document.getElementById("phone1").value = phone1

    // console.log("jay"); 

}

document.getElementById("next").addEventListener('click', validateEmail)
document.querySelector(".close1").addEventListener("click", function() {
    document.querySelector('.cont1').style.display = "none"
})

function form_details() {
    // e.preventDefault();
    const form = {
        email: document.getElementById("email").value,
        name: document.getElementById("drive").value,
        password: document.getElementById("min8").value,
    }
    var mailFormat1 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;
    if (form.email == "") {
        document.getElementById("lbltext1").innerHTML = "Please enter a valid email address."
        document.getElementById("lbltext1").style.visibility = "visible";
        document.getElementById("lbltext1").style.color = "red";
        // return false;
    } else if (!mailFormat1.test(form.email)) {
        document.getElementById("lbltext1").innerHTML = "Please enter a valid email address."
        document.getElementById("lbltext1").style.visibility = "visible";
        document.getElementById("lbltext1").style.color = "red";
        // return false;
    } else if (form.password.length < 8) {
        document.getElementById("lbltext2").innerHTML = "Please enter a Minimum 8 Character Password."
        document.getElementById("lbltext2").style.visibility = "visible";
        document.getElementById("lbltext2").style.color = "red";
        // return false;   
    } else {
        document.querySelector('.cont2').style.display = "flex"
        document.querySelector('.cont').style.display = "none"
        document.querySelector('.cont1').style.display = "none"

        // true;
    }
    const form_json = JSON.stringify(form)
    localStorage.setItem("form_details", form_json)
    var otp = Math.round(Math.random() * 999999) + 1;
    if (otp > 99999) {

        const otp_json = JSON.stringify(otp);
        localStorage.setItem("otp", otp_json);
        alert(otp)
    }
}
document.getElementById("login_submit_button").addEventListener('click', form_details)

function validateotp() {
    var otp_local = localStorage.getItem("otp");
    var otp_input = document.getElementById("otp-cont").value
        // console.log(otp_input);
    if (otp_input != otp_local) {
        document.getElementById("otplabel").innerHTML = "Invalid"
        document.getElementById("otplabel").style.visibility = "visible";
        document.getElementById("otplabel").style.color = "red";
    } else {
        document.querySelector('.cont2').style.display = "none"
        true
    }
}
document.getElementById("otp").addEventListener('click', validateotp)
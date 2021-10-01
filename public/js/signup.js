

document.querySelector(".close1").addEventListener("click", function() {
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
    // changeImg()
    changeImg1()
}





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
    } 
    
}
document.getElementById("login_submit_button").addEventListener('click', form_details)

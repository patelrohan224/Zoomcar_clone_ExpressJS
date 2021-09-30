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


document.querySelector(".close").addEventListener("click", function() {
    document.querySelector('.cont').style.display = "none"
})





window.onload = function() {
    changeImg()
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



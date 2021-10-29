var msg_arr = ["At the outset, let me thank you for introducing Zoomcar in Bangalore and for giving me an opportunity to use your service. Your customer support was impeccable and vehicle was well-maintained and top-notch.", "I just wanted to let you know that I really appreciate the efforts you are making personally, to ensure that the customer is satisfied... I really hope you carry forward this culture and make a model for other companies.", "You certainly do have a very regular customer here... Must say, Greg went that extra mile... You have a great journey together!", "It was great pleasure use zoom service, As all process being online it was really hassle free experience. good service please keep it going."];
var msg_name = ["- D. Samuel", "- Yekula Santosh", "- Sunil Rastogi", "- Rohit R"];
var i = 0;

if (i == (msg_arr.length - 1) || i <= 0) {
    i = 0;
}

//function for changing review to next review
function next() {
    let p_msg = document.getElementById("p");
    let p_na = document.getElementById("p_name");
    console.log(msg_arr[4]);
    if (i >= 4) {
        i = 0;
    }
    console.log(p_msg, p_na, i);
    p_msg.innerText = ""
    p_msg.innerText = msg_arr[i++];
    i--;



    p_na.innerText = ""
    p_na.innerText = msg_name[i++];



}
//function for changing review to preview review
function prev() {
    if (i < 0) {
        i = 0;
    }
    let p_msg = document.getElementById("p");
    let p_na = document.getElementById("p_name");


    console.log(msg_arr, p_na);
    p_msg.innerText = ""
    p_msg.innerText = msg_arr[i--];

    i++;

    p_na.innerText = ""
    p_na.innerText = msg_name[i--];

    console.log(p_msg, p_na, i);

}
//function to call myfunction on scroll
window.onscroll = function() {
    myFunction()
};

var navbar = document.getElementById("flow");
var img_scroll = document.createElement("img")
var div_seracxh = document.getElementById("serac_bar_default")
img_scroll.src = "	https://www.zoomcar.com/build/98e56e8b0b91e8806885a22ac2bf69a7.png"
img_scroll.setAttribute("class", "serachbar_pro_img")
img_scroll.setAttribute("width", "100%")
var sticky = navbar.offsetTop;
//function to show search bar on scrolling 
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        navbar.append(img_scroll)
        img_scroll.style.visibility = "visible"
        div_seracxh.style.margin = "1.5% 0% 0% 95%"
        navbar.style.backgroundColor = "white"


    } else {
        navbar.style.backgroundColor = "transparent";
        navbar.classList.remove("sticky");
        img_scroll.style.visibility = "hidden";
        div_seracxh.style.margin = "0% 0% 0% 24%";
    }
}


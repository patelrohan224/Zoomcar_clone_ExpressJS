

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
    changeImg1()
}



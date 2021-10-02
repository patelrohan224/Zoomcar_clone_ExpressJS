



function Suscces() {
    if (document.getElementById("card_number").value !== "" && document.getElementById("card_expiry").value !== "" && document.getElementById("card_CVV").value !== "") {
        alert("please click on Pay for payment.")

    }

    else if (document.getElementById("card_number").value == "" || document.getElementById("card_expiry").value == "" || document.getElementById("card_CVV").value == "") {
        alert("Please enter all value correct")
    }
}




function Suscces() {
    if (document.getElementById("card_number").value !== "" && document.getElementById("card_expiry").value !== "" && document.getElementById("card_CVV").value !== "") {
        alert("please click on Pay for payment.")

    }

    else if (document.getElementById("card_number").value == "" || document.getElementById("card_expiry").value == "" || document.getElementById("card_CVV").value == "") {
        alert("Please enter all value correct")
    }
    setTimeout(() => {
        alert_fun()
    }, 2000);
}

function alert_fun(){
    alert("payment is successful, have safe journey")
}
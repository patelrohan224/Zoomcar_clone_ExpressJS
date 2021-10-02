
var total_join = document.getElementById("price_car").innerText;
console.log('total_join:', total_join)
var total_join = total_join.split("₹").join("")
console.log('total_join:', total_join)

let total=Number(total_join)
total=total+2499

console.log(total);
document.getElementById("total").innerText= `₹ ${total}`
document.getElementById("total_price_db").value = `₹ ${total}`
let i=0;

function zoomnew() {
    if(i==0){
var final = total -( (total*30)/100 )
total = final
total_pay=total

document.getElementById("total").innerText = `₹ ${total}`
document.getElementById("total_price_db").value = `₹ ${total}`

i++
}
}

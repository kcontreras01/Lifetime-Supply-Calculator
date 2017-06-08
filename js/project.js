// final age - current age = years left
// years left * 365 * numPerDay = drinks in lifetime

var age;
var maxAge;
var numPerDay;
var drink;

function calulateTotal() {
	age = document.getElementById("age").value;
	maxAge = document.getElementById("maxAge").value;
	numPerDay= document.getElementById("numPerDay").value;	
	drink = document.getElementById("item").value;
	
	var total = (maxAge - age) * 365 * numPerDay;
	document.getElementById("solution").innerHTML = total;
	document.getElementById("drink").innerHTML = drink;
}

document.getElementById("clickme").onclick = calulateTotal;
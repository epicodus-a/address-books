// get userinput , output the fullname, clear values
// click fullname, show contact detail
// click add address, show another city, state, street
class Contact{
	constructor(first, last){
		this.first = first;
		this.last = last;
		this.addresses = [];
	}
}

class Address {
	constructor(street, city, state){
		this.street = street;
		this.city = city;
		this.state = state;
	}
}

$().ready(function () {
	$(".address-form").submit(function (e) {
		e.preventDefault();
		// debugger;
		let inputKeys = ['firstname', 'lastname', 'street', 'city', 'state'];
		var inputObjs = {};
		let inputValues = document.querySelectorAll("input");
		for (let i = 0; i < inputValues.length; i++) {
			inputObjs[inputKeys[i]] = inputValues[i].value;
			$(".detail").append("<p class='lead'>" + inputKeys[i] + ": " + inputValues[i].value + "</p>");
		}
		$(".fullname").append("<p class='lead mt-4'><a href='#1'>" + inputObjs.firstname[0].toUpperCase() + inputObjs.firstname.substring(1) + " " + inputObjs.lastname + "</a></p>")

	});

	$(".fullname").click(function () {
		$(".detail").show();
	});


	$("#reset").click(function () {
		window.location.reload();
	});


});

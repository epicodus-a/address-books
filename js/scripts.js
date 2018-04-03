// get userinput , output the fullname, clear values
// click fullname, show contact detail
// click add address, show another city, state, street

// business logic
class Contact {
	constructor(first, last) {
		this.first = first;
		this.last = last;
		this.addresses = [];
	}

	fullName() {
		return this.capitalize(this.first) + " " + this.capitalize(this.last);
	}

	capitalize(aString) {
		return aString.charAt(0).toUpperCase() + aString.slice(1).toLowerCase();
	}
}


class Address {
	constructor(street='', city='', state='') {
		this.street = street;
		this.city = city;
		this.state = state;
	}

	fullAddress(){
		return `${this.street}, ${this.city}, ${this.state}`;
	}
}


// user interface logic
$().ready(function () {
	$(".address-form").submit(function (e) {
		e.preventDefault();
		// debugger;

		let firstname = $(".firstname").val();
		let lastname = $(".lastname").val();
		let contact = new Contact(firstname, lastname);
		let newAddress = new Address();
		$(".new-address").each(function () {
			let street = $(this).find("input.street").val();
			let city = $(this).find("input.city").val();
			let state = $(this).find("input.state").val();
			newAddress = new Address(street, city, state);
			contact.addresses.push(newAddress)
		});
		$(".fullname").append(`<p class='lead ${contact.fullName()}'><a href="#">Full Name: ${contact.fullName()} </a></p>`);
		$(".fullname").click(function () {
			$(".detail").show();
			contact.addresses.forEach(function (address) {
				$(".detail").append(`
															<p class='lead'> First Name: ${contact.capitalize(contact.first)}</p>
															<p class='lead'> Last Name: ${contact.capitalize(contact.last)}</p>
															<p class='lead'>Address: ${newAddress.fullAddress()}</p>
														`);
			});
		});
		$("input").val("");
		$("#reset").click(function () {
			window.location.reload();
		});
	});

	// add new address
	$(".add-address").click(function () {
		let newAddress = `
		<div class='new-address'>
			<div class="col-12">
				<div class="form-group">
					<input type="text" class="form-control street" placeholder="street" required>
				</div>
			</div>
			<div class="col-12">
				<div class="form-group">
					<input type="text" class="form-control city" placeholder="city" required>
				</div>
			</div>
			<div class="col-12">
				<div class="form-group">
					<input type="text" class="form-control state" placeholder="state" required>
				</div>
			</div>
		</div>`;
		$("#new-address").append(newAddress);
	});

});

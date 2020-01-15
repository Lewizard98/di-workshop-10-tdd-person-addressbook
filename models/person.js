class Person {
	constructor(firstName, lastName, dob){
		this.firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
		this.lastName = lastName;
		this.dob = dob;
		this.emails = [];
	}
	
	fullName(){
		return this.firstName + ' ' + this.lastName;
	}
	
	addEmail(email){
		this.emails.push(email);
	}
	
}

module.exports = Person;
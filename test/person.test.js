const chai = require('chai')
const expect = chai.expect

const Person = require('../models/person.js');

describe('Person', ()=> {
	it('sould initialize correctly', ()=> {
		var person = new Person('Lewis', 'Keech', '18 Mar 1998');
		expect(person.firstName).to.equal('Lewis');
		expect(person.lastName).to.equal('Keech');
		expect(person.dob).to.equal('18 Mar 1998');
		expect(person.emails).to.deep.equal([]);
	})
	
	it('sould capitalize the first name', ()=> {
		var person = new Person('lewis', 'Keech', '18 Mar 1998');
		expect(person.firstName).to.equal('Lewis');

	})
	
	it('should return a full name', ()=>{
		let person = new Person('Lewis', 'Keech', '18 Mar 1998');
		
		expect(person.fullName()).to.equal('Lewis Keech');
	})
	
	it('should accept new emails and add them to the array', ()=>{
		let person = new Person('Lewis', 'Keech', '18 Mar 1998');
		person.addEmail('Lewis@gmail.com');
		person.addEmail('Lewis1@work.com');
		
		expect(person.emails).to.deep.equal(['Lewis@gmail.com', 'Lewis1@work.com']);
	})
})
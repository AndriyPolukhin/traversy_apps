class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greeting() {
    return `hello there ${this.firstname} ${this.lastname}`;
  }
}

class Customer extends Person {
  constructor(firstname, lastname, phone, membership) {
    super(firstname, lastname);

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const andriy = new Customer('Andriy', 'Polukihn', '093-357-0119', 'delux');
console.log(andriy);
console.log(andriy.greeting());

console.log(Customer.getMembershipCost());

// 1. Factory Methods
function MemberFactory() {

  this.createMember = function (name, type) {
    let member;

    if (type === 'simple') {
      member = new SimpleMembership(name);
    } else if (type === 'standard') {
      member = new StandardMembership(name);
    } else if (type === 'super') {
      member = new SuperMembership(name);
    }

    member.type = type;

    member.define = function () {
      console.log(`${this.name} (${this.type}): ${this.cost}`)
    }
    return member;
  }
}

const SimpleMembership = function (name) {
  this.name = name;
  this.cost = '$5';
}

const StandardMembership = function (name) {
  this.name = name;
  this.cost = '$15';
}

const SuperMembership = function (name) {
  this.name = name;
  this.cost = '$25';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('Andriy', 'super'));
members.push(factory.createMember('Anastasia', 'super'));
members.push(factory.createMember('Alexandra', 'simple'));


console.log(members);

members.forEach((member) => member.define());
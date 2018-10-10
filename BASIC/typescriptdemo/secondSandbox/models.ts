import Person from './person.model';

const example1: Person = new Person(
  {
    firstName: 'Andriy',
    middleName: 'Dragon',
    lastName: 'Polukhin'
  });

example1.firstName = 'Andriy';
example1.middleName = 'Sugar Dragon';
example1.lastName = 'Tsukrov';
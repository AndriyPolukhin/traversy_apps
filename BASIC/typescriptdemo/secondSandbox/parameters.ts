import { Person } from './person.model';

function add(val1: number, val2: number): number {
  return val1 + val2;
}

add(1, 10);

function sayHello(person: Person): string {
  return `Say Hello to My Litttle Friend, ${person.firstName}!`;
}

sayHello(new Person({ firstName: 'Andriy' }));

function voidExample(): void {
  add(1, 2);
}

function neverExample(): never {
  throw Error;
}
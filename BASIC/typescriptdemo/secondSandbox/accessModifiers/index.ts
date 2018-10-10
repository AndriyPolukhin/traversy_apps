import { Bear } from './bear.model';
import { Animal } from './animal.model';

const bear = new Bear({ name: 'Omega', tail: true });
// const animal = new Animal({ type: bear });

bear.claws = 3;
// bear.name = 'Alpha';
// bear.tail = false;

bear.add(1, 2);
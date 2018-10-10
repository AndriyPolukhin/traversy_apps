// @ts-check

"use strict";
exports.__esModule = true;
var bear_model_1 = require("./bear.model");
var bear = new bear_model_1.Bear({ name: 'Omega', tail: true });
// const animal = new Animal({ type: bear });
bear.claws = 3;
// bear.name = 'Alpha';
// bear.tail = false;
bear.add(1, 2);

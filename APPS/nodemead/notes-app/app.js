// const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

// const command = process.argv[2];

// console.log(process.argv);

// Customize yargs
yargs.version('1.1.0');

// add, remove, read, list

console.log(yargs.argv);

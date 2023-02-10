//modules
//CommonJS, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)
const {john,peter} = require('./04-names')
const {sayHi} = require("./05-utils");
const data = require('./06-alternative-imports')
console.log(data)
require('./07-mind-grenede')
sayHi('susan');
sayHi(john)
sayHi(peter)
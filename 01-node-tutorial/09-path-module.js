//path module
const path = require('path')
console.log(path.sep)

const pathFile = path.join('./context/', 'subfolder', 'test.txt');
console.log(pathFile);

const base = path.basename(pathFile);
console.log(base)

const absolute =
    path.resolve(__dirname, 'context', 'subfolder', 'test.txt');
console.log(absolute)
//GLOBALS - NO WINDOW !!!
// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed
//LIST OF GLOBALS: https://nodejs.org/dist/latest-v14.x/docs/api/globals.html
console.log(__dirname);
setInterval(() => {
    console.log("hello world");
}, 1000);

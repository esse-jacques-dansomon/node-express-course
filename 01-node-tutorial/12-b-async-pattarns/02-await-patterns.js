const {readFile, writeFile} = require("fs")
const util = require("util")
const readPromiseFile  =  util.promisify(readFile);
const writePromiseFile  =  util.promisify(writeFile);

//best solution is async/await
const start = async() => {
    try {
        const first =  await readPromiseFile("./context/first.txt", "utf8");
        const second =  await readPromiseFile("./context/second.txt", "utf8");
        await writePromiseFile("./context/result-wait-promise.txt", `THIS IS AWESOME ${first} ${second}`)
    } catch (error) {
        console.log("erro")
    }
}

start();

//old one
/*readFile("./context/first.txt", "utf8", (err, res)=>{
    if(err){
        retun
    }else{
        console.log(res)
    }
})*/

//using PROMISES
// const getext = (path) => {
//     return new Promise((resolve, reject) =>{
//         readFile(path, "utf8", (err, res)=> {
//             if(err){
//                 reject(err)
//             }else{
//                 resolve(res)
//             }
//         })
//     })
// }

//is good util we have mutile files to read
// getext("./context/first.txt")
// .then((res)=> console.log(res))
// .catch((err)=>console.log(err))

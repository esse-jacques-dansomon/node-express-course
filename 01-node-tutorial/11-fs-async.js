//fs : file system
const {readFile, writeFile} = require('fs');
readFile('./context/first.txt' , 'utf8',
    (err, result) => {
        if(err){
            console.log(err)
            return
        }
        const first = result
        readFile('./context/second.txt' , 'utf8' ,
            (err2, result2) => {
                if(err2){
                    console.log(err2)
                    return
                }
                const second = result2
                writeFile(
                    './context/result-async.txt',
                    `Here is the async result ${first}, ${second}`,
                    (err, result) => {
                        if(err){
                            console.log(err)
                        }
                        console.log("write success")
                    })
            }
        )
    }
);

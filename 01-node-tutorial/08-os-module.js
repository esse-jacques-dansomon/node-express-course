//os module
//is used to interrate  with the operating os
const os = require ('os')

//info about current user
const user = os.userInfo()
console.log(user)

//method return the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()/3600} h`)

const currentOs ={
    name : os.platform(),
    release : os.release(),
    totalmem : os.totalmem(),
    freemem : os.freemem(),
}

console.log(currentOs);


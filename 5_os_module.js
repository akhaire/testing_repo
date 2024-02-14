const os = require('os')

//Info about current user
const user = os.userInfo()
console.log(user);


//Method return the systems uptime in seconds
console.log(`The systems uptime is ${os.uptime()} second`)

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
}

console.log(currentOs)
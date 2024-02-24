const EventEmmiter = require('events')

const customeEvent = new EventEmmiter()


customeEvent.on('responce',(name,id)=>{
    console.log(`Data recieve ${name} And ${id}`)
})

customeEvent.on('responce',()=>{
    console.log("some other data")
})

customeEvent.emit('responce','john',35)
import {io} from 'socket.io-client'

const socket = io ("http://localhost/3001")
socket.on ("connect", () => {
    console.log (`hello {socket.id}`)
    socket.emit ('farnaz-event', 10, 'hi')
})


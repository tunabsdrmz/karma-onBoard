const express = require('express');
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const port = 3000

let onlineUsers = []


//servera giren kullanıcıyı aldım
 io.on('connection', socket => {
    //servere giren kullanıcıları theRoom dediğim rooma yönlendirdim
    socket.join("theRoom")
    //clienttan gelen sendLike on metodunu emitleyerek theRooma emitliyorum
    //theRoom emitini de Likes.js de on metoduyla alarak göstericem 
    socket.on('sendLike', (senderName,senderDate,senderPhoto) =>{
      socket.to("theRoom").emit("getLike", {senderName,senderDate,senderPhoto})  
    })
    

    
})

server.listen(port, () => console.log('server running on ' + port))